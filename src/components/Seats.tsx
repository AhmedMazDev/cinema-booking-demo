import { Box, Button, Flex, Grid, Select, Text } from "@chakra-ui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Seat } from "../types/seat";
import { Type } from "../types/type";

interface SeatsProps {
  seats: Seat[];
  types: Type[];
  setSeats: (seats: Seat[]) => void;
  columns: number;
}

const Seats: React.FC<SeatsProps> = ({ seats, columns, setSeats, types }) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [type, setType] = useState<Type>();

  useEffect(() => {
    console.log("selectedSeats : ", selectedSeats);
  }, [selectedSeats]);

  useEffect(() => {
    console.log("type : ", type);
  }, [type]);

  useEffect(() => {
    setType(types[0]);
  }, [types]);

  const handleSeatClick = (seat: Seat) => {
    if (seat.isReserved) {
      return;
    }
    const newSelectedSeats = [...selectedSeats];
    const index = newSelectedSeats.findIndex((s) => s.number === seat.number);
    if (index === -1) {
      newSelectedSeats.push(seat);
    } else {
      newSelectedSeats.splice(index, 1);
    }
    setSelectedSeats(newSelectedSeats);
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
    }),
      setSeats(newSeats);
    setSelectedSeats([]);
  };

  return (
    <Flex direction={"column"} align="center" justify={"center"} my={4}>
      <Text fontSize={"15"} fontWeight="bold">
        you have selected this seats numbers :{" "}
      </Text>
      <Flex gap="4">
        {selectedSeats.map((seat) => (
          <Text>{seat.number}</Text>
        ))}
      </Flex>
      <Flex gap="8" align={"center"}>
        <Button
          onClick={reserveSeats}
          disabled={selectedSeats.length === 0}
          colorScheme="whatsapp"
        >
          Make seats reserved
        </Button>
        <Flex gap="8" my="4" align={"center"}>
          <Text w="100%">Select Type : </Text>
          <Select
            value={type?.name}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setType(types.find((t) => t.name === e.target.value));
            }}
          >
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </Select>
          <Button
            onClick={changeType}
            colorScheme="orange"
            width={"100%"}
            disabled={selectedSeats.length === 0}
          >
            Change Type
          </Button>
        </Flex>
      </Flex>
      <Grid
        gridTemplateColumns={`repeat(${columns}, 1fr)`}
        gap={8}
        overflow={"auto"}
        bg="#222222"
        w="800px"
        h="500px"
        padding={"5"}
      >
        {seats.map((seat, index) => {
          return (
            <>
              {seat.isReserved ? (
                <Box
                  w="20px"
                  h="20px"
                  bg={"grey"}
                  display="inline-block"
                  borderTopLeftRadius={"10px"}
                  borderTopRightRadius={"10px"}
                ></Box>
              ) : (
                <Box
                  w="20px"
                  h="20px"
                  bg={
                    selectedSeats.some((s) => s.number === seat.number)
                      ? "yellow"
                      : seat.type?.color || "white"
                  }
                  onClick={
                    seat.isReserved ? () => {} : () => handleSeatClick(seat)
                  }
                  cursor="pointer"
                  display="inline-block"
                  borderTopLeftRadius={"10px"}
                  borderTopRightRadius={"10px"}
                ></Box>
              )}

              {/* <div
                key={index}
                className={clsx(
                  "seat",
                  seat.isReserved ? "occupied" : "",
                  selectedSeats.some((s) => s.number === seat.number)
                    ? "selected"
                    : ""
                )}
                onClick={
                  seat.isReserved ? () => {} : () => handleSeatClick(seat)
                }
              ></div> */}
            </>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Seats;
