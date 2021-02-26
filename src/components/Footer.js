import React from 'react'

import '../style/footer.css'
import Logo_BausTack from '../data/Logo_BausTack.jpg';
export const Footer = () => {
    return (
        <>
          <div className="footer">
            <div className="row">
              <div className="col-md-4 contacto">
              <img className="nav_bar__logo_baustack img-logo" src={Logo_BausTack} alt='Logo BausTack'/>
                <p className="footer-parrafos">
                  Crea tus propias aplicaciones
                  en la nube de forma autónoma,
                  sin la necesidad de conocimientos tecnicos.
                </p>
                <p>
                  <ol className="footer-listas">
                    <li><i class="fas fa-phone"> (+569) 9451 5329</i></li>
                    <li><i class="fas fa-phone"> (+569) 8804 0923</i></li>
                    <li><i class="fas fa-envelope"> info@baustack.com</i></li>
                  </ol>  
                </p>
              </div>
              <div className="col-md-4">
                <p className="footer__titulos">
                  Links importantes
                </p>
                <ol className="footer-listas footer-parrafos">
                    <li>Templates</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Terminos de uso</li>
                    <li>Politica de privacidad</li>
                  </ol>
              </div>
              <div className="col-md-4">
                <div>
                  <p className="footer__titulos">
                    Síguenos en:
                  </p>
                </div>
                <div>
                  <i class="fab fa-facebook fa-4x text-warning"></i>
                  <i class="fab fa-instagram-square fa-4x text-info"></i>
                  <i class="fab fa-linkedin fa-4x "></i>
                </div>

              </div>  
            </div>

            <div className="pie-footer">
               <div className="container">
                 <div className="row">
                    <div className="col-md-12">
                      <p className="titulo-footer">
                          2021 Todos los derechos reservados baustack.com
                      </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </>
    )
}
