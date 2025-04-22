import styles from "./Search.module.css";
import { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchPortal from "../../../UI/SearchPortal";
import { IoMdCloseCircle } from "react-icons/io";
import {motion} from "framer-motion";
const Search = (props) => {
	const [search, setSearch] = useState("");
	let data, searchResult;
	const onChangeHandler = (e) => {
		setSearch(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
	};
	const menData = JSON.parse(window.localStorage.getItem("men"));
	const womenData = JSON.parse(window.localStorage.getItem("women"));
	const accessoriesData = JSON.parse(
		window.localStorage.getItem("accessories")
	);
	const closeHandler = () => {
		props.onCloseSearch()
	};

	if (menData && womenData && accessoriesData) {
		data = [...menData, ...womenData, ...accessoriesData];
		searchResult = data.map((item) => {
			if (
				search.length &&
				item.title.toLowerCase().includes(search.toLowerCase())
			) {
				let cat;
				if (item.category === "women's clothing") {
					cat = "women";
				} else if (item.category === "men's clothing") {
					cat = "men";
				} else {
					cat = "accessories";
				}
				return (
					<motion.div
						layout
						initial={{opacity:0}}
						animate={{opacity:1}}
						transition={{duration:1}}
						className={styles.search__result}
						onClick={() => setSearch("")}
						key={item.id}
					>
						<Link to={`/${cat}/${item.id}`}  onClick={closeHandler}>
							<div className={styles.image}>
								<img src={item.image} alt="" />
							</div>
							<p>{item.title.substr(0, 30) + "..."}</p>
							<p>${item.price}</p>
						</Link>
					</motion.div>
				);
			} else {
				return null;
			}
		});
	}


	return (
		<SearchPortal className={styles.search} toggleSearch={props.onCloseSearch}>
			<div className={styles.closeButton} onClick={closeHandler} >
				<IoMdCloseCircle />
			</div>
			<form className={styles.form} onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="Search..."
					className={styles.search__input}
					onChange={onChangeHandler}
					value={search}
				/>
			</form>
			<motion.div layout className={styles.search__results}>{searchResult}</motion.div>
		</SearchPortal>
	)
};
export default Search;
