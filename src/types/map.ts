import { Seat } from "./seat";
import { Table } from "./table";
import { Section } from "./section";

export interface MapVenu {
  rows: number;
  columns: number;
  seats: Seat[];
  topTables: Table[];
  bottomTables: Table[];
  leftTables: Table[];
  rightTables: Table[];
  topObjects: Section[];
  bottomObjects: Section[];
  leftObjects: Section[];
  rightObjects: Section[];
}

export enum Positions {
  TOP = "Top",
  BOT = "Bottom",
  RIGHT = "Right",
  LEFT = "Left",
}
