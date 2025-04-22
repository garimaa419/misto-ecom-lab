import styles from "./SaleCard.module.css";
const SaleCard = (props) => {
	return (
		<div className={styles.saleCard}>
			<div className={styles.saleCard__img}>
				<img src={props.img} alt="" />
			</div>
			<div className={styles.saleCard__info}>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
};
export default SaleCard;