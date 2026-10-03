import { Directorio } from './Directorio.jsx';

export function Footer() {
    return (
        <footer style={{ backgroundColor: '#222', color: 'white', padding: '40px 20px', marginTop: '50px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h3>E-Commerce Hot Toys</h3>
                <p>Dirección: Av. San Juan 2500, San Cristóbal, Buenos Aires</p>
                <p>Teléfono: 0800-HOT-TOYS | Email: contacto@hottoys.com.ar</p>
                <p>&copy; 2026 Todos los derechos reservados.</p>
            </div>
            
            <hr style={{ borderColor: '#444', marginBottom: '30px' }} />
            

            <div style={{ textAlign: 'center' }}>
                <h4>Conocé a Nuestro Equipo</h4>
                <Directorio />
            </div>
            
        </footer>
    );
}   