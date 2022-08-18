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

const TablesManager: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    topTables,
    leftTables,
    bottomTables,
    rightTables,
    setTopTables,
    setBottomTables,
    setLeftTables,
    setRightTables,
  } = useContext(AppContext);

  const [noTables, setNoTables] = useState(0);
  const [tableNoSeats, setTableNoSeats] = useState<number>(0);
  const [tablePosition, setTablePosition] = useState("Top");

  useEffect(() => {
    console.log("position : ", tablePosition);
  }, [tablePosition]);

  const handleTablesGeneration = () => {
    const tables = Array.from({ length: noTables }, (_, i) => {
      return {
        numberOfSeats: tableNoSeats,
        number: i + 1,
        totalPrice: 0,
        type: null,
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
