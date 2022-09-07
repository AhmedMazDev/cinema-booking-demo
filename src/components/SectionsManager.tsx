import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import AppContext from "../context/appContext";
import { Positions } from "../types/map";
import { Section } from "../types/section";
import { Type } from "../types/type";

type Props = {};

export default function SectionsManager({}: Props) {
  const {
    types,
    selectedSections,
    setSelectedSections,
    topSections,
    leftSections,
    bottomSections,
    rightSections,
    setTopSections,
    setBottomSections,
    setLeftSections,
    setRightSections,
  } = useContext(AppContext);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [noSections, setNoSections] = useState(0);
  const [sectionsNoSeats, setSectionsNoSeats] = useState<number>(0);
  const [sectionsPosition, setSectionsPosition] = useState("Top");
  const [sectionName, setSectionName] = useState<string>("");
  const [type, setType] = useState<Type>();

  const handleSectionsGeneration = () => {
    const Sections = Array.from({ length: noSections }, (_, i) => {
      return {
        numberOfSeats: sectionsNoSeats,
        number: nanoid(10),
        totalPrice: 0,
        type: null,
        position: sectionsPosition,
        isReserved: false,
        name: sectionName,
      } as Section;
    });

    if (sectionsPosition === Positions.LEFT) {
      setLeftSections([...leftSections, ...Sections]);
    }
    if (sectionsPosition === Positions.RIGHT) {
      setRightSections([...rightSections, ...Sections]);
    }
    if (sectionsPosition === Positions.TOP) {
      setTopSections([...topSections, ...Sections]);
    }
    if (sectionsPosition === Positions.BOT) {
      setBottomSections([...bottomSections, ...Sections]);
    }
  };

  const reserveSections = () => {
    selectedSections.forEach((table) => {
      if (table.position === Positions.LEFT) {
        const newLeftSections = [...leftSections];
        const index = leftSections.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newLeftSections[index].isReserved = true;
        }
        setLeftSections(newLeftSections);
      }
      if (table.position === Positions.RIGHT) {
        const newRightSections = [...rightSections];
        const index = rightSections.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newRightSections[index].isReserved = true;
        }
        setRightSections(newRightSections);
      }
      if (table.position === Positions.TOP) {
        const newTopSections = [...topSections];
        const index = topSections.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newTopSections[index].isReserved = true;
        }
        setTopSections(newTopSections);
      }
      if (table.position === Positions.BOT) {
        const newBottomSections = [...bottomSections];
        const index = bottomSections.findIndex(
          (t) => t.number === table.number
        );
        if (index !== -1) {
          newBottomSections[index].isReserved = true;
        }
        setBottomSections(newBottomSections);
      }
    });
  };

  const changeSectionsType = () => {
    if (!type) {
      return;
    }

    selectedSections.forEach((table) => {
      if (table.position === Positions.LEFT) {
        const newLeftSections = [...leftSections];
        const index = leftSections.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newLeftSections[index].type = type;
          newLeftSections[index].totalPrice = type.price * table.numberOfSeats;
        }
        setLeftSections(newLeftSections);
      }
      if (table.position === Positions.RIGHT) {
        const newRightSections = [...rightSections];
        const index = rightSections.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newRightSections[index].type = type;
          newRightSections[index].totalPrice = type.price * table.numberOfSeats;
        }
        setRightSections(newRightSections);
      }
      if (table.position === Positions.TOP) {
        const newTopSections = [...topSections];
        const index = topSections.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newTopSections[index].type = type;
          newTopSections[index].totalPrice = type.price * table.numberOfSeats;
        }
        setTopSections(newTopSections);
      }
      if (table.position === Positions.BOT) {
        const newBottomSections = [...bottomSections];
        const index = bottomSections.findIndex(
          (t) => t.number === table.number
        );
        if (index !== -1) {
          newBottomSections[index].type = type;
          newBottomSections[index].totalPrice =
            type.price * table.numberOfSeats;
        }
        setBottomSections(newBottomSections);
      }
    }),
      setSelectedSections([]);
  };

  return (
    <Flex>
      <Button onClick={onOpen}> Sections Manager </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sections Manager : </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="4" direction={"column"}>
              <FormControl>
                <FormLabel>No of Sections : </FormLabel>
                <Input
                  type="number"
                  value={noSections}
                  onChange={(e) => {
                    setNoSections(parseInt(e.target.value));
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>No seats : </FormLabel>
                <Input
                  type="number"
                  value={sectionsNoSeats}
                  onChange={(e) => {
                    setSectionsNoSeats(parseInt(e.target.value));
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Name of Sections : </FormLabel>
                <Input
                  type="text"
                  value={sectionName}
                  onChange={(e) => {
                    setSectionName(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Position : </FormLabel>
                <Select
                  value={sectionsPosition}
                  onChange={(e) => {
                    setSectionsPosition(e.target.value);
                  }}
                >
                  {Object.values(Positions).map((pos) => (
                    <option key={pos}>{pos}</option>
                  ))}
                </Select>
              </FormControl>
            </Flex>
            <Flex align={"center"} direction="column" gap={4} mt={4}>
              <Flex gap="4">
                <Button
                  colorScheme="whatsapp"
                  w="100%"
                  onClick={reserveSections}
                >
                  Reserve Sections
                </Button>
                <Button
                  colorScheme="orange"
                  w="100%"
                  onClick={changeSectionsType}
                >
                  Make Sections this Type :
                </Button>
                <Select
                  value={type?.name}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setType(types.find((t) => t.name === e.target.value));
                  }}
                >
                  {types.map((type, i) => (
                    <option key={i} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </Select>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSectionsGeneration}
            >
              Add Sections
            </Button>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
