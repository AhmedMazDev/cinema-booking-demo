import { Positions } from "./map";
import { Type } from "./type";

export interface Table {
  number: string;
  numberOfSeats: number;
  isReserved: boolean;
  totalPrice: number;
  position: Positions;
  type: Type | null;
}
