import styles from "./SimilarProducts.module.css";
import ProductLink from "./ProductLink";
import { Rating } from "react-simple-star-rating";
const SimilarProducts = (props) => {
	return (
		<div className={`${styles.productCard} ${styles[`${props.class}`]}`}>
			<ProductLink product={props.product}>
				<div className={styles.productCard__image}>
					<img src={props.product.image} alt="" />
				</div>
			</ProductLink>
			<div className={styles.productCard__text}>
				<ProductLink product={props.product}>
					<h3>{props.product.title}</h3>
				</ProductLink>
				<div className={styles.productCard__text__price}>
					<p className={styles.price}>${props.product.price}</p>
					<div className={styles.rating}>
						({props.product.rating.count})
						<Rating
							initialValue={props.product.rating.rate}
							size={20}
							readonly={true}
							allowHalfIcon={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SimilarProducts;
