// src/containers/CartContainer.jsx
import { useCart } from "../context/useCart";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, getTotalPrice, updateQuantity, removeFromCart } =
    useCart();

  const total = getTotalPrice();

  return (
    <Cart
      cart={cart}
      total={total}
      onClear={clearCart}
      onRemove={removeFromCart}
      onUpdate={updateQuantity}
    />
  );
};

export default CartContainer;
