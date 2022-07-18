import type {
	RefreshTokenInput,
	RefreshTokenOutput,
	SignInInput,
	SignInOutput,
	SignUpInput,
	SignUpOutput,
	VerifyInput,
	VerifyOutput,
} from "./models";

export interface ApiProtocol {
	signIn: (data: SignInInput) => Promise<SignInOutput>;
	signUp: (data: SignUpInput) => Promise<SignUpOutput>;
	verifyAccount: (data: VerifyInput) => Promise<VerifyOutput>;
	refreshToken: (data: RefreshTokenInput) => Promise<RefreshTokenOutput>;
}
