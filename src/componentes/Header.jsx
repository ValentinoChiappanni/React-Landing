import React from 'react';
import '../estilos.css';
import logoN from '../asset/logoN.png';
import fc from '../asset/fc.png';
import tw from '../asset/tw.png';
import { NavLink } from 'react-router-dom';
import ig from '../asset/ig.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <NavLink to="/React-Landing" className="navbar-brand">
            <img src={logoN} id="logo" alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/React-Landing/Formulario"
                  className="btn btn-danger"
                  id="registerButton"
                >
                  Registrarse
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle btn btn-primary text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Redes Sociales
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://es-la.facebook.com/"
                    >
                      <i className="text-dark">
                        <img src={fc} className="img" alt="Facebook" />
                        Facebook
                      </i>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://twitter.com/">
                      <i className="text-dark">
                        <img src={tw} className="img" alt="Twitter" />
                        Twitter
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.instagram.com/"
                    >
                      <i className="text-dark">
                        <img src={ig} className="img" alt="Instagram" />
                        Instagram
                      </i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
