import styles from "./Congratulation.module.css";
import { BsCheckAll } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SVGLoader from "../../../assets/SVGLoader";
import { Link } from "react-router-dom";



const Congratulation = ({continueShoppingHandler}) => {
   const  onClickHandler = () => {
        continueShoppingHandler();
    };
    return (
        <AnimatePresence>
        <motion.div
        key={styles.congratulation}
        initial={{ opacity: 0 , x:1000}}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.7 }}
        className={styles.congratulation}
        >

        <div className={styles.congratulation__container}>
                <motion.div className={styles.congratulation_icon}>
                    <SVGLoader />
                </motion.div>
                <div className={styles.congratulation_text}>
                    <h1>Thank you for your order!</h1>
                    <p>
                        We will contact you shortly to confirm your order.
                    </p>
                </div>
            </div>
            <div className={styles.congratulation_button}>
                <Link onClick={onClickHandler} to="/">
                    <button >Continue Shopping</button>
                </Link>
            </div>
        </motion.div>
        </AnimatePresence>
    );
};

export default Congratulation;