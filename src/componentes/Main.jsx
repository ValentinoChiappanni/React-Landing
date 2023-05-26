import React from "react";
import '../estilos.css'
import imagen1 from '../asset/imagen1.jpg'
const MainIndex = () => {
    return (
        <div className="container-lg">
            <section>
                <h1 className="text-center">El metaverso empresarial está aquí</h1>
                <p>Virbela reúne a las personas para trabajar, aprender, reunirse y capacitarse en mundos virtuales inmersivos.
                </p>
            </section>
            <section className="row">
                <div className="col-md-6">
                    <img src={imagen1} className="imagen " />
                </div>
                <div className="col-md-6">
                    <h2>La forma en que trabajamos ha evolucionado</h2>
                    <p>Virbela ha sido pionera en el primer metaverso empresarial, creado específicamente para resolver los desafíos
                        de la colaboración remota. Trabaje, asista a reuniones, organice eventos, brinde clases y conecte a toda su
                        fuerza de trabajo remota, todo en espacios virtuales que les permiten a las personas sentir que están
                        exactamente donde pertenecen.</p>
                </div>
            </section>
            <section className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Hay Espacio para Tu Organización en Virbela</h2>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="./asset/1.png" />
                        <div className="card-body">
                            <h4 className="card-title">Trabajo remoto</h4>
                            <p className="card-text">Todo lo que tu equipo necesita para colaborar desde cualquier lugar</p>
                            <a href="#" className="btn btn-primary align-items-lg-center d-flex justify-content-center">Mas informacion</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="./asset/2.png" />
                        <div className="card-body">
                            <h4 className="card-title">Aprendizaje remoto</h4>
                            <p className="card-text">Experiencias de aprendizaje y desarrollo de alto impacto</p>
                            <a href="#" className="btn btn-primary align-items-lg-center d-flex justify-content-center">Mas informacion</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src="./asset/3.png" />
                        <div className="card-body">
                            <h4 className="card-title">Eventos virtuales</h4>
                            <p className="card-text">Eventos inolvidables que realmente valen la pena.</p>
                            <a href="#" className="btn btn-primary align-items-lg-center d-flex justify-content-center">Mas informacion</a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-center">EL METAVERSO: UN VISTAZO AL FUTURO DEL TRABAJO</h2>
                <p>Unirse a un único en su clase panel de discusión interactivo con los fundadores de Virbela, Second Life, High
                    Fidelity y otros líderes de pensamiento en XR.</p>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="./asset/awe.png" className="marcas" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="./asset/high.png" className="marcas" />
                    </div>
                </div>
            </section>

            <section className="row text-center recuadro">
                <h2 className="col-md-12">DETALLES DEL EVENTO
                </h2>
                <div className="col-md-4">
                    <h5>13 de mayo, 12 p. m. PST</h5>
                </div>
                <div className="col-md-4">
                    <h5>Campus Abierto de Virbela</h5>
                </div>
                <div className="col-md-4">
                    <h5>Gratis</h5>
                </div>

            </section>


        </div>
    )
};

export default MainIndex;