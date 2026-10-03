import { useState } from 'react';
import { Link } from 'react-router-dom';

export function TarjetaProducto({ id, imagen, nombre, precio }) {
    const [esFavorito, setEsFavorito] = useState(false);

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    return (
        <div className="tu-clase-css">
            <img src={imagen} alt={nombre} width="200" />
            <h3>{nombre}</h3>
            <p>Precio: {precio}</p>
            
            <div>
                <button onClick={marcarComoFavorito}>
                    {esFavorito ? '⭐' : '☆'}
                </button>
                
                <Link to={`/producto/${id}`}>
                    <button style={{ marginLeft: '10px' }}>Ver detalle</button>
                </Link>
            </div>
        </div>
    );
}