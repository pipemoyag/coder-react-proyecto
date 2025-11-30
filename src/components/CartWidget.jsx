import { Link } from "react-router";
import { useCart } from "../context/useCart";

const CartWidget = () => {
  const { getCartQuantity } = useCart();
  const quantity = getCartQuantity();
  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      <i className="bi bi-cart"></i>
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
        {quantity}
      </span>
    </Link>
  );
};

export default CartWidget;
