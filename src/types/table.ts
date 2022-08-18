import { Type } from "./type";

export interface Table {
  number: number;
  numberOfSeats: number;
  isReserved: boolean;
  totalPrice: number;
  type: Type | null;
}
