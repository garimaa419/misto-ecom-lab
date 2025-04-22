import Women from "../../components/Layout/ProductSection/Women";
import { motion, AnimatePresence } from "framer-motion";
import styles from './WomenPage.module.css'
import { Link } from "react-router-dom";
const WomenPage = (props) => {
	return (
        <AnimatePresence>
        <motion.div
            key="women_container"
			animate={{
                opacity:1
			}}
			initial={{ opacity:0 }}
			exit={{  opacity:0 }}
			// exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 0.8 }}
			className={`${styles.women__container} women_container`}
            >
				<div className={styles.headerContainer}>
					<div className={styles.nav}>
						<Link to="/">Home</Link>
						{" > "}
						<Link to="/women">Women</Link>
					</div>
					<div className={styles.header__title}>
						<h1>Women's Clothing</h1>
					</div>
				</div>
			<Women />
		</motion.div>
     </AnimatePresence>
	);
};

export default WomenPage;
