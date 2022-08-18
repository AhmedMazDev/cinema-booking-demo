import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "../context/appContext";
import { Type } from "../types/type";

const TypesTable = () => {
  const { types, setTypes } = useContext(AppContext);

  const onDeleteType = (type: Type) => {
    const newTypes = types.filter((t) => t.type !== type.type);
    setTypes(newTypes);
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name </Th>
            <Th>Price</Th>
            <Th>Type</Th>
            <Th>Color</Th>
          </Tr>
        </Thead>
        <Tbody>
          {types.map((type) => (
            <Tr key={type.type}>
              <Td>{type.name}</Td>
              <Td>{type.price}</Td>
              <Td>{type.type}</Td>
              <Td>
                <Box bg={type.color} h="20px" w="20px"></Box>
              </Td>
              <Td>
                <Button onClick={() => onDeleteType(type)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TypesTable;
