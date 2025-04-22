import { useState, useEffect } from "react";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../UI/Loader";
import styles from "./Men.module.css";
const Men = () => {
	const [menCategory, setmenCategory] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
			.then((res) => res.json())
			.then((json) => setmenCategory(json))
			.catch(() => console.log("err"));
	}, []);

	if (menCategory.length) {
		window.localStorage.setItem("men", JSON.stringify(menCategory));
	}

	let menData = JSON.parse(window.localStorage.getItem("men"));
	if(!menData){menData=menCategory}
	const menCategoryList = menData.map((item) => {
		return <ProductCard key={item.id} product={item} />;
	});

	return (
		<div className={styles.menSection}>
			<h2>Men Clothings: </h2>
			{menData.length ? (
				<div className={styles.products}>
					{menCategoryList}
					{menCategoryList}
				</div>
			) : (
				<Loader />
			)}
		</div>
	);
};
export default Men;
