import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import styles from "./ShopPage.module.css";
import ProductCard from "../../components/Product/ProductCard";
const ShopPage = (props) => {
	const [productdata, setproductData] = useState([]);
	let productresults;

	const menData = useMemo(
		() => JSON.parse(window.localStorage.getItem("men")),
		[]
	);
	const womenData = useMemo(
		() => JSON.parse(window.localStorage.getItem("women")),
		[]
	);
	const accessoriesData = useMemo(
		() => JSON.parse(window.localStorage.getItem("accessories")),
		[]
	);

	useEffect(() => {
		if (menData && womenData && accessoriesData) {
			setproductData([...menData, ...womenData, ...accessoriesData]);
		}
	}, [menData, womenData, accessoriesData]);

	// const onChangeHandler = (e) => {
	// 	const value = e.target.value;
	// 	let result;
	// 	// sort by price
	// 	switch (value) {
	// 		case "pasc":
	// 			result = productdata.sort((a, b) => {
	// 				return a.price - b.price;
	// 			});
	// 			setproductData(result);
	// 			break;
	// 		case "asc":
	// 			result = productdata.sort((a, b) => {
	// 				return a.title > b.title;
	// 			});
	// 			setproductData(result);

	// 			break;
	// 		case "dsc":
	// 			result = productdata.sort((a, b) => {
	// 				return b.title > a.title;
	// 			});
	// 			setproductData(result);
	// 			break;
	// 		case "pdsc":
	// 			result = productdata.sort((a, b) => {
	// 				return b.price - a.price;
	// 			});
	// 			setproductData(result);
	// 			break;
	// 		default:
	// 			result = productdata;
	// 			setproductData(result);
	// 			break;
	// 	}
	// };
	productresults = productdata.map((item) => {
		return <ProductCard key={item.id} product={item} />;
	});
	console.table(productdata);

	return (
		<AnimatePresence>
			<motion.div
				key="shopPage"
				animate={{
					opacity: 1,
				}}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				// exit={{ opacity: 0, x: "100vw" }}
				transition={{ duration: 0.8 }}
				className={styles.ShopPage}
			>
				<h1>All Products</h1>
				{/* dropdown sort option */}
				{/* <div className={styles.sort_container}>
					<div className={styles.sort_option}>
						<div className={styles.sort_option_text}>
							<p>Sort by</p>
						</div>
						<div className={styles.sort_option_dropdown}>
							<select onChange={onChangeHandler}>
								<option>Choose</option>
								<option value={"asc"}>A-Z</option>
								<option value={"dsc"}>Z-A</option>
								<option value={"pasc"}>Price: Low to High</option>
								<option value={"pdsc"}>Price: High to Low</option>
							</select>
						</div>
					</div>
				</div> */}

				<div className={styles.Shop_container}>
					{productresults}
					{productresults}
					{productresults}
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ShopPage;
