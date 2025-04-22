import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Loader from "../UI/Loader";
import CartButton from "../Cart/CartButton";
//import Magnifier from "react-magnifier";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SimilarProducts from "./SimilarProducts";
const ProductDetail = () => {
	const { productId, productCategory } = useParams();
	const [product, setProduct] = useState([]);
	const [relatedProduct, setRelatedProduct] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://fakestoreapi.com/products/${productId}`
			);
			const data = await response.json();
			setProduct(data);
		};
		fetchData();
	}, [productId]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://fakestoreapi.com/products/category/${product.category}?limit=5`
			);
			const data = await response.json();
			const newData = data.filter((item) => item.id !== product.id);
			setRelatedProduct(newData);
		};
		fetchData();
	}, [product.id,product.category]);
	const relatedProducts = relatedProduct.map((item) => {
		return <SimilarProducts key={item.id} product={item} />;
	});

	return (
		<motion.div
			key={styles.productDetail}
			animate={{
				opacity: 1,
			}}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			// exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 0.8 }}
			className={styles.productDetail}
		>
			<div className={styles.headerContainer}>
				<div className={styles.nav}>
					<Link to="/">Home</Link>
					{" > "}
					<Link to={`/${productCategory}`}>{productCategory}</Link>
					{" > "}
					<Link to={`/${productCategory}/${product.id}`}>{product.title&&product.title.substr(0, 30) + "..."}</Link>
				</div>
				<div className={styles.header__title}>
					{productCategory}
					{productCategory === "men" || "women" ? "'s Clothing" : ""}
				</div>
				<div className={styles.header__sku}>SKU: {productId}</div>
			</div>
			<div className={styles.productDetail__content}>
				{product.length !== 0 ? (
					<>
						{" "}
						<div className={styles.productDetail__image}>
						<img src={product.image} alt="" />
							{/*<Magnifier
								src={product.image}
								width={300}
								mgShowOverflow={true}
								mgShape="square"
							/>*/}
						</div>
						<div className={styles.productDetail__info}>
							<h1 className={styles.productDetail__info__title}>
								{product.title}
							</h1>
							<div className={styles.rating}>
								({product.rating.count})
								<Rating
									initialValue={product.rating.rate}
									size={20}
									readonly={true}
									allowHalfIcon={true}
								/>
							</div>
							<div className={styles.productDetail__info__price}>
								<span>${product.price}</span>
								<CartButton product={product} id={product.id} />
							</div>

							<div className={styles.subSection}>
								<div className={styles.subSection__item}>
									<div className={styles.subSection__item__icon}>
										<MdOutlineLocalShipping />
									</div>
									<div className={styles.subSection__item__text}>
										<h3>Shipping & Delivery</h3>
									</div>
								</div>
								<div className={styles.subSection__item}>
									<div className={styles.subSection__item__icon}>
										<BsArrowRepeat />
									</div>
									<div className={styles.subSection__item__text}>
										<h3>30 Days return</h3>
									</div>
								</div>
								<div className={styles.subSection__item}>
									<div className={styles.subSection__item__icon}>
										<MdSupportAgent />
									</div>
									<div className={styles.subSection__item__text}>
										<h3>Ask a Question</h3>
									</div>
								</div>
							</div>
							<div className={styles.productDetail__info__description}>
								{product.description}
							</div>
						</div>
					</>
				) : (
					<Loader />
				)}
			</div>
			<div className={styles.similarProducts}>
				<h2>Similar Products</h2>
				<div className={styles.similarProducts__container}>
					{relatedProduct.length ? relatedProducts : <Loader />}
				</div>
			</div>
		</motion.div>
	);
};

export default ProductDetail;
