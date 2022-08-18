import { Seat } from "./seat";
import { Table } from "./table";
import { VenuObject } from "./venuObject";

export interface MapVenu {
  rows: number;
  columns: number;
  seats: Seat[];
  topTables: Table[];
  bottomTables: Table[];
  leftTables: Table[];
  rightTables: Table[];
  topObjects: VenuObject[];
  bottomObjects: VenuObject[];
  leftObjects: VenuObject[];
  rightObjects: VenuObject[];
}

export enum Positions {
  TOP = "Top",
  BOT = "Bottom",
  RIGHT = "Right",
  LEFT = "Left",
}
