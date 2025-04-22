import styles from './Header.module.css';
import Logo from './Logo';
import Nav from './Nav';
import DashNav from './DashNav';
const Header = ({showCartHandler,showSearchHandler,onShowMobileNav }) => {

 return(
   <header className={styles.header}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigation_mob}><Nav /></div>
          <DashNav showCartHandler={showCartHandler} showSearchHandler={showSearchHandler}/>
         
        </div>
        <div className={styles.mobileNav} onClick={()=>onShowMobileNav()}>
          <span></span>  
          <span></span>
          </div>
   </header>

 )
}

export default Header;