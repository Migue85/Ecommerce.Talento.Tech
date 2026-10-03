import { useContext } from 'react';
import { CartContext } from './CartContext.jsx';
import { Link } from 'react-router-dom';

export function Carrito() {
    const { carrito } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Tu carrito está vacío 😔</h2>
                <Link to="/productos" style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                    Ir a ver figuras
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>🛒 Tu Carrito de Compras</h2>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {carrito.map((producto, index) => (
                    <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '15px 0', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <strong>{producto.nombre}</strong> <br/>
                            Cantidad: {producto.cantidad}
                        </div>
                        <div style={{ fontWeight: 'bold' }}>
                            ${producto.precio}
                        </div>
                    </li>
                ))}
            </ul>

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
}