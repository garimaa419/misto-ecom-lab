import styles from "./Contact.module.css";
import { BsCheckAll } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import contactus from "../../assets/contactus.jpg";
const Contact = () => {
	const [toggleButton, settoggleButton] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (email.length === 0 && name.length === 0 && message.length === 0) {
			setError("All fields are required");
			return false;
		} else if (email.length === 0) {
			setError("Email is required");
			return false;
		} else if (name.length === 0) {
			setError("Name is required");
			return false;
		} else if (message.length === 0) {
			setError("Message is required");
			return false;
		}
		setEmail("");
		setName("");
		setMessage("");
		settoggleButton(true);
		setTimeout(() => {
			settoggleButton(false);
		}
		, 2000);
		
	};

	const onNameChangeHandler = (e) => {
		setName(e.target.value);
	};
	const onEmailChangeHandler = (e) => {
		setEmail(e.target.value);
	};
	const onMessageChangeHandler = (e) => {
		setMessage(e.target.value);
	};




	return (
		<motion.div
			key="contact"
			animate={{
				opacity: 1,
			}}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			// exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 0.8 }}
			className={styles.contact}
		>
			<div className={styles.headerContainer}>
					<div className={styles.nav}>
						<Link to="/">Home</Link>
						{" > "}
						<Link to="/contact">Contact</Link>
					</div>
					<div className={styles.header__title}>
						<h1>Contact Us</h1>
					</div>
				</div>
			<div className={styles.contact__container}>
				
				<div className={styles.text}>
					<h1>We'd love to hear from you</h1>
					<p>
						If you have any questions, please don't hesitate to contact us. We
						are here to help you.
					</p>
				</div>
				<form className={styles.form} onSubmit={onSubmitHandler}>
					<input onChange={onNameChangeHandler} id="name" type="text" value={name} placeholder="Name" />
					<input onChange={onEmailChangeHandler} id="email" type="email" value={email} placeholder="Email" />
					<textarea onChange={onMessageChangeHandler} id="message" placeholder="Message"value={message}></textarea>
					<p className={styles.error}>{error}</p>
					<motion.button>
						{!toggleButton ? (
							<AnimatePresence>
								<motion.span
									// initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 8 }}
									exit={{ opacity: 0, transition: { duration: 0.5 } }}
								>
									Send
								</motion.span>
							</AnimatePresence>
						) : (
							<AnimatePresence>
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 8 }}
									exit={{
										opacity: 0,
										x: "100vw",
										transition: { duration: 0.5 },
									}}
								>
									<span>Sent</span>
									<BsCheckAll />
								</motion.span>
							</AnimatePresence>
						)}
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};

export default Contact;
