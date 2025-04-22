import styles from "./NavPortal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";
const Backdrop = (props) => {
 
	return <div className={styles.backdrop} onClick={()=>props.onCloseMobileNav()}></div>;
};
const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};


const NavPortal = (props) => {
    
	return (
		<Fragment>
			{createPortal(<Backdrop onCloseMobileNav={props.onCloseMobileNav} />, document.getElementById("portals"))}
			{createPortal(
				<ModalOverlay> {props.children} </ModalOverlay>,
				document.getElementById("portals")
			)}
		</Fragment>
	);
};

export default NavPortal;
