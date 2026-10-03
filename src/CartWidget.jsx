import { useContext } from 'react';
import { CartContext } from './CartContext.jsx';

export function CartWidget() {
    const { carrito } = useContext(CartContext);
    
    const totalProductos = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);

    return (
        <span style={{ 
            backgroundColor: 'red', 
            color: 'white', 
            borderRadius: '50%', 
            padding: '2px 8px', 
            marginLeft: '5px',
            fontSize: '14px'
        }}>
            {totalProductos}
        </span>
    );
}