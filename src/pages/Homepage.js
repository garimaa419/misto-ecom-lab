import Hero from "../components/Layout/Hero/Hero";
import Women from "../components/Layout/ProductSection/Women";
import Men from "../components/Layout/ProductSection/Men";
import Accessories from "../components/Layout/ProductSection/Accessories";
import SaleBanner from "../components/Layout/SaleBanner/SaleBanner";
import Newsletter from "../components/Layout/newsletter/Newsletter";
import { motion } from "framer-motion";
import Blog from "../components/Layout/Blog/Blog";
// import Cart from "../components/Cart/Cart";
const Homepage = ({ toggleCart, cartIsShown }) => {
	return (
		<motion.div
			 key="homepage"
			 animate={{
				 opacity:1
			 }}
			 initial={{ opacity:0 }}
			 exit={{  opacity:0 }}
			 // exit={{ opacity: 0, x: "100vw" }}
			 transition={{ duration: 0.8 }}
			 className="homepage"
		>
			{/* {cartIsShown && <Cart onCloseCart={toggleCart} />} */}
			<Hero />
			<div className="product-section">
				<Women />
				<Men />
				<Accessories />
			</div>
			<SaleBanner />
			<Newsletter />
			<div className="product-section">
				<Blog />
			</div>
		</motion.div>
	);
};
export default Homepage;
