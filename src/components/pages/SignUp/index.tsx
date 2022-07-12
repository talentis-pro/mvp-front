import {
	AtSignIcon,
	ViewIcon,
	ViewOffIcon,
	ArrowForwardIcon,
} from "@chakra-ui/icons";
import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Text,
	InputGroup,
	Input,
	InputRightElement,
	Button,
	Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import type { FCWithLayout } from "types/interfaces/layout";

interface Data {
	email: string;
	password: string;
}

export const SignUpPage: FCWithLayout = () => {
	const { handleSubmit, register, control } = useForm<Data>({
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { isValid, errors } = useFormState({ control });
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();

	const onSubmit = (data: Data) => {
		if (!isValid) return;

		// eslint-disable-next-line no-console
		console.log(data);

		router.push("/auth/verify-account");
	};

	return (
		<Flex
			as="section"
			direction="column"
			align="center"
			justify="center"
			w="full"
			maxW="container.2xs"
			minH="100vh"
			h="full"
			mx="auto"
			p="6"
		>
			<Flex as="header" w="full" py="8">
				<Heading as="h1">Crie sua conta!</Heading>
			</Flex>
			<Flex
				as="form"
				direction="column"
				align="center"
				justify="center"
				gap="2"
				w="full"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormControl isInvalid={Boolean(errors.email)}>
					<FormLabel htmlFor="email">
						<Text>E-mail</Text>
					</FormLabel>
					<InputGroup>
						<Input
							id="email"
							type="email"
							placeholder="exemplo@gmail.com"
							{...register("email", {
								required: true,
							})}
						/>
						<InputRightElement>
							<AtSignIcon />
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<FormControl isInvalid={Boolean(errors.password)}>
					<FormLabel htmlFor="password">
						<Text>Senha</Text>
					</FormLabel>
					<InputGroup>
						<Input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="Senha forte de 8+ caracteres"
							{...register("password", {
								required: true,
							})}
						/>
						<InputRightElement>
							<Button
								variant="transparent"
								onClick={() => setShowPassword(!showPassword)}
								aria-label={showPassword ? "Esconder" : "Mostrar"}
							>
								{showPassword ? <ViewOffIcon /> : <ViewIcon />}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<Button
					w="full"
					rightIcon={<ArrowForwardIcon />}
					type="submit"
					disabled={!isValid}
				>
					Criar conta
				</Button>
			</Flex>
			<Flex align="center" justify="flex-end" w="full" py="2">
				<Text>
					Já tem uma conta?{" "}
					<NextLink href="/auth/sign-in" passHref>
						<Link color="link">Faça login</Link>
					</NextLink>
				</Text>
			</Flex>
		</Flex>
	);
};
