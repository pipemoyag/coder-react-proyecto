import { useParams } from "react-router";
import { useAsync } from "../hooks/useAsync";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { getProduct } from "../firebase/db";

function ItemDetailContainer() {
  const { id } = useParams();

  const {
    data: item,
    loading,
    error,
  } = useAsync(
    () => getProduct(id),
    [id], // dependencias
    { title: "", description: "", price: "" } // initialData
  );

  if (error)
    return (
      <p className="text-danger text-center my-3">
        Error al cargar el producto 😿
      </p>
    );

  return <Loader loading={loading} render={() => <ItemDetail item={item} />} />;
}

export default ItemDetailContainer;
