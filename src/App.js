import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Homepage from "./pages/Homepage";
import MenPage from "./pages/Men/MenPage";
import WomenPage from "./pages/Women/WomenPage";
import AccessoriesPage from "./pages/Accessories/AccessoriesPage";
import ProductDetail from "./components/Product/ProductDetail";
import Search from "./components/Layout/Header/Search/Search";
import Contact from "./pages/Contact/Contact";
import ShopPage from "./pages/Shop/ShopPage";
import ScrollToTop from "./components/UI/ScrollToTop";
import CheckOut from "./components/Layout/CheckOut/CheckOut";
import MobileNav from "./components/Layout/Header/MobileNav";
function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const [searchIsShown, setsearchIsShown] = useState(false);
	const [checkoutToggle, setcheckoutToggle] = useState(false);
	const [mobileNav, setmobileNav] = useState(false);
	// add no scroll to body
	const noScroll = () => {
		document.body.style.overflow = "hidden";
	};

	// remove no scroll to body
	const scroll = () => {
		document.body.style.overflow = "";
	};

	const toggleCart = () => {
		setCartIsShown((cartIsShown) => !cartIsShown);
		!cartIsShown ? noScroll() : scroll();
	};
	const toggleSearch = () => {
		setsearchIsShown((searchIsShown) => !searchIsShown);
		!searchIsShown ? noScroll() : scroll();
	};
	const toggleCheckOut=()=>{
		setcheckoutToggle(checkoutToggle=>!checkoutToggle);
		!checkoutToggle ? noScroll() : scroll();
	}
	const toggleMobileNav = () => {
		setmobileNav((mobileNav) => !mobileNav);
		!mobileNav ? noScroll() : scroll();
	};
	return (
		<div className="App">
			{cartIsShown && <Cart onCloseCart={toggleCart} showCheckOutHandler={toggleCheckOut} />}
			{searchIsShown? <Search onCloseSearch={toggleSearch} /> : null}
			{checkoutToggle&& <CheckOut onCloseCheckOut={toggleCheckOut} />}
			{mobileNav&& <MobileNav onCloseMobileNav={toggleMobileNav} />}
			<Header showCartHandler={toggleCart} showSearchHandler={toggleSearch} onShowMobileNav={toggleMobileNav} />
			<main>
				<ScrollToTop />
				<Routes>
					<Route path="/" exact element={<Homepage toggleCart={toggleCart} 
					// cartIsShown={cartIsShown}
					  />} />
					<Route path="/men" exact element={<MenPage />} />
					<Route path="/women" exact element={<WomenPage />} />
					<Route path="/accessories" exact element={<AccessoriesPage />} />
					<Route path="/contact" exact element={<Contact />} />
					<Route path="/shop" exact element={<ShopPage />} />
					<Route path="/:productCategory/:productId" exact element={<ProductDetail />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
