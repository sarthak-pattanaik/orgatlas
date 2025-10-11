"use client";

import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  MiniMap,
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  Position,
  ReactFlowInstance,
} from "reactflow";
import "reactflow/dist/style.css";
import ELK from "elkjs/lib/elk.bundled.js";
import type { ElkExtendedEdge, ElkNode } from "elkjs";
import { PersonDrawer, PersonDetails } from "./PersonDrawer";
import dynamic from "next/dynamic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

export type PersonNode = {
  id: string;
  fullName: string;
  title?: string;
  team?: string;
  avatarUrl?: string;
  managerId?: string | null;
  linkedinUrl?: string;
};

export type OrgChartData = { nodes: PersonNode[] };

type OrgPersonNodeData = {
  person: PersonNode;
  isCollapsed: boolean;
  hasChildren: boolean;
  onToggleCollapse: (id: string) => void;
};

function OrgPersonNode({ data }: { data: OrgPersonNodeData }) {
  const { person, isCollapsed, hasChildren, onToggleCollapse } = data;
  const initials = useMemo(() => {
    return person.fullName
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }, [person.fullName]);

  return (
    <div className="w-[220px] h-[72px] rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 shadow-sm">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={person.avatarUrl} alt={person.fullName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <div className="text-sm font-medium truncate">{person.fullName}</div>
          <div className="text-xs text-neutral-500 truncate">{person.title}</div>
        </div>
        {hasChildren ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="ml-auto h-6 w-6"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCollapse(person.id);
            }}
            aria-label={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function buildGraphFromVisible(visible: Set<string>, childrenMap: Map<string, string[]>) {
  const elkNodes: ElkNode[] = Array.from(visible).map((id) => ({ id, width: 220, height: 72 }));

  const elkEdges: ElkExtendedEdge[] = [];
  for (const source of visible) {
    const kids = childrenMap.get(source) ?? [];
    for (const k of kids) {
      if (visible.has(k)) {
        elkEdges.push({ id: `${source}->${k}`, sources: [source], targets: [k] });
      }
    }
  }

  const elkGraph: ElkNode = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.layered.spacing.nodeNodeBetweenLayers": "48",
      "elk.spacing.nodeNode": "32",
      "elk.layered.nodePlacement.strategy": "SIMPLE",
    },
    children: elkNodes,
    edges: elkEdges,
  };
  return elkGraph;
}

function useElkLayout() {
  const elk = useMemo(() => new ELK(), []);
  return useCallback(async (graph: ElkNode) => {
    const result = await elk.layout(graph);
    const nodes: Node[] = (result.children ?? []).map((c) => ({
      id: c.id!,
      position: { x: c.x ?? 0, y: c.y ?? 0 },
      data: {},
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: { width: 220, height: 72 },
      type: "orgPerson",
    }));
    const edges: Edge[] = (result.edges ?? []).map((e) => ({ id: e.id!, source: e.sources![0], target: e.targets![0] }));
    return { nodes, edges };
  }, [elk]);
}

export function OrgChartViewer({ data, filterQuery, showCTA = false }: { data: OrgChartData; filterQuery?: string; showCTA?: boolean }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selected, setSelected] = React.useState<PersonDetails | undefined>(undefined);
  const [open, setOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState<Set<string>>(new Set());
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const rf = React.useRef<ReactFlowInstance | null>(null);

  const idToPerson = useMemo(() => {
    const map = new Map<string, PersonNode>();
    for (const p of data.nodes) map.set(p.id, p);
    return map;
  }, [data.nodes]);

  const childrenMap = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const p of data.nodes) {
      if (p.managerId) {
        const arr = m.get(p.managerId) ?? [];
        arr.push(p.id);
        m.set(p.managerId, arr);
      }
    }
    return m;
  }, [data.nodes]);

  const parentMap = useMemo(() => {
    const m = new Map<string, string | null>();
    for (const p of data.nodes) m.set(p.id, p.managerId ?? null);
    return m;
  }, [data.nodes]);

  const hasChildren = useCallback((id: string) => (childrenMap.get(id) ?? []).length > 0, [childrenMap]);

  const computeVisible = useCallback(() => {
    // Root nodes are those without manager
    const roots = data.nodes.filter((p) => !p.managerId).map((p) => p.id);
    const visible = new Set<string>();
    const stack = [...roots];
    while (stack.length) {
      const id = stack.pop()!;
      visible.add(id);
      if (collapsed.has(id)) continue;
      const kids = childrenMap.get(id) ?? [];
      for (const k of kids) stack.push(k);
    }

    if (filterQuery && filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      const matches = new Set<string>();
      for (const p of data.nodes) {
        if (!visible.has(p.id)) continue;
        const hay = `${p.fullName} ${p.title ?? ""}`.toLowerCase();
        if (hay.includes(q)) matches.add(p.id);
      }
      // Include ancestors of matches for context
      for (const id of Array.from(matches)) {
        let cur = parentMap.get(id) ?? null;
        while (cur) {
          matches.add(cur);
          cur = parentMap.get(cur) ?? null;
        }
      }
      return matches;
    }

    return visible;
  }, [childrenMap, collapsed, data.nodes, filterQuery, parentMap]);

  const layout = useElkLayout();

  const runLayout = useCallback(async () => {
    const visible = computeVisible();
    const graph = buildGraphFromVisible(visible, childrenMap);
    const { nodes, edges } = await layout(graph);
    // enrich node data for rendering
    const nodesWithData: Node[] = nodes.map((n) => ({
      ...n,
      data: {
        person: idToPerson.get(n.id)!,
        isCollapsed: collapsed.has(n.id),
        hasChildren: hasChildren(n.id),
        onToggleCollapse: (id: string) => {
          setCollapsed((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
          });
        },
      } as OrgPersonNodeData,
    }));
    setNodes(nodesWithData);
    setEdges(edges);
  }, [childrenMap, collapsed, computeVisible, hasChildren, idToPerson, layout, setEdges, setNodes]);

  React.useEffect(() => {
    runLayout();
  }, [runLayout]);

  const nodeTypes = useMemo(() => ({ orgPerson: OrgPersonNode }), []);

  return (
    <div className={`relative ${isFullScreen ? "fixed inset-0 z-50" : "h-[600px]"} w-full border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-950`}>
      {/* Toolbar */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => rf.current?.fitView()}>Reset view</Button>
        <Button size="sm" onClick={() => setIsFullScreen((v) => !v)}>{isFullScreen ? "Exit full screen" : "Full screen"}</Button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        onInit={(instance) => (rf.current = instance)}
        nodeTypes={nodeTypes}
        panOnDrag
        zoomOnScroll
        onNodeClick={(_, n) => {
          const p = idToPerson.get(n.id);
          if (p) {
            setSelected({
              id: p.id,
              fullName: p.fullName,
              title: p.title,
              team: p.team,
              office: undefined,
              avatarUrl: p.avatarUrl,
              linkedinUrl: p.linkedinUrl,
            });
            setOpen(true);
          }
        }}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
      {showCTA ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto max-w-sm p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow">
            <div className="font-semibold">Unlock full org insights</div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Upgrade to view deep hierarchies, advanced filters, and exports.</div>
            <div className="mt-3 flex gap-2">
              <Button size="sm" className="bg-red-500 hover:bg-red-600">Upgrade</Button>
              <Button size="sm" variant="outline">Learn more</Button>
            </div>
          </div>
        </div>
      ) : null}
      <PersonDrawer person={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}
