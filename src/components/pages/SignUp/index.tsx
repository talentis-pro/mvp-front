import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Data {
	email: string;
	password: string;
}

export const SignUpPage = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(true);
	const { register, handleSubmit } = useForm<Data>();

	const onSubmit = (data: Data) => {
		// eslint-disable-next-line no-console
		console.log(data);
	};

	return (
		<>
			<FormControl onSubmit={handleSubmit(onSubmit)}>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input name="email" id="email" type="email" {...register("email")} />
				<FormLabel htmlFor="password">Senha</FormLabel>
				<Input
					name="password"
					id="password"
					type={showPassword ? "password" : "text"}
					{...register("password")}
				/>
				<Button onClick={() => setShowPassword(!showPassword)}>
					Mostrar senha
				</Button>
				<Button
					type="submit"
					onClick={() => router.push("/auth/verify-account")}
				>
					Entrar
				</Button>
			</FormControl>
			<Button onClick={() => router.push("/auth/sign-in")}>
				Página de acesso
			</Button>
		</>
	);
};
