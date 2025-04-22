import styles from "./Footer.module.css";
import { BsTelephone, BsEnvelope, BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Footer = () => {
	return (
		<footer className={styles.footer}><div className={styles.footer_container}>
			
				<div className={styles.categories}>
					<h3>Categories</h3>
					<a href="/men" className={styles.item}>
						Men
					</a>
					<a href="/women" className={styles.item}>
						Women
					</a>
					<a href="/accessories" className={styles.item}>
						Accessories
					</a>
					<a href="/shop" className={styles.item}>
						Shop
					</a>
				</div>
				<div className={styles.information}>
					<h3>Information</h3>
					<a href="/about" className={styles.item}>
						About Us
					</a>
					<a href="/contact" className={styles.item}>
						Contact Us
					</a>
					<a href="/blog" className={styles.item}>
						Blog
					</a>
					<a href="/faq" className={styles.item}>
						FAQs
					</a>
				</div>
				<div className={styles.usefulLinks}>
					<h3>Useful Links</h3>
					<a href="/" className={styles.item}>
						Terms & Conditions
					</a>
					<a href="/" className={styles.item}>
						Return & Exchanges
					</a>
					<a href="/" className={styles.item}>
						Shipping & Delivery
					</a>
					<a href="/" className={styles.item}>
						Privacy Policy
					</a>
				</div>
				<div className={styles.socials}>
					<h3>Contact Us</h3>
					<a href="/" className={styles.item}>
						<GoLocation />
						<span>Kathmandu, Nepal</span>
					</a>
					<a href="tel:+9779800000000" className={styles.item}>
						<BsTelephone />
						<span>+977 980000000</span>
					</a>
					<a href="/" className={styles.item}>
						<AiOutlineClockCircle />
						<span>All Week 24/7</span>
					</a>
					<a href="mailto:info@misto.com" className={styles.item}>
						<BsEnvelope />
						<span>info@misto.com</span>
					</a>
				</div>
		</div>

			<div className={styles.copyright}>
				<p> © 2022 Misto. All Rights Reserved.</p>
				<p>
					Made by <a href="https://blackkspydo.com">Blackkspydo</a> with{" "}
					<BsFillSuitHeartFill />{" "}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
