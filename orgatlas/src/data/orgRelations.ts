export type OrgRelation = { id: string; managerId: string | null; reportId: string };

export const orgRelations: OrgRelation[] = [
  { id: "r1", managerId: null, reportId: "satya" },
  { id: "r2", managerId: "satya", reportId: "judson" },
  { id: "r3", managerId: "satya", reportId: "amanda" },
  { id: "r4", managerId: "satya", reportId: "scott" },
  { id: "r5", managerId: "amanda", reportId: "eng_manager" },
  { id: "r6", managerId: "eng_manager", reportId: "swe1" },
  { id: "r7", managerId: "eng_manager", reportId: "swe2" }
];
