import CartWidget from "./CartWidget";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
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
          <CartWidget cartCount={cartCount} />
        </div>

        {/* <!-- Contenido colapsable --> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav text-start text-sm-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Alimentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Snacks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Juguetes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Farmacia
              </a>
            </li>

            {/* <!-- Carrito vista desktop --> */}
            <li className="nav-item ms-3 d-none d-sm-block">
              <CartWidget cartCount={cartCount} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
