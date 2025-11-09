import { Link, useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();
  return (
    <div className="col">
      <div className="card text-center h-100 d-flex flex-column justify-content-center align-items-center">
        <img src={item.thumbnail} className="card-img-top" alt="Producto"></img>
        <div className="card-body">
          <h5 className="card-title fs-5">{item.title}</h5>
          <p className="fw-bold fs-6">${item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
