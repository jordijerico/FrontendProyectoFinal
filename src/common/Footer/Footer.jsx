import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Sobre Nosotros</h4>
                        <ul>
                            <li><a href="#">Información</a></li>
                            <li><a href="#">Nuestros servicios</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ayuda</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Envíos</a></li>
                            <li><a href="#">Devoluciones</a></li>
                            <li><a href="#">Opciones de pago</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Síguenos para más</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/ibebeoficial/"><i className="fab fa-instagram"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
