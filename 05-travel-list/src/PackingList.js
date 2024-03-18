import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeletItem,
  onTaggleItme,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let setSortItem;

  if (sortBy === "input") setSortItem = items;

  if (sortBy === "description")
    setSortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    setSortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {setSortItem.map((item) => (
          <Item
            item={item}
            onDeletItem={onDeletItem}
            onTaggleItme={onTaggleItme}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={(e) => onClearList(e)}>Clear all</button>
      </div>
    </div>
  );
}
