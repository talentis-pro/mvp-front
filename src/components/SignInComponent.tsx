import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const SignInPageComponent = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm();
	const [showPassword, setShowPassword] = useState(true);

	const onSubmit = data => data;

	return (
		<>
			<FormControl onSubmit={handleSubmit(onSubmit)}>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input type="email" {...register("email")} name="email" id="email" />
				<FormLabel htmlFor="password">Senha</FormLabel>
				<Input
					type={showPassword ? "password" : "text"}
					{...register("password")}
					name="password"
					id="password"
				/>
				<Box
					onClick={() => {
						if (showPassword) {
							return setShowPassword(false);
						}

						return setShowPassword(true);
					}}
				>
					Amostrar senha
				</Box>
				<Button type="submit">Entrar</Button>
			</FormControl>

			<Button onClick={() => router.push("/auth/sign-up")}>
				Página de cadastro
			</Button>
		</>
	);
};
