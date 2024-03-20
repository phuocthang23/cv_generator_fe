import { jwtDecode } from "jwt-decode";

interface MyToken {
  name: string;
  exp: number;
}
export const generateToken = () => {
  const token = localStorage.getItem("Auth");

  const myDecodedToken = jwtDecode(token as string);

  if ("dataGenerateToken" in myDecodedToken) {
    return myDecodedToken.dataGenerateToken;
  }
};
