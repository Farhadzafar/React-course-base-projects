export default function State({ items }) {
  const numItems = items.length;
  if (numItems === 0)
    return (
      <p className="stats">
        🤔 <em>Start add some itme in your packed list!!!</em>
      </p>
    );
  const numPacked = items.filter((item) => item.packed).length;
  const presntPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {presntPacked === 100 ? (
        <em>You get everything! ready to go 🚍</em>
      ) : (
        <em>
          {`💼 You have ${numItems} items an your list, and you already packed ${numPacked}  (${presntPacked}%)`}
        </em>
      )}
    </footer>
  );
}
