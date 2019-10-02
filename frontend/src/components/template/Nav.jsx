import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar este menu */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/pacientes">
                <i className="fa fa-users"></i> Pacientes
            </Link>
            <Link to="/agenda">
                <i className="fa fa-calendar"></i> Agenda
            </Link>
            <Link to="/consulta">
                <i className="fa fa-address-book"></i> Consulta
            </Link>
            <Link to="/dieta">
                <i className="fa fa-leaf"></i> Dieta
            </Link>
        </nav>
    </aside>