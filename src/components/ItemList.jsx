import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="container my-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
