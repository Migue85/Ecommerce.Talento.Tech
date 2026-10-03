import { ItemListContainer } from './ItemListContainer.jsx';

export function Productos() {
    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Catálogo Completo</h2>
            <ItemListContainer />
        </div>
    );
}