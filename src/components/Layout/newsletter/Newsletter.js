import styles from "./Newsletter.module.css";
import newsletterBgimg from "../../../assets/newsletter.jpg";
const Newsletter = (props) => {
	return (
		<div className={styles.newsletter}>
			<div className={styles.newsletter__bg}>
				<img src={newsletterBgimg} alt="" />
			</div>
			<div className={styles.newsletter__form}>
				<h4>Special Offer</h4>
				<h2>
					Subscribe and <span>get 10% off</span>
				</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<input type="text" placeholder="Enter your email" />
					<button>Subscribe</button>
				</form>
			</div>
		</div>
	);
};
export default Newsletter;