import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const addToCart = (producto, cantidad) => {

        setCarrito([...carrito, { ...producto, cantidad }]);
    };

    return (
        <CartContext.Provider value={{ carrito, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}