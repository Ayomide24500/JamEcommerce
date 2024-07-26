import { createContext, useState, useContext } from "react";

const CartContext: any = createContext([]);

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems]: any = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
