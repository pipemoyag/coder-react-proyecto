import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

function CartProvider({ children }) {
  // inicializar desde localStorage,
  // cuando valor inicial de useState es función flecha, se asigna el return de esa funcion solo cuando se monta el componente
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });

  // guardar en localStorage cuando cambie el cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const id = product.id;

      // revisamos si el producto ya existe en el carro
      if (prevCart[id]) {
        return {
          ...prevCart,
          [id]: {
            ...prevCart[id],
            count: prevCart[id].count + quantity,
          },
        };
      }

      return {
        ...prevCart,
        [id]: {
          ...product,
          count: quantity,
        },
      };
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updated = { ...prevCart };
      delete updated[id];
      return updated;
    });
  };

  // funcion para actualizaciones de cantidad desde la pagina del carro
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: {
        ...prevCart[id],
        count: quantity,
      },
    }));
  };

  const clearCart = () => setCart({});

  // convertimos el objeto en array para mapearlo en componentes y usar metodo reduce
  const cartArray = Object.values(cart);

  const getItemQuantity = (id) =>
    cartArray.find((p) => p.id === id)?.count ?? 0;

  const getCartQuantity = () =>
    cartArray.reduce((acc, item) => acc + item.count, 0);

  const getTotalPrice = () =>
    cartArray.reduce((acc, item) => acc + item.price * item.count, 0);

  const value = {
    cart: cartArray,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
    getCartQuantity,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
