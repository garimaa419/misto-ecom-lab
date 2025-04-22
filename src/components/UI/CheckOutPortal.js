import styles from "./CheckOutPortal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
	const toggleCheckOutHandler = () => {
		props.onCloseCheckOut();
	};
	return <div className={styles.backdrop} onClick={toggleCheckOutHandler}></div>;
};
const ModalOverlay = (props) => {
	// add cool flip entry and exit animation with framer motion

	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const CheckOutPortal = (props) => {
	return (
		<Fragment>
			{createPortal(
				<Backdrop onCloseCheckOut={props.onCloseCheckOut} />,
				document.getElementById("portals")
			)}
			{createPortal(
				<ModalOverlay> {props.children} </ModalOverlay>,
				document.getElementById("portals")
			)}
		</Fragment>
	);
};

export default CheckOutPortal;
