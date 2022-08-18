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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Positions } from "../types/map";
import AppContext from "../context/appContext";
import { Table } from "../types/table";
import { Type } from "../types/type";
import rn from "random-number";
import { nanoid } from "nanoid";

const TablesManager: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    topTables,
    leftTables,
    types,
    bottomTables,
    rightTables,
    setTopTables,
    setBottomTables,
    setLeftTables,
    setRightTables,
    setSelectedTables,
    selectedTables,
  } = useContext(AppContext);

  const [noTables, setNoTables] = useState(0);
  const [tableNoSeats, setTableNoSeats] = useState<number>(0);
  const [tablePosition, setTablePosition] = useState("Top");

  const [type, setType] = useState<Type>();

  useEffect(() => {
    console.log("position : ", tablePosition);
  }, [tablePosition]);

  useEffect(() => {
    console.log("type : ", type);
  }, [type]);

  const handleTablesGeneration = () => {
    const tables = Array.from({ length: noTables }, (_, i) => {
      return {
        numberOfSeats: tableNoSeats,
        number: nanoid(10),
        totalPrice: 0,
        type: null,
        position: tablePosition,
        isReserved: false,
      } as Table;
    });
    // set tables based on position
    if (tablePosition === Positions.LEFT) {
      setLeftTables([...leftTables, ...tables]);
    }
    if (tablePosition === Positions.RIGHT) {
      setRightTables([...rightTables, ...tables]);
    }
    if (tablePosition === Positions.TOP) {
      setTopTables([...topTables, ...tables]);
    }
    if (tablePosition === Positions.BOT) {
      setBottomTables([...bottomTables, ...tables]);
    }
  };

  const reserveTables = () => {
    console.log("tables : ", selectedTables);
    selectedTables.forEach((table) => {
      if (table.position === Positions.LEFT) {
        const newLeftTables = [...leftTables];
        const index = leftTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newLeftTables[index].isReserved = true;
        }
        setLeftTables(newLeftTables);
      }
      if (table.position === Positions.RIGHT) {
        const newRightTables = [...rightTables];
        const index = rightTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newRightTables[index].isReserved = true;
        }
        setRightTables(newRightTables);
      }
      if (table.position === Positions.TOP) {
        const newTopTables = [...topTables];
        const index = topTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newTopTables[index].isReserved = true;
        }
        setTopTables(newTopTables);
      }
      if (table.position === Positions.BOT) {
        const newBottomTables = [...bottomTables];
        const index = bottomTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newBottomTables[index].isReserved = true;
        }
        setBottomTables(newBottomTables);
      }
    });
  };

  const changeTablesType = () => {
    if (!type) {
      return;
    }

    selectedTables.forEach((table) => {
      if (table.position === Positions.LEFT) {
        const newLeftTables = [...leftTables];
        const index = leftTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newLeftTables[index].type = type;
          newLeftTables[index].totalPrice = type.price * table.numberOfSeats;
        }
        setLeftTables(newLeftTables);
      }
      if (table.position === Positions.RIGHT) {
        const newRightTables = [...rightTables];
        const index = rightTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newRightTables[index].type = type;
          newRightTables[index].totalPrice = type.price * table.numberOfSeats;
        }
        setRightTables(newRightTables);
      }
      if (table.position === Positions.TOP) {
        const newTopTables = [...topTables];
        const index = topTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newTopTables[index].type = type;
          newTopTables[index].totalPrice = type.price * table.numberOfSeats;
        }
        setTopTables(newTopTables);
      }
      if (table.position === Positions.BOT) {
        const newBottomTables = [...bottomTables];
        const index = bottomTables.findIndex((t) => t.number === table.number);
        if (index !== -1) {
          newBottomTables[index].type = type;
          newBottomTables[index].totalPrice = type.price * table.numberOfSeats;
        }
        setBottomTables(newBottomTables);
      }
    }),
      setSelectedTables([]);
  };

  return (
    <Flex>
      <Button onClick={onOpen}>Tables Manager </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tables Manager : </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="4" direction={"column"}>
              <FormControl>
                <FormLabel>No of tables : </FormLabel>
                <Input
                  type="number"
                  value={noTables}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNoTables(parseInt(e.target.value))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>No seats : </FormLabel>
                <Input
                  type="number"
                  value={tableNoSeats}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTableNoSeats(parseInt(e.target.value))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Position : </FormLabel>
                <Select
                  value={tablePosition}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setTablePosition(e.target.value);
                  }}
                >
                  {Object.values(Positions).map((pos) => (
                    <option key={pos}>{pos}</option>
                  ))}
                </Select>
              </FormControl>
            </Flex>
            <Flex align={"center"} direction="column" gap={4}>
              <Text fontSize={20} fontWeight="bold">
                Tables Selected :
              </Text>
              <Flex gap="4">
                {selectedTables.map((table) => (
                  <Text key={table.number}>{table.number}</Text>
                ))}
              </Flex>
              <Flex gap="4">
                <Button
                  colorScheme="whatsapp"
                  disabled={selectedTables.length === 0}
                  w="100%"
                  onClick={reserveTables}
                >
                  Reserve Tables
                </Button>
                <Button
                  colorScheme="orange"
                  disabled={selectedTables.length === 0}
                  w="100%"
                  onClick={changeTablesType}
                >
                  Make Tables this Type :
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
            <Button colorScheme="blue" mr={3} onClick={handleTablesGeneration}>
              Add Tables
            </Button>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default TablesManager;
