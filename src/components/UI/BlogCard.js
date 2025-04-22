import styles from "./BlogCard.module.css";
const BlogCard = ({ blog }) => {
	return (
		<div className={styles.blog_item}>
			<div className={styles.blog__img}>
				<img src={blog.image} alt="" />
			</div>
			<div className={styles.blog__text}>
				<h3>{blog.title}</h3>
				<p>{blog.excerpt}</p>
			</div>
		</div>
	);
};

export default BlogCard;
