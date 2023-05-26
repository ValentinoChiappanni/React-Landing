import React from "react";
import '../estilos.css'
import logoN from '../asset/logoN.png';
import luna from '../asset/luna.png';
import fc from '../asset/fc.png';
import tw from '../asset/tw.png';
import ig from '../asset/ig.png';


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">
            <img src={logoN} id="logo" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn" id="darkModeButton">
                  <img src={luna} className="imagenNav" id="dark" alt="Dark Mode" />
                </button>
              </li>
              <li className="nav-item">
                <a href="./register.html" className="btn btn-danger" id="registerButton">
                  Registrarse
                </a>
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
                    <a className="dropdown-item" href="https://es-la.facebook.com/">
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
                    <a className="dropdown-item" href="https://www.instagram.com/">
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
}

export default Header;
