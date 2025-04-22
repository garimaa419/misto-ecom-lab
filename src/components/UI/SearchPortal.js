import styles from "./SearchPortal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";
const Backdrop = (props) => {
    const toggleSearchHandler=()=>{
        props.toggleSearch();
    }
	return <div className={styles.backdrop} onClick={toggleSearchHandler}></div>;
};
const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};


const SearchPortal = (props) => {
    
	return (
		<Fragment>
			{createPortal(<Backdrop toggleSearch={props.toggleSearch} />, document.getElementById("portals"))}
			{createPortal(
				<ModalOverlay> {props.children} </ModalOverlay>,
				document.getElementById("portals")
			)}
		</Fragment>
	);
};

export default SearchPortal;
