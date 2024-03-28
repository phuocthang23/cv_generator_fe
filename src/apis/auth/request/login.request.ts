export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  userName: string;
  email: string;
  password: string;
  roleId: number;
}

export interface RegisterCandidateRequest {
  name: string;
  email: string;
  password: string;
  gender: string;
  phone: number;
  address: string;
  dob: string;
}
