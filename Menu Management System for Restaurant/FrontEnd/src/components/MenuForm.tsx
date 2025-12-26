import React, { useState } from "react";
import { addMenuItem } from "../service/api";

const MenuForm: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addMenuItem({ name, category, price });
    setName("");
    setCategory("");
    setPrice(0);
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
      />
      <button type="submit">Add Menu Item</button>
    </form>
  );
};

export default MenuForm;
