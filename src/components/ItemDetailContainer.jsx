import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";

function ItemDetailContainer() {
  const { id } = useParams();

  const {
    data: item,
    loading,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`, {
    title: "",
    description: "",
    price: "",
  });

  if (error)
    return (
      <p className="text-danger text-center my-3">
        Error al cargar el producto 😿
      </p>
    );

  return <Loader loading={loading} render={() => <ItemDetail item={item} />} />;
}

export default ItemDetailContainer;
