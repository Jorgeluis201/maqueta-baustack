import React from 'react';

// Estilos
import './style/index.css'

//Components
import { Footer } from './components/Footer';
import { NavBar } from './components/Navbar/NavBar';
import { Portada } from './components/Portada';

export const AppBausTack = () => {
    return (
        <>      
            <div className="container-principal"> 
                <NavBar/>
                <Portada/>
                <Footer/>
            </div>
        </>
    )
}
