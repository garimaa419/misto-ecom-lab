import styles from "./ProductCard.module.css";
import ProductLink from "./ProductLink";
import { Rating } from "react-simple-star-rating";
import CartButton from "../Cart/CartButton";
import { motion } from "framer-motion";
const ProductCard = (props) => {
	return (
		<motion.div
			layout
			className={`${styles.productCard} ${styles[`${props.class}`]}`}
		>
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
					<div className={styles.price__container}>
						<p className={styles.price}>${props.product.price}</p>
						{/* rating */}
						<CartButton product={props.product} id={props.product.id} />
					</div>
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
		</motion.div>
	);
};
export default ProductCard;
