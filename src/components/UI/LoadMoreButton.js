import styles from "./LoadMoreButton.module.css";
// import Loader from "./Loader";
import { useState } from "react";

const LoadMoreButton = ({ content, contentLen }) => {
	const [show, setShow] = useState(false);
	const toggleHandler = () => {
		setShow(!show);
	};
	return (
		<>
			{show && content}
			{!show && (
				<button className={styles.loadmore__btn} onClick={toggleHandler}>
					Load More
				</button>
			)}
		</>
	);
};

export default LoadMoreButton;
