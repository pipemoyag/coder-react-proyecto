import { useAsync } from "../hooks/useAsync";
import { getCategories } from "../firebase/db";
import NavBar from "./NavBar";

function NavBarContainer() {
  const {
    data: categories,
    loading,
    error,
  } = useAsync(() => getCategories(), [], []);

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

  return <NavBar categories={categories} />;
}

export default NavBarContainer;
