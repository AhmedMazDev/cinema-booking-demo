import { Box, Button, Flex, Grid, Icon, Select, Text } from "@chakra-ui/react";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Seat } from "../types/seat";
import { Type } from "../types/type";
import { MdChair, MdChairAlt } from "react-icons/md";
import { GiRoundTable } from "react-icons/gi";
import AppContext from "../context/appContext";

const Seats: React.FC = () => {
  const { seats, selectedSeats, types, setSeats, columns, setSelectedSeats } =
    useContext(AppContext);

  useEffect(() => {
    console.log("selectedSeats : ", selectedSeats);
  }, [selectedSeats]);

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

  return (
    <Flex direction={"column"} align="center" justify={"center"} my={4}>
      <Grid
        gridTemplateColumns={`repeat(${columns}, 1fr)`}
        gap={"6px"}
        placeItems="center"
        overflow={"auto"}
        alignItems={"center"}
        bg="#222222"
        w="800px"
        h="500px"
        padding={"10"}
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
                  key={index}
                ></Box>
              ) : (
                <Box
                  key={index}
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
            </>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Seats;
