import { useState, useEffect } from 'react';
import { TarjetaProducto } from './TarjetaProducto.jsx';

export function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/productos.json') 
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProducts(datos);
            })
            .catch((error) => console.error("Error cargando figuras:", error));
    }, []); 

    return (
        <section>
            <div className="catalogo" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                {products.map((producto) => (
                    <TarjetaProducto 
                        key={producto.id}
                        id={producto.id}
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        precio={producto.precio}
                    />
                ))}
            </div>
        </section>
    );
}