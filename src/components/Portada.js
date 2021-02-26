import React from 'react'

// Estilos
import logo_portada from '../data/logo_portada.jpg';
import '../style/portada.css'
import '../style/nav_bar.css';

import '../style/footer.css'
export const Portada = () => {
    return (
        <>
          <div clasName="portada__container">
                <div className='portada__informacion row'>
                    <div className="portada__contenedor_info col-md-4">
                        <h1 className="portada__titulo_portada" >Una sola fuente de información</h1>
                        <p>Aprovecha las ventajas de trabajar en una base de datos, con la simpleza de una planilla de Excell</p>
                        
                        <button 
                            className="nav_bar__btn_visible btn-portada"
                        > 
                        Empezar ahora
                        </button>
                    </div>
                    <div className="col-md-4">
                        <img className='portada__logo_portada' src={logo_portada} alt='Familia'/>
                    </div>
                    
                </div>
                <div className="portada__capsula_video row">
                    <div className="col-md-12">
                    <h1 className="portada__info2">Crear tu propia aplicación nunca fue tan fácil, no necesitas conocimientos técnicos!</h1>

                    <iframe 
                        className="portada__video"
                        width="420" 
                        title="video"
                        height="315"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>

                    </div>
                </div>
                <div className="row">
                    <div className='portada__formulario_contactos col-md-12'>
                        <h1 className="portada__info2">Contactos</h1>
                        <form>
                            
                            <input
                                className="input-contactos"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                            />

                            <input
                                className="input-contactos"
                                type="text"
                                placeholder="Telefono"
                                name="telefono"
                            />

                            <input
                                className="input-contactos"
                                type="text"
                                placeholder="Email"
                                name="email"
                            />

                            <textarea
                                className="input-contactos"
                                type="text"
                                placeholder="Mensaje"
                                name="mensaje"
                            />

                            <button
                                className="nav_bar__btn_visible btn-formulario"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
                <hr></hr>
          </div>
        </>
    )
}
