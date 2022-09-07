import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import AppContext from "../context/appContext";
import { MapVenu } from "../types/map";
import Seats from "./Seats";
import Sections from "./Sections";
import Tables from "./Tables";

type VenuMapProps = {
  venuMap: MapVenu;
};

const VenuMap: React.FC = () => {
  const {
    leftTables,
    rightTables,
    topTables,
    bottomTables,
    topSections,
    leftSections,
    bottomSections,
    rightSections,
  } = useContext(AppContext);

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
          {topSections.length > 0 && <Sections sections={topSections} />}
        </GridItem>
        <GridItem area="A2">
          {leftTables.length > 0 && <Tables tables={leftTables} />}
          {leftSections.length > 0 && <Sections sections={leftSections} />}
        </GridItem>
        <GridItem area="B2">
          <Seats />
        </GridItem>
        <GridItem area="C2">
          {rightTables.length > 0 && <Tables tables={rightTables} />}
          {rightSections.length > 0 && <Sections sections={rightSections} />}
        </GridItem>
        <GridItem area="A3">
          {bottomTables.length > 0 && <Tables tables={bottomTables} />}
          {bottomSections.length > 0 && <Sections sections={bottomSections} />}
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default VenuMap;
