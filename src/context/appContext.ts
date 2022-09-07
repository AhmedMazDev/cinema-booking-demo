import { createContext } from "react";
import { Seat } from "../types/seat";
import { Table } from "../types/table";
import { Type } from "../types/type";
import { Section } from "../types/section";

interface AppContext {
  seats: Seat[];
  topTables: Table[];
  bottomTables: Table[];
  rightTables: Table[];
  leftTables: Table[];
  topSections: Section[];
  bottomSections: Section[];
  rightSections: Section[];
  leftSections: Section[];
  types: Type[];
  allTypes: Type[];
  selectedSeats: Seat[];
  selectedTables: Table[];
  selectedSections: Section[];
  columns: number;
  rows: number;
  setSeats: (seats: Seat[]) => void;
  setTopTables: (topTables: Table[]) => void;
  setBottomTables: (bottomTables: Table[]) => void;
  setRightTables: (rightTables: Table[]) => void;
  setLeftTables: (leftTables: Table[]) => void;
  setTopSections: (topSections: Section[]) => void;
  setBottomSections: (bottomSections: Section[]) => void;
  setRightSections: (rightSections: Section[]) => void;
  setLeftSections: (leftSections: Section[]) => void;
  setTypes: (types: Type[]) => void;
  setAllTypes: (allTypes: Type[]) => void;
  setSelectedSeats: (selectedSeats: Seat[]) => void;
  setSelectedTables: (selectedTables: Table[]) => void;
  setColumns: (columns: number) => void;
  setSelectedSections: (sections: Section[]) => void;
  setRows: (rows: number) => void;
}

const AppContext = createContext<AppContext>({
  seats: [],
  topTables: [],
  bottomTables: [],
  rightTables: [],
  leftTables: [],
  topSections: [],
  bottomSections: [],
  rightSections: [],
  leftSections: [],
  types: [],
  allTypes: [],
  selectedSeats: [],
  selectedTables: [],
  selectedSections: [],
  columns: 0,
  rows: 0,
  setSeats: () => {},
  setTopTables: () => {},
  setBottomTables: () => {},
  setRightTables: () => {},
  setLeftTables: () => {},
  setTopSections: () => {},
  setBottomSections: () => {},
  setRightSections: () => {},
  setLeftSections: () => {},
  setTypes: () => {},
  setAllTypes: () => {},
  setSelectedSeats: () => {},
  setSelectedTables: () => {},
  setColumns: () => {},
  setRows: () => {},
  setSelectedSections: () => {},
});

export default AppContext;
