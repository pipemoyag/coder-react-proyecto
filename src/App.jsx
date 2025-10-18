import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import InputAux from "./components/InputAux";

function App() {
  const [cartCount, setCartCount] = useState("0");
  return (
    <>
      <NavBar cartCount={cartCount} />
      <ItemListContainer
        text={
          "Bienvenido a Cat Republic Petshop! El sitio se encuentra actualmente en construcción"
        }
      />
      <ItemListContainer text={"Cuántos productos lleva en su carrito?"} />
      <InputAux cartCount={cartCount} setCartCount={setCartCount} />
    </>
  );
}

export default App;
