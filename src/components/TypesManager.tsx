import {
  Box,
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
import React, { useEffect, useState } from "react";
import { Type, Types } from "../types/type";

interface TypesProps {
  allTypes: Type[];
  types: Type[];
  setTypes: (types: Type[]) => void;
}

const TypesManager: React.FC<TypesProps> = ({ setTypes, types, allTypes }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [availableTypes, setAvailableTypes] = useState<Type[]>([]);
  const [newTypeData, setNewTypeData] = useState<Type>({
    name: "",
    price: 0,
    color: "#626262",
    type: Types.Regular,
  });

  useEffect(() => {
    const filteredTypes: Type[] = allTypes.filter(
      (type) => !types.some((t) => t.type === type.type)
    );
    console.log("first filteredTypes : ", filteredTypes);
    setAvailableTypes(filteredTypes);
  }, [allTypes, types]);

  const onAddType = () => {
    const newTypes: Type[] = [...types, newTypeData];
    setTypes(newTypes);
    onClose();
    setNewTypeData({
      name: "",
      price: 0,
      color: "#626262",
      type: availableTypes[0].type,
    });
  };

  const onDeleteType = (type: Type) => {
    const newTypes = types.filter((t) => t.type !== type.type);
    setTypes(newTypes);
  };

  return (
    <Flex direction={"column"} gap={8}>
      <Text fontSize={30}>Types Manager : </Text>
      <Button onClick={onOpen}>Add Type</Button>
      <Flex direction={"column"} gap="8">
        {types.length !== 0 && (
          <Flex gap="8">
            <Text fontSize={15} fontWeight="bold">
              Name :
            </Text>
            <Text fontSize={15} fontWeight="bold">
              Price :
            </Text>
            <Text fontSize={15} fontWeight="bold">
              Color :
            </Text>
            <Text fontSize={15} fontWeight="bold">
              Type :
            </Text>
          </Flex>
        )}
        {types?.map((type, i) => (
          <Flex key={i} align="center" gap="8">
            <Text fontWeight={"bold"}>{type.name}</Text>
            <Text>{type.price}</Text>
            <Box backgroundColor={type.color} w="20px" h="20px"></Box>
            <Text>{type.type}</Text>
            <Button onClick={() => onDeleteType(type)} colorScheme="red">
              Delete
            </Button>
          </Flex>
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Type</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"}>
              <FormControl>
                <FormLabel>Name : </FormLabel>
                <Input
                  value={newTypeData?.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewTypeData({ ...newTypeData, name: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Type : </FormLabel>
                <Select
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setNewTypeData({
                      ...newTypeData,
                      type: e.target.value as Types,
                    })
                  }
                >
                  {availableTypes.map((type, i) => (
                    <option key={i} value={type.type}>
                      {type.type}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Price : </FormLabel>
                <Input
                  type="number"
                  value={newTypeData?.price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewTypeData({
                      ...newTypeData,
                      price: parseInt(e.target.value),
                    });
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Color : </FormLabel>
                <Input
                  type="color"
                  value={newTypeData?.color}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewTypeData({ ...newTypeData, color: e.target.value });
                  }}
                />
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onAddType}>
              Add
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

export default TypesManager;
