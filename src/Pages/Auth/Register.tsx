import { useEffect, useState } from "react";
import { createAdmin, verifyAdmin } from "../../api/Admin";
import { Toaster, toast } from "react-hot-toast";
import Login from "./Login";
import { Link } from "react-router-dom";
import React from "react";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [token] = useState("");
  const [verify] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmiteNow = async (e: any) => {
    e.preventDefault();

    try {
      const res = await createAdmin({
        email,
        token,
        verify,
        firstName,
        lastName,
      });

      // const VerifyAdmin = (res: any) => {

      // };

      if (res && res?.data?.data?.verify === false) {
        toast.success("Registration successful but not verify!");
        setIsVerify(true);
      } else {
        setErrorMessage("Failed to register. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (setter: any) => (e: any) => {
    setter(e.target.value);
    setErrorMessage("");
  };

  return (
    <div className="lg:w-full h-[390px] relative overflow-hidden mt-6">
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
            <div className="flex justify-between items-center">
              <label className="flex items-center text-[13px]">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <Link to="" className="text-gray-500 text-sm text-[10px]">
                Forgot Password?
              </Link>
            </div>
            {errorMessage && (
              <div className="mb-4 text-red-600">{errorMessage}</div>
            )}
            <button className="bg-black text-white h-[50px] w-full mt-4">
              Submit
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
