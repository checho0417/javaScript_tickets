import React from "react";
import { Link } from "react-router-dom";
import clienteEncotrado from '../paginas/auth/login'

const Menu = (clienteEncontrado) => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className="nav-item">
          <Link to={`/home/${clienteEncontrado.id}`} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Inicio
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/Tickets"}className="nav-link">
            <i className="nav-icon fas fa-envelope" />
            <p>
              Solicitudes
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/NewSolicitud "} className="nav-link">
            <i className="nav-icon fas fa-envelope" />
            <p>
              Queja O Solicitud
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/Perfil "} className="nav-link">
            <i className="nav-icon fas fa-envelope" />
            <p>
              Mi Perfil
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
