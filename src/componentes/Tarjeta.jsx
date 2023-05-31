import React from 'react';
import PropTypes from 'prop-types';

export function Tarjeta(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={props.imagen} />
        <div className="card-body">
          <h4 className="card-title">{props.titulo}</h4>
          <p className="card-text">{props.descripcion}</p>
          <a
            href="#"
            className="btn btn-primary align-items-lg-center d-flex justify-content-center"
          >
            Mas informacion
          </a>
        </div>
      </div>
    </div>
  );
}

Tarjeta.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};
