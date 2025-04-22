import Accessories from "../../components/Layout/ProductSection/Accessories";
import { motion } from "framer-motion";
import styles from "./AccessoriesPage.module.css";
import { Link } from "react-router-dom";
const AccessoriesPage = (props) => {
	return (
		<motion.div
			key="accessories_container"
			animate={{
				opacity: 1,
			}}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			// exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 0.8 }}
			className={`${styles.accessories__container} accessories_container`}
		>
			<div className={styles.headerContainer}>
					<div className={styles.nav}>
						<Link to="/">Home</Link>
						{" > "}
						<Link to="/accessories">Accessories</Link>
					</div>
					<div className={styles.header__title}>
						<h1>Accessories</h1>
					</div>
				</div>
			<Accessories />
		</motion.div>
	);
};

export default AccessoriesPage;
