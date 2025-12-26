import React, { useEffect, useState } from "react";
import { getMenu, deleteMenuItem } from "../service/api";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
}

const MenuList: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const fetchMenu = async () => {
    const res = await getMenu();
    setMenu(res.data as any[]);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteMenuItem(id);
    fetchMenu();
  };

  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <strong>{item.name}</strong> - {item.category} - ${item.price}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
