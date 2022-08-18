import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import AppContext from "../context/appContext";

const Legend = () => {
  const { types } = useContext(AppContext);

  return (
    <Flex align={"center"} justify="center" my="8" gap="4" direction={"column"}>
      <Text fontSize={20} fontWeight="bold">
        Legend :
      </Text>
      <Flex gap="8" bg="#7e7e7e" padding={4} textColor="white">
        <Flex gap="2">
          <Text>Occupied</Text>
          <Box
            w="20px"
            h="20px"
            bg={"#626262"}
            display="inline-block"
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={"10px"}
          ></Box>
        </Flex>
        <Flex gap="2">
          <Text>N/A</Text>
          <Box
            w="20px"
            h="20px"
            bg={"white"}
            display="inline-block"
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={"10px"}
          ></Box>
        </Flex>
        <Flex gap="2">
          <Text>Selected</Text>
          <Box
            w="20px"
            h="20px"
            bg={"yellow"}
            display="inline-block"
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={"10px"}
          ></Box>
        </Flex>
        {types.map((type, i) => (
          <Flex gap="2" key={i}>
            <Text>{type.name}</Text>
            <Box
              w="20px"
              h="20px"
              bg={type.color}
              display="inline-block"
              borderTopLeftRadius={"10px"}
              borderTopRightRadius={"10px"}
            ></Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Legend;
