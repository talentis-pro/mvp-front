import axios from "axios";

import type { ApiProtocol } from "./api-protocol";
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

export class ApiConnection implements ApiProtocol {
	private readonly baseUrl = "";

	public signIn(data: SignInInput): Promise<SignInOutput> {
		return axios.post(`${this.baseUrl}/auth/sign-in`, data);
	}

	public signUp(data: SignUpInput): Promise<SignUpOutput> {
		return axios.post(`${this.baseUrl}/auth/signUp`, data);
	}

	public refreshToken(data: RefreshTokenInput): Promise<RefreshTokenOutput> {
		return axios.post(`${this.baseUrl}/auth/verify`, data);
	}

	public verifyAccount(data: VerifyInput): Promise<VerifyOutput> {
		return axios.post(`${this.baseUrl}/auth/refresh-token`, data);
	}
}
