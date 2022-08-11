import React, { useEffect, useState } from "react";
import { Seat } from "../types/seat";
import { Type } from "../types/type";
import Seats from "./Seats";

interface DashboardProps {
  rows: number;
  columns: number;
  setRows: (rows: number) => void;
  setColumns: (columns: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  rows,
  columns,
  setRows,
  setColumns,
}) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [typeData, setTypeData] = useState<Type>();

  useEffect(() => {
    console.log("seats : ", seats);
  }, [seats]);

  useEffect(() => {
    console.log("types : ", types);
  }, [types]);

  const generateSeats = () => {
    const array = Array.from({ length: columns * rows }, (_, i) => {
      return {
        number: i + 1,
        price: 0,
        isReserved: false,
        type: "Regular",
      } as Seat;
    });
    setSeats(array);
  };

  const addType = () => {
    const newTypes = [...types];
    newTypes.push(typeData!);
    setTypes(newTypes);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1> Dashboard : </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <label>select rows : </label>
        <input
          type={"number"}
          value={rows}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRows(parseInt(e.target.value));
          }}
        />
        <label>select columns : </label>
        <input
          type={"number"}
          value={columns}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setColumns(parseInt(e.target.value));
          }}
        />
        <button
          onClick={generateSeats}
          style={{
            background: "green",
          }}
        >
          Generate seats
        </button>
      </div>
      <p>Add type : </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <label>Name : </label>
        <input
          type={"text"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTypeData({ ...typeData, name: e.target.value } as Type);
          }}
        />
        <label>Price : </label>
        <input
          type={"text"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTypeData({
              ...typeData,
              price: parseInt(e.target.value),
            } as Type);
          }}
        />
        <button onClick={addType}>Add type</button>
      </div>
      <Seats
        seats={seats}
        columns={columns}
        setSeats={setSeats}
        types={types}
      />
    </div>
  );
};

export default Dashboard;
