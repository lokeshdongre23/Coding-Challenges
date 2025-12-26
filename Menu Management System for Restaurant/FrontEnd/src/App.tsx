import React from "react";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";

const App: React.FC = () => {
  const [refresh, setRefresh] = React.useState(false);
  return (
    <div>
      <h1>Menu Admin</h1>
      <MenuForm onAdd={() => setRefresh(!refresh)} />
      <MenuList key={refresh ? 1 : 0} />
    </div>
  );
};

export default App;
