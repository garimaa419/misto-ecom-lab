import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const emailValidation = () => {
		if (email.length > 2 && !email.includes("@")) {
			setError("Email is not valid");
			return false;
		}else if(email.length>2 && email.includes(" ")){
			setError("Email  cannot contain spaces");
			return false;
		}
		return true;
	};
	const passwordValidation = () => {
		if (password.length && password.length < 6) {
			setError("Password must be at least 6 characters");
			return false;
		} else if (password.length && password.includes(" ")) {
			setError("Password cannot contain spaces");
			return false;
		} else if (password.length && !password.match(/[a-z]/i)) {
			setError("Password must contain at least one lowercase letter");
			return false;
		} else if (password.length && !password.match(/[A-Z]/i)) {
			setError("Password must contain at least one uppercase letter");
			return false;
		} else if (password.length && !password.match(/[0-9]/i)) {
			setError("Password must contain at least one number");
			return false;
		}
		return true;
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (email.length === 0 && password.length === 0) {
			setError("Email and Password are required");
			return false;
		} else if (password.length === 0) {
			setError("Password is required");
			return false;
		} else if (email.length === 0) {
			setError("Email is required");
			return false;
		}
		if (emailValidation() && passwordValidation()) {
            setEmail("");
            setPassword("");
            props.onLoginHandler();

		}
	};

	useEffect(() => {
		setTimeout(() => {
			passwordValidation();
			emailValidation();
			if (passwordValidation() && emailValidation()) {
				setError("");
			}
		}, 1000);
		return () => {
			clearTimeout();
		};
	}, [email, password]);

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
		console.log(email);
	};
	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
		console.log(password);
	};


	return (
		<AnimatePresence>
		<motion.div
		initial={{ opacity: 0, }}
		animate={{ opacity: 1,  }}
		exit={{ x: -1000 }}
		transition={{ duration: 0.7 }}
		
		className={styles.login}>
			<div className={styles.login__header}>
				<div className={styles.login__header__title}>
					<h2>Login to checkout</h2>
				</div>
				<div className={styles.login__header__form}>
					<form onSubmit={onSubmitHandler}>
						<input
							onChange={emailChangeHandler}
							value={email}
							type="email"
							id="email"
                            placeholder="Email"
						/>

						<input
							onChange={passwordChangeHandler}
							value={password}
							type="password"
							id="password"
                            placeholder="Password"
						/>

						<p>{error}</p>
						<div className={styles.login__header__form__input}>
							<button>Login</button>
						</div>
					</form>
					<div className={styles.note}>( put any valid email and password )</div>
				</div>
			</div>
		</motion.div>
		</AnimatePresence>
	);
};
export default Login;
