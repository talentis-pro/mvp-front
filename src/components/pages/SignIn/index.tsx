import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Data {
	email: string;
	password: string;
}

export const SignInPage = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm<Data>();
	const [showPassword, setShowPassword] = useState(true);

	const onSubmit = (data: Data) => data;

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
				<Button onClick={() => setShowPassword(!showPassword)}>
					Mostrar senha
				</Button>
				<Button type="submit">Entrar</Button>
			</FormControl>

			<Button onClick={() => router.push("/auth/sign-up")}>
				Página de cadastro
			</Button>
		</>
	);
};
