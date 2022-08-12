import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { Seat } from "../types/seat";
import { Type, Types } from "../types/type";
import Seats from "./Seats";
import TypesManager from "./TypesManager";

interface DashboardProps {
  rows: number;
  columns: number;
  setRows: (rows: number) => void;
  setColumns: (columns: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  rows,
  columns,
  setRows,
  setColumns,
}) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [typeData, setTypeData] = useState<Type>();
  const [allTypes, setAllTypes] = useState<Type[]>([]);

  useEffect(() => {
    fillAllTypes();
  }, []);

  useEffect(() => {
    console.log("allTypes : ", allTypes);
  }, [allTypes]);

  useEffect(() => {
    console.log("seats : ", seats);
  }, [seats]);

  useEffect(() => {
    console.log("types : ", types);
  }, [types]);

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

  const generateSeats = () => {
    const array = Array.from({ length: columns * rows }, (_, i) => {
      return {
        number: i + 1,
        price: 0,
        isReserved: false,
        type: null,
      } as Seat;
    });
    setSeats(array);
  };

  const addType = () => {
    const newTypes = [...types];
    newTypes.push(typeData!);
    setTypes(newTypes);
  };

  return (
    <Flex direction={"column"} align="center" w="100%" gap={8}>
      <Text fontSize={30}> Dashboard : </Text>
      <Flex align={"center"} gap={8}>
        <Text w="100%" fontWeight={"bold"} fontSize={15}>
          select rows :{" "}
        </Text>
        <Input
          type={"number"}
          value={rows}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRows(parseInt(e.target.value));
          }}
        />
        <Text w="100%" fontWeight={"bold"} fontSize={15}>
          select columns :
        </Text>
        <Input
          type={"number"}
          value={columns}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setColumns(parseInt(e.target.value));
          }}
        />
        <Button onClick={generateSeats} w="100%" colorScheme="messenger">
          Generate seats
        </Button>
      </Flex>
      <TypesManager types={types} setTypes={setTypes} allTypes={allTypes} />
      <Seats
        seats={seats}
        columns={columns}
        setSeats={setSeats}
        types={types}
      />
    </Flex>
  );
};

export default Dashboard;
