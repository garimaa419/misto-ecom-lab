import { createContext } from "react";

const CartContext= createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearItems: () => {},
})

export default CartContext;