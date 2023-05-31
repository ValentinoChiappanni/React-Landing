import React from 'react';
import '../estilos.css';
import tw from '../asset/tw.png';
import fc from '../asset/fc.png';
import ig from '../asset/ig.png';
import logo from '../asset/log.png';
const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-2 align-items-lg-center d-flex justify-content-center">
            <a href="/React-Landing">
              <img src={logo} />
            </a>
          </div>
          <div className="col-md-4">
            <h3>Ubicación</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.427239500491!2d-58.64022692437142!3d-34.61864217294899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUNaHur.%20Universidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses!2sar!4v1683837092017!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-md-3">
            <h3>Contacto</h3>
            <ul className="list-unstyled">
              <li>Dirección: Manuel Origone 151</li>
              <li>Teléfono: 11 21771265</li>
              <li>Email: metaverso@virbela.com</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Redes Sociales</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://es-la.facebook.com/">
                  <i className="text-white textDecoracion">
                    <img src={fc} className="img" />
                    Facebook
                  </i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="text-white text-decoration-none">
                    <img src={tw} className="img" />
                    Twitter
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="text-white">
                    <img src={ig} className="img" />
                    Instagram
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
