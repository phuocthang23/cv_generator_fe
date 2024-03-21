import { jwtDecode } from "jwt-decode";

export const generateToken = () => {
  const token = localStorage.getItem("Auth");

  if (typeof token !== "string") {
    return null;
  }

  const myDecodedToken = jwtDecode(token as any);

  if ("dataGenerateToken" in myDecodedToken) {
    return myDecodedToken.dataGenerateToken;
  }

  return null;
};
