import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Search from "./Search/Search";
const Nav = () => {
	const navItem = [
		{ name: "Home", link: "/" },
		{ name: "Men", link: "/men" },
		{ name: "Women", link: "/women" },
		{ name: "Accessories", link: "/accessories" },
		{ name: "Contact", link: "/contact" },
	];

	const nav = navItem.map((item) => {
		return (
			<li key={item.name} className={styles.nav__list__item}>
				
				<NavLink to={item.link} className={styles.nav__list__item__link}>
					{item.name}
				</NavLink>
			</li>
		);
	});
	return (
		<nav className={styles.nav}>
			{/* <Search /> */}
			<ul className={styles.nav__list}>{nav}</ul>
		</nav>
	);
};

export default Nav;
