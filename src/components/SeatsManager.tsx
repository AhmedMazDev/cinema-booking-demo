import {
  Button,
  Flex,
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
import types from "@emotion/styled";
import React, { useContext, useState } from "react";
import AppContext from "../context/appContext";
import { Seat } from "../types/seat";
import { Type } from "../types/type";

const SeatsManager: React.FC = () => {
  const {
    rows,
    types,
    columns,
    seats,
    selectedSeats,
    setColumns,
    setRows,
    setSeats,
    setSelectedSeats,
  } = useContext(AppContext);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [type, setType] = useState<Type>();

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
    onClose();
  };

  const reserveSeats = () => {
    const newSeats = [...seats];
    selectedSeats.forEach((seat) => {
      const index = newSeats.findIndex((s) => s.number === seat.number);
      if (index !== -1) {
        newSeats[index].isReserved = true;
      }
    }),
      setSeats(newSeats);
    setSelectedSeats([]);
  };

  const changeType = () => {
    const newSeats = [...seats];
    selectedSeats.forEach((seat) => {
      const index = newSeats.findIndex((s) => s.number === seat.number);
      if (index !== -1) {
        newSeats[index].type = type!;
      }
    });
    setSeats(newSeats);
    setSelectedSeats([]);
  };

  return (
    <Flex>
      <Button onClick={onOpen}>Seats Manager : </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Seats Manager : </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex align={"center"} direction="column" gap={8}>
              <Text w="100%" fontWeight={"bold"} fontSize={15}>
                select rows :
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
            </Flex>
            <Flex align={"center"} direction="column" gap={4}>
              <Text fontSize={20} fontWeight="bold">
                Seats Selected :
              </Text>
              <Flex gap="4">
                {selectedSeats.map((seat) => (
                  <Text key={seat.number}>{seat.number}</Text>
                ))}
              </Flex>
              <Flex gap="4">
                <Button
                  colorScheme="whatsapp"
                  disabled={selectedSeats.length === 0}
                  w="100%"
                  onClick={reserveSeats}
                >
                  Reserve Seats
                </Button>
                <Button
                  colorScheme="orange"
                  disabled={selectedSeats.length === 0}
                  w="100%"
                  onClick={changeType}
                >
                  Make Seats this Type :
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
            <Button colorScheme="blue" mr={3} onClick={generateSeats}>
              Generate seats
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SeatsManager;
