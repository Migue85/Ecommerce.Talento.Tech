import { TarjetaProducto } from './TarjetaProducto';

export function Inicio() {
    return (
        <section>
            <h2 style={{ textAlign: 'center' }}>Productos Destacados</h2>
            
            <div className="catalogo">
                <TarjetaProducto 
                    id="1"
                    imagen="https://images.bigbadtoystore.com/images/product/124418/d83017fe-2d0d-4114-ad96-379daba6855a/original.jpg"
                    nombre="Miles Morales MMS710 1/6 Scale" 
                    precio="$752.876,25" 
                />
                <TarjetaProducto 
                    id="2"
                    imagen="https://mayatoys.in/wp-content/uploads/2023/10/hot-toys-doctor-strange-no-way-home-7.jpg"
                    nombre="Dr Strange 1/6 Scale" 
                    precio="$913.500,00" 
                />
                <TarjetaProducto 
                    id="3"
                    imagen="https://mmsanime.com/wp-content/uploads/2022/03/batman-deluxe-version_dc-comics_gallery_62225197a28a5.jpg"
                    nombre="The Batman – Batman Deluxe 1/6 Scale" 
                    precio="$1.096.200,00" 
                />
            </div>
        </section>
    );
}