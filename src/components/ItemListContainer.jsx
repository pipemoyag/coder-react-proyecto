import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import ItemList from "./ItemList";
import Loader from "./Loader";

function ItemListContainer({}) {
  const { categoryName } = useParams(); // si estamos en ruta raíz, el categoryName es undefined
  const url = categoryName
    ? `https://dummyjson.com/products/category/${categoryName}`
    : "https://dummyjson.com/products";

  const { data, loading, error } = useFetch(url, []); // traemos los datos
  const items = data.products || []; // API devuelve un objeto donde products es una propiedad

  if (error)
    return (
      <p className="text-danger text-center my-3">
        Error al cargar productos 😿
      </p>
    );

  return <Loader loading={loading} render={() => <ItemList items={items} />} />;
}

export default ItemListContainer;
