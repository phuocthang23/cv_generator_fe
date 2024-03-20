import { decodeToken } from "react-jwt";
export const generateToken = () => {
  const token = localStorage.getItem("Auth");

  const myDecodedToken = decodeToken(token as string);

  return myDecodedToken;
};
