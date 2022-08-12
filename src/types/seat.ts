import { Type } from "./type";

export interface Seat {
  number: number;
  isReserved: boolean;
  type: Type | null;
}
