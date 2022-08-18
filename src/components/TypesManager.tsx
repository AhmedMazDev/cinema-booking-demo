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
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";
import { Type, Types } from "../types/type";
import TypesTable from "./TypesTable";

interface TypesProps {}

const TypesManager: React.FC<TypesProps> = () => {
  const { types, allTypes, setTypes, setAllTypes } = useContext(AppContext);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [availableTypes, setAvailableTypes] = useState<Type[]>([]);
  const [newTypeData, setNewTypeData] = useState<Type>({
    name: "",
    price: 0,
    color: "#626262",
    type: Types.REGULAR,
  });

  useEffect(() => {
    const filteredTypes: Type[] = allTypes.filter(
      (type) => !types.some((t) => t.type === type.type)
    );
    setAvailableTypes(filteredTypes);
  }, [allTypes, types]);

  const onAddType = () => {
    const newTypes: Type[] = [...types, newTypeData];
    setTypes(newTypes);
    setNewTypeData({
      name: "",
      price: 0,
      color: "#626262",
      type: availableTypes[0].type,
    });
  };

  return (
    <Flex direction={"column"} gap={8}>
      <Button onClick={onOpen}>Types Manager</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
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
            <Flex direction={"column"} gap="8">
              {types.length !== 0 && <TypesTable />}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onAddType}>
              Add Type
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
