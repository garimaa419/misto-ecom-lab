import {Link} from 'react-router-dom';
import styles from './ProductLink.module.css';
const ProductLink = (props) => {
    let cat;
    if(props.product.category==="women's clothing"){
        cat = "women"
    }else if(props.product.category==="men's clothing")
    {
        cat = 'men'
    }else{
        cat = "accessories"
    }
    return (
        <Link to={`/${cat}/${props.product.id}`} className={styles.productLink}>
            {props.children}
        </Link>
    );
}
export default ProductLink;