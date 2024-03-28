export interface LoginResponse {
  success: boolean;
  data: dataLoginResponse;
  token: string;
}

export interface dataLoginResponse {
  id: number;
  email: string;
  role: string;
  username: string;
}

export interface registerResponse {
  success: boolean;
  message: string;
}

export interface registerCandidateResponse {
  success: boolean;
  message: string;
}
export interface resetPasswordResponse {
  message: string;
}

export interface comfirmPasswordResponse {
  message: string;
}
