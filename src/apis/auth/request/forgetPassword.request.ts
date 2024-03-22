export interface forgerPasswordRequest {
  email: string;
}

export interface confirmPasswordRequest {
  password: string;
  card_id: string | undefined;
}
