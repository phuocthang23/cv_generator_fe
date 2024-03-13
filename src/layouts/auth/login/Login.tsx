import { useEffect, useState } from "react";
import { users } from "../../../data/mockData";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Typography,
  Input,
} from "@material-tailwind/react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const data = users;
  const navigate = useNavigate();

  console.log(email, password, data);

  useEffect(() => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const validUser = users.find((user) => user.email === email);
    if (!email.match(emailRegex)) {
      setEmailError("Email không hợp lệ");
    } else if (!validUser) {
      setEmailError("Email không đúng");
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    } else if (validUser?.password !== password) {
      setPasswordError("Mật khẩu không đúng");
    } else {
      setPasswordError("");
    }
  }, [email, password]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (validUser) {
      if (validUser.role === "admin") {
        navigate("/admin");
      } else if (validUser.role === "user") {
        navigate("/");
      } else {
        navigate("/business");
      }
    }
  };
  return (
    <div className="flex gap-5">
      <div className="w-1/2">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 m-auto">
            <div className="mb-1 flex flex-col gap-3">
              <div>
                <Input type="email" label="Email" />
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-1 ml-2 flex items-center font-normal text-red-500"
                >
                  Email does not exist or email is incorrect
                </Typography>
              </div>

              <div>
                <Input type="password" label="password" />
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-1 ml-2 flex items-center font-normal text-red-500"
                >
                  Use at least 8 characters
                </Typography>
              </div>
            </div>

            <Button className="mt-6" fullWidth>
              sign in
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
