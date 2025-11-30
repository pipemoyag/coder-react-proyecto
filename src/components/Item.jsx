import { Link } from "react-router";
import { useCart } from "../context/useCart";
import { addToCartWithToast } from "../utils/addToCartWithToast";
import "./style/Item.css";

function Item({ item }) {
  const { addToCart, getItemQuantity } = useCart();
  const quantityInCart = getItemQuantity(item.id) || 0;
  const maxAvailable = item.stock - quantityInCart;

  const handleAddOne = () => {
    addToCartWithToast({
      item,
      addToCart,
      quantity: 1,
      quantityInCart,
    });
  };

  return (
    <div className="col">
      <div className="card text-center h-100 d-flex flex-column justify-content-center align-items-center">
        {quantityInCart > 0 && (
          <span className="item-badge">{quantityInCart}</span>
        )}

        {/* Imagen clickable */}
        <Link to={`/product/${item.id}`} className="w-100">
          <div className="image-container d-flex justify-content-center align-items-center">
            <img
              src={item.thumbnail}
              className="img-fluid object-fit-contain"
              alt={item.title}
              style={{ cursor: "pointer", maxHeight: "200px" }}
            />
          </div>
        </Link>

        <div className="card-body">
          {/* Título clickable */}
          <Link
            to={`/product/${item.id}`}
            className="text-dark hover-underline"
          >
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              <small>{item.title}</small>
            </h5>
          </Link>

          <p className="fs-6">${item.price.toLocaleString("es-CL")}</p>

          {/* Botón agregar */}
          <button
            className="btn btn-primary"
            onClick={handleAddOne}
            disabled={maxAvailable <= 0}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
