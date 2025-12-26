import { useEffect, useState } from "react";
import GuestItem from "./GuestItem";
import AddGuestForm from "./AddGuestForm";
import {
  getGuests,
  checkInGuest,
  checkOutGuest,
} from "../services/guestService";

interface Guest {
  _id: string;
  name: string;
  status: "checked-in" | "checked-out";
}

const GuestList = () => {
  const [guests, setGuests] = useState<Guest[]>([]);

  const loadGuests = async () => {
    const data = await getGuests();
    setGuests(data);
  };

  useEffect(() => {
    loadGuests();
  }, []);

  return (
    <div>
      <AddGuestForm onGuestAdded={loadGuests} />

      {guests.length === 0 && <p>No guests yet.</p>}

      {guests.map((guest) => (
        <GuestItem
          key={guest._id}
          guest={guest}
          onCheckIn={async (id) => {
            await checkInGuest(id);
            loadGuests();
          }}
          onCheckOut={async (id) => {
            await checkOutGuest(id);
            loadGuests();
          }}
        />
      ))}
    </div>
  );
};

export default GuestList;
