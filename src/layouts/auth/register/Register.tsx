import { useNavigate } from "react-router-dom";
import { users } from "../../../data/mockData";
import { useAuthLogic } from "../../../utils/authLogic";
import { FloatingLabel } from "flowbite-react";

const Register = () => {
  const {
    email,
    setEmail,
    password,
    confirmPassword,
    setConfirmPassword,
    setPassword,
    emailError,
    passwordError,
    confirmPasswordError,
  } = useAuthLogic(true);
  const navigate = useNavigate();

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
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today for sign up with us!
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div className=" flex flex-col gap-4">
              <div>
                <FloatingLabel
                  variant="outlined"
                  label="Email"
                  sizing="md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  color={emailError && email !== "" ? "error" : "default"}
                />
                {emailError && email !== "" && (
                  <p className="text-red-500">{emailError}</p>
                )}
              </div>

              <div>
                <FloatingLabel
                  variant="outlined"
                  label="password"
                  sizing="md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color={passwordError && password !== "" ? "error" : "default"}
                />
                {passwordError && password !== "" && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>

              <div>
                <FloatingLabel
                  variant="outlined"
                  label="repassword"
                  sizing="md"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  color={
                    confirmPasswordError && confirmPassword !== ""
                      ? "error"
                      : "default"
                  }
                />
                {confirmPasswordError && confirmPassword !== "" && (
                  <p className="text-red-500">{confirmPasswordError}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already have account ?{" "}
                <a className="underline" href="#">
                  Sign in
                </a>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
