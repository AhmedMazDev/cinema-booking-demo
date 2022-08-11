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
        newSeats[index].type = type?.name!;
        newSeats[index].price = type?.price!;
      }
    }),
      setSeats(newSeats);
    setSelectedSeats([]);
  };

  return (
    <div
      style={{
        width: "700px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      seats component
      <p>you have selected this seats : </p>
      <div>{JSON.stringify(selectedSeats)}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <button onClick={reserveSeats}>Make seats reserved</button>
        <div>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setType(types.find((t) => t.name === e.target.value));
            }}
          >
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          <button onClick={changeType}>Change Type</button>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, minmax(100px, 1fr))`,
          gap: "10px",
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        {seats.map((seat, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "seat",
                seat.isReserved ? "occupied" : "",
                selectedSeats.some((s) => s.number === seat.number)
                  ? "selected"
                  : ""
              )}
              onClick={seat.isReserved ? () => {} : () => handleSeatClick(seat)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Seats;
