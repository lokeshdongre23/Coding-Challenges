// import { useState } from "react";
// import TableCart from "./components/TableCart";
// import RoomList from "./components/RoomList";
import ReservationForm from "./components/ReservationForm";
interface RoomDetail {
  type: string;
  price: number;
  availability: boolean;
}
function App() {
  const Rooms: RoomDetail[] = [
    {
      type: "DElux",
      price: 2000,
      availability: true,
    },
    {
      type: "Preminum",
      price: 1500,
      availability: true,
    },
    {
      type: "luxery",
      price: 1000,
      availability: false,
    },
  ];
  return (
    <>
      {/* <RoomList room={Rooms} /> */}
      {/* <TableCart /> */}
      <ReservationForm />
    </>
  );
}

export default App;
