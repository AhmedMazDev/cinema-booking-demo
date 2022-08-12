export interface Type {
  name: string;
  type: Types;
  color: "#626262" | string;
  price: number;
}

export enum Types {
  Regular = "Regular",
  Royal = "Royal",
  VIP = "VIP",
  Special = "Special",
  Stand = "Stand",
}
