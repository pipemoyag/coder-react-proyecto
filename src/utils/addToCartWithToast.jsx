import { Link } from "react-router";
import toast from "react-hot-toast";

export function addToCartWithToast({
  item,
  addToCart,
  quantity = 1,
  quantityInCart,
}) {
  addToCart(item, quantity);

  toast.custom(
    (t) => (
      <Link
        to="/cart"
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => toast.dismiss(t.id)}
      >
        <div
          style={{
            padding: "12px 16px",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            cursor: "pointer",
          }}
        >
          <strong>¡{item.title} añadido!</strong>
          <div style={{ fontSize: "0.9rem", color: "#555" }}>
            Tienes {quantityInCart + quantity} en el carrito
          </div>
        </div>
      </Link>
    ),
    {
      id: "cart-toast",
      duration: 2500,
    }
  );
}
