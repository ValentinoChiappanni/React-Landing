import React from 'react';
import '../estilos.css';
import Header from './Header';
import Footer from './Footer';
const Formulario = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="container mt-5">
          <h1 className="text-center">Registro</h1>
          <form
            action="mailto:jesusnicolas.rios@unahur.edu.ar,gabriel.molina@unahur.edu.ar"
            method="post"
            encType="text/plain"
          >
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Apellido:</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Ingrese su apellido"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Ingrese su mensaje"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
            <button type="reset" className="btn btn-danger">
              Borrar
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Formulario;
