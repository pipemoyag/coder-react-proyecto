import { useFetch } from "../hooks/useFetch";
import NavBar from "./NavBar";

function NavBarContainer() {
  const {
    data: categories,
    loading,
    error,
  } = useFetch("https://dummyjson.com/products/category-list");

  if (error) {
    return (
      <>
        <NavBar categories={[]} />
        <p className="text-danger text-center my-3">
          Error al cargar categorías 😿
        </p>
      </>
    );
  }

  return <NavBar categories={categories || []} />;
}

export default NavBarContainer;
