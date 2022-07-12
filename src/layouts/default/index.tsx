import { Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => (
	<Flex
		as="main"
		direction="column"
		align="center"
		justify="center"
		w="full"
		maxW="container.lg"
		mx="auto"
	>
		{children}
	</Flex>
);
