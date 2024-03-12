import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data/mockData";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const existingUser = users.find((user) => user.email === email);
    if (!email.match(emailRegex)) {
      setEmailError("Email không hợp lệ");
    } else if (existingUser) {
      setEmailError("Email đã tồn tại");
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
      setPasswordError("");
    }
  }, [email, password]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      const newUser = { email, password, role: "user" };
      users.push(newUser);
      navigate("/login");
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
        {emailError && <p>{emailError}</p>}
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p>{passwordError}</p>}
        <button type="submit" className="bg-blue-500">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
