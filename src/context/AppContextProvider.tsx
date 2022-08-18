import { ReactNode, useCallback, useEffect, useState } from "react";
import { Seat } from "../types/seat";
import { Table } from "../types/table";
import { Type, Types } from "../types/type";
import { VenuObject } from "../types/venuObject";
import AppContext from "./appContext";

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [topTables, setTopTables] = useState<Table[]>([]);
  const [bottomTables, setBottomTables] = useState<Table[]>([]);
  const [rightTables, setRightTables] = useState<Table[]>([]);
  const [leftTables, setLeftTables] = useState<Table[]>([]);
  const [topObjects, setTopObjects] = useState<VenuObject[]>([]);
  const [bottomObjects, setBottomObjects] = useState<VenuObject[]>([]);
  const [rightObjects, setRightObjects] = useState<VenuObject[]>([]);
  const [leftObjects, setLeftObjects] = useState<VenuObject[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [allTypes, setAllTypes] = useState<Type[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [selectedTables, setSelectedTables] = useState<Table[]>([]);
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    fillAllTypes();
  }, []);

  const fillAllTypes = useCallback(() => {
    //fill the types
    const typesToFill = Array.from(
      { length: Object.values(Types).length },
      (_, i) => {
        return {
          name: Object.values(Types)[i],
          price: 0,
          color: "#626262",
          type: Object.values(Types)[i],
        } as Type;
      }
    );
    setAllTypes(typesToFill);
  }, []);

  useEffect(() => {
    console.log(
      "top tables",
      topTables,
      " bottom tables",
      bottomTables,
      " right tables",
      rightTables,
      " left tables",
      leftTables
    );
  }, [leftTables, rightTables, topTables, bottomTables]);

  return (
    <AppContext.Provider
      value={{
        seats,
        rows,
        columns,
        topTables,
        bottomTables,
        rightTables,
        leftTables,
        topObjects,
        bottomObjects,
        rightObjects,
        leftObjects,
        types,
        allTypes,
        selectedSeats,
        selectedTables,
        setSeats,
        setTopTables,
        setBottomTables,
        setRightTables,
        setLeftTables,
        setTopObjects,
        setBottomObjects,
        setRightObjects,
        setLeftObjects,
        setTypes,
        setAllTypes,
        setSelectedSeats,
        setSelectedTables,
        setRows,
        setColumns,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
