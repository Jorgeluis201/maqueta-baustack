import React from 'react'
import Logo_BausTack from '../../data/Logo_BausTack.jpg';

// Estilos
import '../../style/nav_bar.css';

export const NavBar = () => {
    return (
        <>
        <header className="nav_bar__header">
            <div className="nav_bar__encabezado row"> 
                <div className="col-md-4">
                    <img className="nav_bar__logo_baustack" src={Logo_BausTack} alt='Logo BausTack'/>
                </div>
                
                <div className="nav_bar__botones col-md-4">
                    <button 
                        className="nav_bar__btn_invisible"
                    > 
                        Comunícate con ventas
                    </button>
                
                    <button 
                        className="nav_bar__btn_invisible"
                    > 
                        Iniciar sesión
                    </button>
                
                    <button 
                        className="nav_bar__btn_visible"
                    > 
                        Empezar ahora
                    </button>
                </div>
                
          </div>
        </header>
          
        </>
    )
}
