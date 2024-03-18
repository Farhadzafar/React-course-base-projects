import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import State from "./State";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletingItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItme(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const comfirmed = window.confirm("Are you sure, to delete the all item!");
    if (comfirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeletItem={handleDeletingItems}
        onTaggleItme={handleToggleItme}
        onClearList={handleClearList}
      />
      <State items={items} />
    </div>
  );
}

export default App;
