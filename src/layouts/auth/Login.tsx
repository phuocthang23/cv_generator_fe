import { useEffect, useState } from "react";
import { users } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
        <button type="submit" className="bg-blue-500">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
