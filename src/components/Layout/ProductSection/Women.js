import { useState, useEffect } from "react";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../UI/Loader";
import { motion } from "framer-motion";
// import LoadMoreButton from "../../UI/LoadMoreButton";
import styles from "./Women.module.css";
const Women = () => {
	const [womenCategory, setwomenCategory] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
			.then((res) => res.json())
			.then((json) => setwomenCategory(json))
			.catch((err) => console.log("err"));
	}, []);

	if (womenCategory.length) {
		window.localStorage.setItem("women", JSON.stringify(womenCategory));
	}
	let womenData = JSON.parse(window.localStorage.getItem("women"));
	if(!womenData){womenData=womenCategory}
	const womenCategoryList = womenData.map((item) => {
		return <ProductCard key={item.id} product={item} />;
	});

	return (
		<div className={styles.womenSection}>
			<h2>Women Clothings: </h2>
			{womenData.length ? (
				<motion.div layout animate={{}} className={styles.products}>
					{womenCategoryList}
					{womenCategoryList}
					{/* <LoadMoreButton content={womenCategoryList} /> */}
				</motion.div>
			) : (
				<Loader />
			)}
		</div>
	);
};
export default Women;
