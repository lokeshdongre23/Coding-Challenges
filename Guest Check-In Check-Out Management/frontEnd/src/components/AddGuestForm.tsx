import { useState } from "react";
import { createGuest } from "../services/guestService";

interface Props {
  onGuestAdded: () => void;
}

const AddGuestForm = ({ onGuestAdded }: Props) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Guest name is required");
      return;
    }

    setLoading(true);
    await createGuest(name);
    setName("");
    setLoading(false);
    onGuestAdded();
  };

  return (
    <form onSubmit={submitHandler} className="add-form">
      <input
        type="text"
        placeholder="Enter guest name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Guest"}
      </button>
    </form>
  );
};

export default AddGuestForm;
