export interface RefreshTokenInput {
	userId: string;
	refreshToken: string;
}

export interface RefreshTokenOutput {
	accessToken: string;
	expirationDate: string;
}
