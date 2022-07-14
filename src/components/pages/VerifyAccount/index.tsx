import { CheckIcon } from "@chakra-ui/icons";
import {
	Button,
	Flex,
	FormControl,
	Heading,
	HStack,
	PinInput,
	PinInputField,
	Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm, useFormState } from "react-hook-form";
import type { FCWithLayout } from "types/interfaces/layout";

interface Data {
	code: Array<number>;
}

export const VerifyAccountPage: FCWithLayout = () => {
	const { handleSubmit, register, control } = useForm<Data>({
		mode: "onChange",
		defaultValues: {
			code: [],
		},
	});
	const { isValid, errors } = useFormState({ control });
	const router = useRouter();

	const onSubmit = (data: Data) => {
		if (!isValid) return;

		// eslint-disable-next-line no-console
		console.log(data);

		router.push("/");
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
			<Flex as="header" direction="column" w="full" py="8">
				<Heading as="h1">Verifique sua conta!</Heading>
				<Heading
					as="h2"
					color="firstText"
					fontSize="text.1"
					fontWeight="text.1"
					lineHeight="text.1"
				>
					Enviamos um código de verificação para o seu e-mail para que você
					possa concluir seu registro!
				</Heading>
			</Flex>
			<Flex
				as="form"
				direction="column"
				align="center"
				justify="center"
				gap="8"
				w="full"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormControl isInvalid={Boolean(errors.code)}>
					<HStack w="full">
						<PinInput id="code" type="number">
							{/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
							{[0, 1, 2, 3, 4, 5].map(id => (
								<PinInputField
									w="full"
									key={id}
									{...register(`code.${id}`, {
										required: true,
									})}
								/>
							))}
						</PinInput>
					</HStack>
				</FormControl>
				<Button
					w="full"
					rightIcon={<CheckIcon />}
					type="submit"
					disabled={!isValid}
				>
					<Text mx="auto">Confirmar</Text>
				</Button>
			</Flex>
		</Flex>
	);
};
