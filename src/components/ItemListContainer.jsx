import { useParams } from "react-router";
import { useAsync } from "../hooks/useAsync";
import { getProducts, getProductByCategory } from "../firebase/db";
import Loader from "./Loader";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryName } = useParams();

  const {
    data: items,
    loading,
    error,
  } = useAsync(
    () => (categoryName ? getProductByCategory(categoryName) : getProducts()),
    [categoryName], // dependencias
    [] // initialData
  );

  if (error)
    return (
      <p className="text-danger text-center my-3">
        Error al cargar productos 😿
      </p>
    );

  return <Loader loading={loading} render={() => <ItemList items={items} />} />;
}

export default ItemListContainer;
