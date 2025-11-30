import { useState } from "react";
import { addToCartWithToast } from "../utils/addToCartWithToast";
import { useCart } from "../context/useCart";

function ItemCount({ item }) {
  const { addToCart, getItemQuantity } = useCart();
  const quantityInCart = getItemQuantity(item.id);

  const maxAvailable = item.stock - quantityInCart;

  const [counter, setCounter] = useState(1);

  const increaseCount = () => {
    if (counter < maxAvailable) {
      setCounter(counter + 1);
    }
  };

  const decreaseCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    addToCartWithToast({
      item,
      addToCart,
      quantity: counter,
      quantityInCart,
    });
    setCounter(1);
  };

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-outline-secondary" onClick={decreaseCount}>
          -
        </button>
        <span className="mx-3 fs-5">{counter}</span>
        <button className="btn btn-outline-secondary" onClick={increaseCount}>
          +
        </button>
      </div>

      <button
        className="btn btn-primary px-3 py-2"
        onClick={handleAddToCart}
        disabled={maxAvailable <= 0}
      >
        Agregar al carrito
      </button>

      {maxAvailable <= 0 && (
        <p className="text-danger mt-2">No queda stock disponible.</p>
      )}
    </>
  );
}

export default ItemCount;
