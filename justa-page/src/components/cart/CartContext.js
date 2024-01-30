import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    

    const addToCart = (product, change = 1) => {
        setCart(currentCart => {
            const existingProductIndex = currentCart.findIndex( item => item.id === product.id)
        
            if(existingProductIndex >= 0) {
                let updateCart = [...currentCart];
                updateCart[existingProductIndex] = {
                    ...updateCart[existingProductIndex],
                    quantity: updateCart[existingProductIndex].quantity + change
                };
                if(updateCart[existingProductIndex].quantity <=0) {
                    updateCart = updateCart.filter(item => item.id !== product.id)
                }
                localStorage.setItem('cart', JSON.stringify(updateCart));
                return updateCart;
            }else{
                return [...currentCart, { ...product, quantity: 1}];
            }
        }
        
        
         );
    };

    const removeFromCart = product => {
        setCart(currentCart => {
            const updateCart = currentCart.filter(item => item.id !== product.id)
            localStorage.setItem('cart', JSON.stringify(updateCart));
            return updateCart;
        })
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
