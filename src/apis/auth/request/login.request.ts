export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  description: string;
  size: string;
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
