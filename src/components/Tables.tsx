import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { Table } from "../types/table";
import { GiRoundTable } from "react-icons/gi";

interface TablesProps {
  tables: Table[];
}

const Tables: React.FC<TablesProps> = ({ tables }) => {
  return (
    <Flex align="center" justify={"center"}>
      {tables.map((table, i) => (
        <Icon as={GiRoundTable} h="20" w="20" color="white" key={i} />
      ))}
    </Flex>
  );
};

export default Tables;
