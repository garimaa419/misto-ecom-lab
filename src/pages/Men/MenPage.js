import Men from "../../components/Layout/ProductSection/Men";
import styles from "./MenPage.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MenPage = (props) => {
	return (
		<motion.div
        key="men_container"
        animate={{
            opacity:1
        }}
        initial={{ opacity:0 }}
        exit={{  opacity:0 }}
        // exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.8 }}
			className={`${styles.Men_container} men_container`}
		>
            <div className={styles.headerContainer}>
					<div className={styles.nav}>
						<Link to="/">Home</Link>
						{" > "}
						<Link to="/men">Men</Link>
					</div>
					<div className={styles.header__title}>
						<h1>Men's Clothing</h1>
					</div>
				</div>
			<Men />
		</motion.div>
	);
};

export default MenPage;
