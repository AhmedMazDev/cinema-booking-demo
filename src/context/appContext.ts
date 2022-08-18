import { createContext } from "react";
import { Seat } from "../types/seat";
import { Table } from "../types/table";
import { Type } from "../types/type";
import { VenuObject } from "../types/venuObject";

interface AppContext {
  seats: Seat[];
  topTables: Table[];
  bottomTables: Table[];
  rightTables: Table[];
  leftTables: Table[];
  topObjects: VenuObject[];
  bottomObjects: VenuObject[];
  rightObjects: VenuObject[];
  leftObjects: VenuObject[];
  types: Type[];
  allTypes: Type[];
  selectedSeats: Seat[];
  selectedTables: Table[];
  columns: number;
  rows: number;
  setSeats: (seats: Seat[]) => void;
  setTopTables: (topTables: Table[]) => void;
  setBottomTables: (bottomTables: Table[]) => void;
  setRightTables: (rightTables: Table[]) => void;
  setLeftTables: (leftTables: Table[]) => void;
  setTopObjects: (topObjects: VenuObject[]) => void;
  setBottomObjects: (bottomObjects: VenuObject[]) => void;
  setRightObjects: (rightObjects: VenuObject[]) => void;
  setLeftObjects: (leftObjects: VenuObject[]) => void;
  setTypes: (types: Type[]) => void;
  setAllTypes: (allTypes: Type[]) => void;
  setSelectedSeats: (selectedSeats: Seat[]) => void;
  setSelectedTables: (selectedTables: Table[]) => void;
  setColumns: (columns: number) => void;
  setRows: (rows: number) => void;
}

const AppContext = createContext<AppContext>({
  seats: [],
  topTables: [],
  bottomTables: [],
  rightTables: [],
  leftTables: [],
  topObjects: [],
  bottomObjects: [],
  rightObjects: [],
  leftObjects: [],
  types: [],
  allTypes: [],
  selectedSeats: [],
  selectedTables: [],
  columns: 0,
  rows: 0,
  setSeats: () => {},
  setTopTables: () => {},
  setBottomTables: () => {},
  setRightTables: () => {},
  setLeftTables: () => {},
  setTopObjects: () => {},
  setBottomObjects: () => {},
  setRightObjects: () => {},
  setLeftObjects: () => {},
  setTypes: () => {},
  setAllTypes: () => {},
  setSelectedSeats: () => {},
  setSelectedTables: () => {},
  setColumns: () => {},
  setRows: () => {},
});

export default AppContext;
