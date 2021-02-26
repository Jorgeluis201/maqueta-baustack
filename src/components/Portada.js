import React from 'react'

// Estilos
import logo_portada from '../data/logo_portada.jpg';
import '../style/portada.css'
import '../style/nav_bar.css';

import '../style/footer.css'

import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';

export const Portada = () => {

    const [ formValuesNombre,handleInputChangeNombre ] = useForm({
        nombre:''
    });

    const {nombre} = formValuesNombre;

    const [ formValuesTelefono,handleInputChangeTelefono] =useForm({
        telefono:''
    })

    const {telefono}=formValuesTelefono;

    const [ formValuesEmail,handleInputChangeEmail] =useForm({
        email:''
    })

    const {email}=formValuesEmail;

    const [ formValuesMensaje,handleInputChangeMensaje] =useForm({
        mensaje:''
    })

    const {mensaje}=formValuesMensaje;

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        Swal.fire({
            title:'Enviado...',
            text:'Por Favor espere...',
            allowOutsideClick:false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        });

        setTimeout(() => {
                        
            Swal.close();

        }, 9000);
        Swal.fire('Enviado',"Datos enviados correctamente",'success');
    }


    return (
        <>
          <div clasName="portada__container">

                <div className='portada__informacion row'>
                    
                        <div className="portada__contenedor_info col-md-6">
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
                        <form onSubmit={ handleOnSubmit }>
                            <input
                                className="input-contactos"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                id="nombre"
                                autoComplete="nombre"
                                value={nombre}
                                onChange={handleInputChangeNombre}
                            />

                            <input
                                className="input-contactos"
                                type="text"
                                placeholder="Telefono"
                                name="telefono"
                                id="telefono"
                                autoComplete="telefono"
                                value={telefono}
                                onChange={handleInputChangeTelefono}
                            />

                            <input
                                className="input-contactos"
                                type="text"
                                placeholder="Email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleInputChangeEmail}
                            />

                            <textarea
                                className="input-contactos"
                                type="text"
                                placeholder="Mensaje"
                                name="mensaje"
                                id="mensaje"
                                autoComplete="mensaje"
                                value={mensaje}
                                onChange={handleInputChangeMensaje}
                            />

                            <button
                                type="submit"
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
