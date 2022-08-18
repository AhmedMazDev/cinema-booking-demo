import { Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import AppContext from "../context/appContext";
import TablesManager from "./TablesManager";
import SeatsManager from "./SeatsManager";
import TypesManager from "./TypesManager";
import VenuMap from "./VenuMap";

const Dashboard: React.FC = () => {
  return (
    <Flex direction={"column"} align="center" w="100%" gap={8}>
      <Text fontSize={30} fontWeight="bold">
        Dashboard :
      </Text>
      <Flex gap="8">
        <SeatsManager />
        <TypesManager />
        <TablesManager />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
