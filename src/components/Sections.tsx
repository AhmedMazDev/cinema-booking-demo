import { Flex, Icon, Table, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { GiRoundTable } from "react-icons/gi";
import AppContext from "../context/appContext";
import { Section } from "../types/section";
import { GiHut } from "react-icons/gi";
import Hut from "../chakra/Hut";

type Props = {
  sections: Section[];
};

function Sections({ sections }: Props) {
  const { selectedSections, setSelectedSections } = useContext(AppContext);

  const handleSelectedTable = (table: Section) => {
    if (table.isReserved) {
      return;
    }

    const newSelectedSections = [...selectedSections];
    const index = newSelectedSections.findIndex(
      (t) => t.number === table.number
    );
    if (index === -1) {
      newSelectedSections.push(table);
    } else {
      newSelectedSections.splice(index, 1);
    }
    setSelectedSections(newSelectedSections);
  };

  return (
    <Flex align="center" justify={"center"}>
      {sections.map((table, i) => (
        <>
          {table.isReserved ? (
            <Icon as={GiHut} h="10" w="10" color="grey" key={i} />
          ) : (
            <Icon
              as={GiHut}
              h="10"
              w="10"
              color={
                selectedSections.some((s) => s.number === table.number)
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
}

export default Sections;
