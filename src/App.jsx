import { useState } from "react";
import "./App.css";
import NavBarContainer from "./components/NavBarContainer";
import ItemListContainer from "./components/ItemListContainer";
import InputAux from "./components/InputAux";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />
      {/* <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
