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
} from "reactflow";
import "reactflow/dist/style.css";
import ELK from "elkjs/lib/elk.bundled.js";
import type { ElkExtendedEdge, ElkNode } from "elkjs";
import { PersonDrawer, PersonDetails } from "./PersonDrawer";

export type PersonNode = {
  id: string;
  fullName: string;
  title?: string;
  team?: string;
  avatarUrl?: string;
  managerId?: string | null;
};

export type OrgChartData = {
  nodes: PersonNode[];
};

function buildGraph(data: OrgChartData) {
  const idToNode = new Map<string, PersonNode>();
  data.nodes.forEach((p) => idToNode.set(p.id, p));

  const elkNodes: ElkNode[] = data.nodes.map((p) => ({
    id: p.id,
    width: 220,
    height: 72,
  }));

  const elkEdges: ElkExtendedEdge[] = [];
  for (const p of data.nodes) {
    if (p.managerId) {
      elkEdges.push({ id: `${p.managerId}->${p.id}`, sources: [p.managerId], targets: [p.id] });
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

function useElkLayout(data: OrgChartData) {
  const elk = useMemo(() => new ELK(), []);
  return useCallback(async () => {
    const graph = buildGraph(data);
    const result = await elk.layout(graph);

    const nodes: Node[] = (result.children ?? []).map((c) => ({
      id: c.id!,
      position: { x: c.x ?? 0, y: c.y ?? 0 },
      data: { label: c.id },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: { width: 220, height: 72 },
    }));

    const edges: Edge[] = (result.edges ?? []).map((e) => ({ id: e.id!, source: e.sources![0], target: e.targets![0] }));

    return { nodes, edges };
  }, [data, elk]);
}

export function OrgChartViewer({ data }: { data: OrgChartData }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selected, setSelected] = React.useState<PersonDetails | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  const layout = useElkLayout(data);

  const runLayout = useCallback(async () => {
    const { nodes, edges } = await layout();
    setNodes(nodes);
    setEdges(edges);
  }, [layout, setNodes, setEdges]);

  React.useEffect(() => {
    runLayout();
  }, [runLayout]);

  return (
    <div className="h-[600px] w-full border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        onNodeClick={(_, n) => {
          const p = data.nodes.find((p) => p.id === n.id);
          if (p) {
            setSelected({ id: p.id, fullName: p.fullName, title: p.title, team: p.team });
            setOpen(true);
          }
        }}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
      <PersonDrawer person={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}
