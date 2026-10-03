import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget.jsx'; // 1. Importamos el widget

export function NavBar() {
    return (
        <nav style={{ display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#333', color: 'white' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
            <Link to="/productos" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link>
            <Link to="/carrito" style={{ color: 'white', textDecoration: 'none' }}>
                Carrito 🛒 
                <CartWidget /> {/* 2. Colocamos el widget acá */}
            </Link>
        </nav>
    );
}