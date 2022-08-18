export interface Type {
  name: string;
  type: Types;
  color: "#626262" | string;
  price: number;
}

export enum Types {
  REGULAR = "Regular",
  ROYAL = "Royal",
  VIP = "VIP",
  SPECIAL = "Special",
  STAND = "Stand",
}
