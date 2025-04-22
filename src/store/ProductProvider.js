import ProductContext from "./product-context";
import { useState, useEffect } from "react";

const ProductProvider = (props) => {
	const [menCategory, setmenCategory] = useState([]);
	const [womenCategory, setwomenCategory] = useState([]);
	const [accessoriesCategory, setaccessoriesCategory] = useState([]);

		fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
			.then((res) => res.json())
			.then((json) => setmenCategory(json))
			.catch(() => console.log("err"));
          

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
			.then((res) => res.json())
			.then((json) => setwomenCategory(json))
			.catch((err) => console.log("err"));
	}, []);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/jewelery`)
			.then((res) => res.json())
			.then((json) => setaccessoriesCategory(json))
			.catch((err) => console.log("err"));
	}, []);

	ProductContext = {
		men: [...menCategory],
		women: [...womenCategory],
		accessories: [...accessoriesCategory],
	};
    console.log(menCategory,"hh");
	return (
		<ProductContext.Provider value={ProductContext}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
