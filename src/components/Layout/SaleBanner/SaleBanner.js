import styles from "./SaleBanner.module.css";
import SaleCard from "../../UI/SaleCard";
import newSeasonSaleImg1 from "../../../assets/new-arrival/newSeason1.jpg";
import newSeasonSaleImg2 from "../../../assets/new-arrival/newSeason2.png";
const SaleBanner = () => {
   
	return (
		<div className={styles.saleBanner}>
			<SaleCard
				img={newSeasonSaleImg1}
				title="New Season"
				description="Lookbook Collection"
			/>
			<SaleCard
				img={newSeasonSaleImg2}
				title="Sale"
				description={<> Sale up to <span> 50% off </span></>}
			/>
		</div>
	);
};
export default SaleBanner;
