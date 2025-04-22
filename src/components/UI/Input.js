import styles from "./Input.module.css";
import { forwardRef } from "react";
const Input = forwardRef((props,ref) => {
	
	return (
		<div className={styles.input}>
			<input ref={ref}  {...props.input} />
		</div>
	);
});
export default Input;