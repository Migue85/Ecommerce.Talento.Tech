import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import { Inicio } from './Inicio.jsx';
import { DetalleProducto } from './DetalleProducto.jsx'; // 1. IMPORTAMOS LA NUEVA PÁGINA ACÁ
import { Productos } from './Productos.jsx';
import { Carrito } from './Carrito.jsx';
import { NewProductContainer } from './NewProductContainer.jsx';
import './App.css';
import { CartProvider } from './CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>

          <hr style={{ margin: '40px 0', borderColor: '#ccc' }} />
          <NewProductContainer />


        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;