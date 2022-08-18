import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import AppContext from "../context/appContext";
import { MapVenu } from "../types/map";
import Seats from "./Seats";
import Tables from "./Tables";

type VenuMapProps = {
  venuMap: MapVenu;
};

const VenuMap: React.FC = () => {
  const { leftTables, rightTables, topTables, bottomTables } =
    useContext(AppContext);

  return (
    <Flex direction={"column"} align="center" justify={"center"} mb="5">
      <Text fontSize={26} fontWeight="bold">
        Map :
      </Text>
      <Grid
        bg="#222222"
        templateAreas={`"A1 A1 A1"
                  "A2 B2 C2"
                  "A3 A3 A3"`}
        placeItems={"center"}
        padding="2"
        w="900px"
        h="800px"
        overflow={"auto"}
      >
        <GridItem area="A1">
          {topTables.length > 0 && <Tables tables={topTables} />}
        </GridItem>
        <GridItem area="A2">
          {leftTables.length > 0 && <Tables tables={leftTables} />}
        </GridItem>
        <GridItem area="B2">
          <Seats />
        </GridItem>
        <GridItem area="C2">
          {rightTables.length > 0 && <Tables tables={rightTables} />}
        </GridItem>
        <GridItem area="A3">
          {bottomTables.length > 0 && <Tables tables={bottomTables} />}
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default VenuMap;
