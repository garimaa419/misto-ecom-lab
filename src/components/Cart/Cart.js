import { useEffect, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartPortal from "../UI/CartPortal";
import styles from "./Cart.module.css";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Cart = ({ onCloseCart,showCheckOutHandler }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	
	const ctx = useContext(CartContext);
	useEffect(() => {
		const cartItems = JSON.parse(window.localStorage.getItem("cart"));
		if (cartItems) {
			setCart(cartItems);
			setTotal(cartItems.reduce((acc, item) => acc + item.price, 0));
		}
	}, [ctx.items]);

	const cartItems = cart.map((item) => {
		return (
			// <AnimatePresence>
			<motion.div
				layout={{
					type: "spring",
					duration: 0.5,
					stiffness: 300,
					damping: 30,
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				exit={{ opacity: 0, x: 1000 }}
				className={styles.cartItem}
				key={item.id}
			>
				<div className={styles.cartItem__img}>
					{" "}
					<img src={item.image} alt="" />{" "}
				</div>
				<div className={styles.cartItem__text}>
					<p>{item.title.substr(0, 30) + "..."}</p>
					<div className={styles.cartItem__text__price}>
						<p className={styles.price}>${item.price}</p>
						<p
							className={styles.cancel}
							onClick={() => ctx.removeItem(item.id)}
						>
							Cancel{item.quantity}
						</p>
					</div>
				</div>
			</motion.div>
			// </AnimatePresence>
		);
	});
	const onCloseHandler = () => {
		onCloseCart();
	};
	const clearAllHandler = () => {
		ctx.clearCart();
	};
	const showCheckOutHandlerCart = () => {
		onCloseCart();
		showCheckOutHandler();
	};
	
	return (
		<CartPortal className={styles.cart} toggleCart={onCloseCart}>
			
			<div className={styles.closeButton} onClick={onCloseHandler}>
				<IoMdCloseCircle />
			</div>
			<h2>Your Cart</h2>
			<AnimatePresence>
				<motion.div
					key={styles.cart__items}
					layout
					className={styles.cart__items}
				>
					{cartItems}

					{cart.length > 1 ? (
						<span className={styles.clearAll} onClick={clearAllHandler}>
							Clear All
						</span>
					) : (
						""
					)}
				</motion.div>
			</AnimatePresence>
			<div className={styles.cart__total}>
				<p>Total: ${total.toFixed(2)}</p>
				<button onClick={showCheckOutHandlerCart}>CheckOut</button>
			</div>
		</CartPortal>
	);
};
export default Cart;
