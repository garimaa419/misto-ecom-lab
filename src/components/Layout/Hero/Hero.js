import styles from "./Hero.module.css";
import HeroCard from "../../UI/HeroCard";
import male from "../../../assets/Hero/malemodel.jpeg";
import female from "../../../assets/Hero/denim.jpeg";
import accesories from "../../../assets/Hero/accesories.jpg";
import female2 from "../../../assets/Hero/women.jpeg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import {motion} from 'framer-motion'
const Hero = (props) => {
	return (
		<div className={styles.heroContainer}>
			<motion.div
			 layout
			className={styles.hero}>
				<HeroCard
					class={"main"}
					image={female2}
					text={"Visit Shop"}
					link={"/shop"}
				/>
				<HeroCard class={"male"} image={male} text={"Men"} link={"/men"} />
				<HeroCard
					class={"female"}
					image={female}
					text={"Women"}
					link={"/women"}
				/>
				<HeroCard
					class={"accesories"}
					image={accesories}
					text={"Accessories"}
					link={"/accessories"}
				/>
			</motion.div>
			<div className={styles.subSection}>
				<div className={styles.subSection__item}>
					<div className={styles.subSection__item__icon}>
						<MdOutlineLocalShipping />
					</div>
					<div className={styles.subSection__item__text}>
						<h3>Free Shipping</h3>
						<p>Free shipping on all orders over $100</p>
					</div>
				</div>
				<div className={styles.subSection__item}>
					<div className={styles.subSection__item__icon}>
						<BsArrowRepeat />
					</div>
					<div className={styles.subSection__item__text}>
						<h3>30 Days return</h3>
						<p>Simply return it within 30 days for an exchange</p>
					</div>
				</div>
				<div className={styles.subSection__item}>
					<div className={styles.subSection__item__icon}>
						<MdSupportAgent />
					</div>
					<div className={styles.subSection__item__text}>
						<h3>Support 24/7</h3>
						<p>Contact us 24 hours a day, 7 days a week</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
