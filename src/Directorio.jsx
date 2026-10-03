import { useState, useEffect } from 'react';
import { TarjetaContacto } from './TarjetaContacto.jsx';

export function Directorio() {
    const [nosotros, setNosotros] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/nosotros.json')
            .then((respuesta) => {
                if (!respuesta.ok) throw new Error('Falló la carga de datos');
                return respuesta.json();
            })
            .then((datos) => {
                setNosotros(datos);
                setCargando(false);
            })
            .catch((err) => {
                setError(err.message);
                setCargando(false);
            });
    }, []);


    if (cargando) {
        return <h2 style={{ textAlign: 'center' }}>Cargando equipo...</h2>;
    }

    if (error) {
        return <h2 style={{ textAlign: 'center', color: 'red' }}>Error: {error}</h2>;
    }

    return (
        <section style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Nuestro Equipo</h2>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {nosotros.map((persona) => (
                    <TarjetaContacto 
                        key={persona.id}
                        foto={persona.foto}
                        nombre={persona.nombre}
                        puesto={persona.puesto}
                        email={persona.email}
                    />
                ))}
            </div>
        </section>
    );
}