export interface SignInInput {
	email: string;
	password: string;
}

export interface SignInOutput {
	accessToken: string;
	expirationDate: string;
	refreshToken: string;
}
