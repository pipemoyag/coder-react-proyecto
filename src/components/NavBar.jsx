import CartWidget from "./CartWidget";
import { Link } from "react-router";
import "./style/NavBar.css";

const NavBar = ({ categories }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top px-2">
      <div className="container-fluid">
        {/* <!-- Logo --> */}
        <a className="navbar-brand" href="#">
          Cat Republic Petshop
        </a>

        {/* <!-- Mobile: hamburguesa + carrito --> */}
        <div className="d-flex d-sm-none ms-auto align-items-center">
          {/* <!-- Botón hamburguesa --> */}
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Carrito vista mobile --> */}
          <CartWidget cartCount={1} />
        </div>

        {/* <!-- Contenido colapsable --> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav text-start text-sm-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu mega-menu">
                {categories.map((category, index) => (
                  <li key={index} className="list-unstyled">
                    <Link
                      className="dropdown-item"
                      to={`/category/${category}`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* <!-- Carrito vista desktop --> */}
            <li className="nav-item ms-3 d-none d-sm-block">
              <CartWidget cartCount={1} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
