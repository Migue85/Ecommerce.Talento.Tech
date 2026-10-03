export function ProductForm({ alEnviar, loading }) {
    
    const manejarSubmit = (evento) => {
        evento.preventDefault();
        alEnviar({ nombre: "Nuevo muñeco Hot Toy" }); 
    };

    return (
        <form onSubmit={manejarSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
            <input type="text" placeholder="Nombre del producto" required />
            <input type="number" placeholder="Precio" required />
            <input type="file" />

            <button 
                type="submit" 
                disabled={loading} 
                style={{ 
                    padding: '10px', 
                    backgroundColor: loading ? '#ccc' : '#007BFF',
                    color: 'white',
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? 'Subiendo imagen...' : 'Guardar Producto'}
            </button>
        </form>
    );
}