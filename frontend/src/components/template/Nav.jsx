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
        </nav>
    </aside>