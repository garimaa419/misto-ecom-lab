import styles from "./CartCounter.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const CartCounter= (props)=>{
    const ctx = useContext(CartContext);
    const cart =JSON.parse(window.localStorage.getItem("cart"))
    return <span className={styles.cartCounter}>{cart?cart.length:ctx.items.length}</span>
}

export default CartCounter;