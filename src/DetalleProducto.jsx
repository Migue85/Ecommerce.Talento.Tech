import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext.jsx';

export function DetalleProducto() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch('/productos.json')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                const productoEncontrado = datos.find((item) => item.id.toString() === id);
                setProducto(productoEncontrado);
            })
            .catch((error) => console.error("Error buscando el detalle:", error));
    }, [id]);

    const manejarAgregarAlCarrito = () => {
        if (producto) {
            addToCart(producto, 1);
        }
    };

    if (!producto) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>Cargando información de la figura...</div>;
    }

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Detalle de la Figura</h2>
            
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', borderRadius: '10px' }} />
            
            <h3>{producto.nombre}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
                {producto.precio}
            </p>
            
            <button 
                onClick={manejarAgregarAlCarrito}
                style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', marginTop: '20px', fontSize: '16px' }}
            >
                Agregar al carrito 🛒
            </button>
        </div>
    );
}