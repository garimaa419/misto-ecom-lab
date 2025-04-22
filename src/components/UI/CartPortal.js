import styles from "./CartPortal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";
const Backdrop = (props) => {
    const onCloseCart=()=>{
        props.toggleCart();
    }
	return <div className={styles.backdrop} onClick={onCloseCart}></div>;
};
const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};


const CartPortal = (props) => {
    
	return (
		<Fragment>
			{createPortal(<Backdrop toggleCart={props.toggleCart} />, document.getElementById("portals"))}
			{createPortal(
				<ModalOverlay> {props.children} </ModalOverlay>,
				document.getElementById("portals")
			)}
		</Fragment>
	);
};

export default CartPortal;
