import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-warning">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><Link to="/">Inicio</Link></li>
                            <li className="list-inline-item">-</li>
                            <li className="list-inline-item"><Link to="/about">Sobre Nosotros</Link></li>
                            <li className="list-inline-item">-</li>
                            <li className="list-inline-item"><Link to="/vinos">Categorias</Link></li>
                            <li className="list-inline-item">-</li>
                            <li className="list-inline-item"><Link to="/carga">Carga de Producto</Link></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">
                            © Tomas Lopez Website 2022. Derechos Reservados.
                            <br />
                                tel: 2615669741
                            <br />
                                email: l.tomasadrian@gmail.com
                        </p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <Link to="https://www.facebook.com/"><i className="bi-facebook fs-3"></i></Link>
                            </li>
                            <li className="list-inline-item me-4">
                                <Link to="https://twitter.com/"><i className="bi-twitter fs-3"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="https://www.instagram.com/"><i className="bi-instagram fs-3"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;