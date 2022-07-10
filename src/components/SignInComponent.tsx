import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const SignInPageComponent = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm();
	const [showPassword, changeShowPassword] = useState(true);

	const passwordView = () => {
		if (showPassword) {
			return changeShowPassword(false);
		}

		return changeShowPassword(true);
	};

	const onSubmit = data => data;

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email">Email</label>
				<input type="email" {...register("email")} name="email" id="email" />
				<label htmlFor="password">Senha</label>
				<input
					type={showPassword ? "password" : "text"}
					{...register("password")}
					name="password"
					id="password"
				/>
				<div onClick={passwordView}>Amostrar senha</div>
				<button type="submit">Entrar</button>
			</form>

			<button onClick={() => router.push("/auth/sign-up")}>
				Página de cadastro
			</button>
		</>
	);
};
