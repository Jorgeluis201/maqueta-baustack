import React from 'react';

import { Footer } from './Footer';
import { Portada } from './Portada';

// Estilos
import '../style/index.css';
import { NavBar } from './Navbar/NavBar';

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
