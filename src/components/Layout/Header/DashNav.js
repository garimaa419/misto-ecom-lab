import {BiSearchAlt} from 'react-icons/bi';
import {BsGlobe} from 'react-icons/bs';
import {MdPersonOutline} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styles from './DashNav.module.css';
import CartCounter from '../../Cart/CartCounter';
// import { useState } from 'react';
// import Search from './Search/Search';
const DashNav = ({showCartHandler,showSearchHandler}) => {
    const cartToggler=()=>{
        showCartHandler();
    }
    const searchToggler=()=>{
        showSearchHandler();
    }
    // const [searchToggle, setsearchToggle] = useState(false);
    // const toggleSearch=()=>{
    //     setsearchToggle(searchToggle=>!searchToggle);
    // }
	return (

		<div className={styles.dashNav}>
            
			<div className={styles.dashNav__item} onClick={searchToggler}>
                <BiSearchAlt />
            </div>
			<div className={styles.dashNav__item}>
                <BsGlobe />
            </div>
			<div className={styles.dashNav__item}>
                <MdPersonOutline />
            </div>
			<div onClick={cartToggler} className={styles.dashNav__item}>
                <AiOutlineShoppingCart /> <CartCounter />
            </div>
		</div>
	);
};
export default DashNav;
