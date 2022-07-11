import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface Data {
	code: string;
}

export const VerifyAccountPage = () => {
	const { register, handleSubmit } = useForm<Data>();

	const onSubmit = (data: Data) => {
		// eslint-disable-next-line no-console
		console.log(data);
	};

	return (
		<>
			<FormControl onSubmit={handleSubmit(onSubmit)}>
				<FormLabel htmlFor="email">Código</FormLabel>
				<Input name="code" id="code" type="text" {...register("code")} />
				<Button type="submit">Verificar</Button>
			</FormControl>
		</>
	);
};
