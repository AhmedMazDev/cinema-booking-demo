import { Flex, Icon } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Table } from "../types/table";
import { GiRoundTable } from "react-icons/gi";
import AppContext from "../context/appContext";
import { Positions } from "../types/map";

interface TablesProps {
  tables: Table[];
}

const Tables: React.FC<TablesProps> = ({ tables }) => {
  const { selectedTables, setSelectedTables } = useContext(AppContext);

  const handleSelectedTable = (table: Table) => {
    if (table.isReserved) {
      return;
    }

    const newSelectedTables = [...selectedTables];
    const index = newSelectedTables.findIndex((t) => t.number === table.number);
    if (index === -1) {
      newSelectedTables.push(table);
    } else {
      newSelectedTables.splice(index, 1);
    }
    setSelectedTables(newSelectedTables);
  };

  return (
    <Flex align="center" justify={"center"}>
      {tables.map((table, i) => (
        <>
          {table.isReserved ? (
            <Icon as={GiRoundTable} h="20" w="20" color="grey" key={i} />
          ) : (
            <Icon
              as={GiRoundTable}
              h="20"
              w="20"
              color={
                selectedTables.some((s) => s.number === table.number)
                  ? "yellow"
                  : table.type?.color || "white"
              }
              key={i}
              cursor="pointer"
              onClick={() => handleSelectedTable(table)}
            />
          )}
        </>
      ))}
    </Flex>
  );
};

export default Tables;
