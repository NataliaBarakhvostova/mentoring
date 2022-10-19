import React, {createContext, useState} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);

    const addToCart = (title, price) => {
        setProducts((prevState) => [...prevState, { title, price }])
    }

    return(
        <CartContext.Provider value={{products, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;