import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
	return (
		<Link className="logo" to="/">
			<img src={logo} alt="logo" />
		</Link>
	);
};

export default Logo;
