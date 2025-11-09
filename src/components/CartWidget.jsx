import { Link } from "react-router";

const CartWidget = ({ cartCount }) => {
  return (
    <Link to="/" className="btn btn-outline-light position-relative">
      <i className="bi bi-cart"></i>
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
        {cartCount}
      </span>
    </Link>
  );
};

export default CartWidget;
