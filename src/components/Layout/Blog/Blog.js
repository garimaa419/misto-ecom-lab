import styles from "./Blog.module.css";
import  blogdata  from "../../../store/Data";
import BlogCard from "../../UI/BlogCard";
const Blog = () => {
    const blogs = blogdata.map(item=>{
        return <BlogCard key={item.id} blog={item} />
    })
	return (
		<div className={styles.blog}>
			<h2>Latest From Blog :</h2>
            <div className={styles.blog_cards}>{blogs}</div>
		</div>
	);
};

export default Blog;
