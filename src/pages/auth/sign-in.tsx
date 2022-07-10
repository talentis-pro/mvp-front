import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const SignIn = () => {
	const [emailInput, setEmailInput] = useState();
	const [passwordInput, setPasswordInput] = useState();

	const handleInputChange = e => {
		const value = e.target.value;

		if (e.target.id === "email") {
			return setEmailInput(value);
		}

		return setPasswordInput(value);
	};

	return (
		<FormControl>
			<FormLabel>Email</FormLabel>
			<Input
				id="email"
				type="email"
				value={emailInput}
				onChange={handleInputChange}
			/>
			<FormLabel>Password</FormLabel>
			<Input
				id="password"
				type="password"
				value={passwordInput}
				onChange={handleInputChange}
			/>
			<button type="submit">Entrar</button>
		</FormControl>
	);
};

export default SignIn;
