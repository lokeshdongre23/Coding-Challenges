import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

interface Guest {
  _id: string;
  name: string;
  status: "checked-in" | "checked-out";
}

interface Props {
  guest: Guest;
  onCheckIn: (id: string) => void;
  onCheckOut: (id: string) => void;
}

const GuestItem = ({ guest, onCheckIn, onCheckOut }: Props) => {
  const [confirm, setConfirm] = useState<null | "in" | "out">(null);

  return (
    <div className="guest-item">
      <span>{guest.name}</span>

      <span
        className={guest.status === "checked-in" ? "status in" : "status out"}
      >
        {guest.status}
      </span>

      {guest.status === "checked-out" ? (
        <button onClick={() => setConfirm("in")}>Check In</button>
      ) : (
        <button onClick={() => setConfirm("out")}>Check Out</button>
      )}

      {confirm && (
        <ConfirmDialog
          message={`Are you sure you want to check ${
            confirm === "in" ? "in" : "out"
          }?`}
          onConfirm={() => {
            confirm === "in" ? onCheckIn(guest._id) : onCheckOut(guest._id);
            setConfirm(null);
          }}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
};

export default GuestItem;
