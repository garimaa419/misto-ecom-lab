import styles from "./HeroCard.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HeroCard = (props) => {
	return (
		<motion.div
			layout
			animate={{
                opacity: 1
            }}
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
			
			className={`${styles[`hero-card`]} ${styles[`${props.class}`]}`}
		>
			<div className={styles[`hero-card__image`]}>
				<img src={props.image} alt="" />
			</div>
			<div className={styles.button}>
				<Link to={props.link}>{props.text}</Link>
			</div>
		</motion.div>
	);
};

export default HeroCard;
