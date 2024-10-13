import { useState } from "react";
import { LoginAdmin } from "../../api/Admin";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmiteNow = (e: any) => {
    e.preventDefault();
    setLoading(true);

    LoginAdmin({
      email,
      token,
    })
      .then((res) => {
        if (res?.data?.message === "welcome back") {
          toast.success("Login successful!");
          login(res?.data?.name);
          navigate("/dashboard");
        } else {
          setErrorMessage("Invalid email or password. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false);
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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={token}
              onChange={handleInputChange(setToken)}
              className="border-gray-300 border h-[40px] lg:h-[50px] w-full outline-none px-3 pr-10"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
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
            className="bg-black text-white h-[50px] w-full mt-4 flex justify-center items-center"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        <Toaster />
      </div>
    </div>
  );
};

export default Login;
