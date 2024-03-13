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
