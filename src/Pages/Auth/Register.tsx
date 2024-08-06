import { useState } from "react";
import { createAdmin } from "../../api/Admin";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Login from "./Login";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmiteNow = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createAdmin({
        firstName,
        lastName,
        email,
        password,
      });

      if (res && res?.data?.data?.verify === false) {
        toast.success("Registration successful but not verified!");
        setIsVerify(true);
      } else {
        setErrorMessage("Failed to register. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (setter: any) => (e: any) => {
    setter(e.target.value);
    setErrorMessage("");
  };

  return (
    <div className="lg:w-full min-h-[390px] relative overflow-hidden mt-6">
      <div>
        <p className="text-[10px] pb-3 text-red-600">
          Only Admin Register this page
        </p>
      </div>
      <div className="lg:h-[50px] h-[40px] w-full flex justify-center items-center gap-5">
        <button
          onClick={() => {
            setIsRegister(false);
            setIsVerify(false);
          }}
          className={`h-full w-[50%] ${
            !isRegister && !isVerify
              ? "bg-gray-700 text-white"
              : "bg-gray-500 text-white"
          } transition-all duration-300`}
        >
          Login
        </button>
        <button
          onClick={() => setIsRegister(true)}
          className={`h-full w-[50%] ${
            isRegister && !isVerify
              ? "bg-gray-700 text-white"
              : "bg-gray-500 text-white"
          } transition-all duration-300`}
        >
          Register
        </button>
      </div>
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: isVerify
            ? "translateX(-200%)"
            : isRegister
            ? "translateX(-100%)"
            : "translateX(0)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 p-4">
          <Login />
        </div>
        <div className="absolute top-0 left-full w-full h-full flex flex-col gap-4 p-4">
          <form onSubmit={handleSubmiteNow} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange(setEmail)}
              className="border-gray-300 border h-[50px] w-full outline-none px-3"
            />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
              className="border-gray-300 border h-[50px] w-full outline-none px-3"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleInputChange(setLastName)}
              className="border-gray-300 border h-[50px] w-full outline-none px-3"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                placeholder="Password"
                value={password}
                onChange={handleInputChange(setPassword)}
                className="border-gray-300 border h-[50px] w-full outline-none px-3 pr-10"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)} // Toggle showPassword state
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center text-[12px]">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <Link to="" className="text-gray-500 text-[10px]">
                Forgot Password?
              </Link>
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
          <div className="text-[12px]">
            <Toaster />
          </div>
        </div>
        <div className="absolute top-0 left-[200%] w-full h-full flex flex-col gap-4 p-4">
          <h2 className="text-xl font-bold">Verify Your Account</h2>
          <p>Please check your email for a verification link.</p>
          {/* Add any additional verification steps here */}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
