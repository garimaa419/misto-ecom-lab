import styles from "./MobileNav.module.css";
import { NavLink } from "react-router-dom";
import NavPortal from "../../UI/NavPortal";
import {IoMdCloseCircle} from 'react-icons/io';
const MobileNav = (props) => {
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
		<NavPortal onCloseMobileNav={props.onCloseMobileNav}>
			<nav className={styles.nav}>
            <div className={styles.closeButton} onClick={()=>props.onCloseMobileNav()}>
				<IoMdCloseCircle />
			</div>
				<ul className={styles.nav__list}>{nav}</ul>
			</nav>
		</NavPortal>
	);
};

export default MobileNav;
