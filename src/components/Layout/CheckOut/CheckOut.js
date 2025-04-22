import styles from "./CheckOut.module.css";
import CheckOutPortal from "../../UI/CheckOutPortal";
import CartContext from "../../../store/cart-context";
// import { useState, } from "react";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import Login from "../Login/Login";
import Congratulation from "../Congratulation/Congratulation";
const CheckOut = (props) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	const ctx = useContext(CartContext);
	const [isLoggedIn, setisLoggedIn] = useState(false);
	const [orderPlaced, setorderPlaced] = useState(false);
	useEffect(() => {
		const cartItems = JSON.parse(window.localStorage.getItem("cart"));
		if (cartItems) {
			setCart(cartItems);
			setTotal(cartItems.reduce((acc, item) => acc + item.price, 0));
		}
	}, []);

	const onCheckOutHandler = () => {
		ctx.clearCart();
		setorderPlaced(true);
	};
	const continueShoppingHandler = () => {
		props.onCloseCheckOut();
		setorderPlaced(false);
	};

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
				<div className={styles.cartItemImg}>
					<img src={item.image} alt={item.name} />
				</div>
				<div className={styles.cartItem__text}>
					<p>{item.title.substr(0, 30) + "..."}</p>
					<div className={styles.cartItem__text__price}>
						<p className={styles.price}>${item.price}</p>
					</div>
				</div>
			</motion.div>
			// </AnimatePresence>
		);
	});
	const onLoginHandler = () => {
		setisLoggedIn(true);
	};
	return (
		<CheckOutPortal className={styles.checkout} onCloseCheckOut={props.onCloseCheckOut}>
			<motion.div className={styles.checkout__container}>
				{!orderPlaced ? (
					<>
						{isLoggedIn ? (
							<motion.div
							initial={{  x: 1000 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{  x: -1000 }}
							transition={{ duration: 0.7 }}
							className={styles.checkout__box}>
								<div className={styles.checkout__header__title}>
									<h2>Checkout</h2>
								</div>
								<div className={styles.cart__items}>{cartItems}</div>
								<div className={styles.cart__total}>
									<p>Total: ${total.toFixed(2)}</p>
									<button onClick={onCheckOutHandler}>Confirm CheckOut</button>
								</div>
							</motion.div>
						) : (
							<Login onLoginHandler={onLoginHandler} />
						)}
					</>
				) : (
					<Congratulation continueShoppingHandler={continueShoppingHandler} />
				)}
			</motion.div>
		</CheckOutPortal>
	);
};

export default CheckOut;
