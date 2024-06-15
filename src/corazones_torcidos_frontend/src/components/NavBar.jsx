import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/navbar.css';
import { useAuth } from "../services/use-auth-client";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (isAuthenticated) {
            logout();
            navigate("/login");
        } else {
            navigate("/inicio");
        }
    };

    return (
        <nav>
            <ul>
                <li><Link to="">Reservas</Link></li>
                <li><Link to="">Quienes Somos</Link></li>
                <li><Link to="">Actos o Rutas</Link></li>
                <li><Link to="">Filosofia</Link></li>
                <li><button onClick={handleButtonClick}>{isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;