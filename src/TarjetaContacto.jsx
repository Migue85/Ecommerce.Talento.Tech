export function TarjetaContacto({ foto, nombre, puesto, email }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '10px', textAlign: 'center', width: '200px' }}>
            <img src={foto} alt={nombre} width="100" style={{ borderRadius: '50%' }} />
            <h3>{nombre}</h3>
            <h4 style={{ color: '#666' }}>{puesto}</h4>
            <p style={{ fontSize: '14px' }}>{email}</p>
        </div>
    );
}