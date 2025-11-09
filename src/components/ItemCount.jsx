import { useState } from "react";

// POR AHORA ES SOLO 1 COMPONENTE. SI MAS ADELANTE EL CONTADOR SE CONECTA AL CONTEXTO DEL CARRITO O
// A UNA BASE DE DATOS, Y SE TENGAN QUE HACER VALIDACIONES, SE SEPARARA USANDO ItemCountContainer

function ItemCount({ stock }) {
  const [count, setCount] = useState(1);

  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const quitar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex align-items-center mb-4">
      <button className="btn btn-outline-secondary" onClick={quitar}>
        -
      </button>
      <span className="mx-3 fs-5">{count}</span>
      <button className="btn btn-outline-secondary" onClick={agregar}>
        +
      </button>
    </div>
  );
}

export default ItemCount;
