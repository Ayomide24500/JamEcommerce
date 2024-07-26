// Login.js
import { useState } from "react";
import { LoginAdmin } from "../../api/Admin";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmiteNow = (e: any) => {
    e.preventDefault();

    LoginAdmin({
      email,
      token,
    })
      .then((res) => {
        if (res?.data?.message === "welcome back") {
          toast.success("Login successful!");
          login(res?.data?.name);

          navigate("/dashboard");
        } else if (res?.data?.message === "Error reading your admin token ID") {
          setErrorMessage("Failed to login. Please go and verify.");
        } else {
          setErrorMessage("Invalid email or token. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  const handleInputChange = (setter: any) => (e: any) => {
    setter(e.target.value);
    setErrorMessage("");
  };

  return (
    <div>
      <div>
        <form className="flex flex-col gap-9" onSubmit={handleSubmiteNow}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange(setEmail)}
            className="border-gray-300 border h-[40px] lg:h-[50px] w-full outline-none px-3"
          />
          <input
            type="text"
            placeholder="Token"
            value={token}
            onChange={handleInputChange(setToken)}
            className="border-gray-300 border h-[40px] lg:h-[50px] w-full outline-none px-3"
          />
          <div className="flex justify-between items-center">
            <label className="flex items-center text-[12px]">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-gray-500 text-sm text-[12px]">
              Forgot Password?
            </a>
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-600">{errorMessage}</div>
          )}
          <button
            className="bg-black text-white h-[50px] w-full mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>

        <Toaster />
      </div>
    </div>
  );
};

export default Login;
