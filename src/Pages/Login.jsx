import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/Context/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
// 💡 If using React Router, you'd import Link:
// import { Link } from 'react-router-dom';
// And remember to import your actual toast library:
// import { toast } from 'react-toastify';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  console.log(emailInput);

  const { signInUser, googleLogin, setLoading } = useContext(AuthContext);

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        setLoading(false);
        toast.success("Successfully Logged In");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
        console.log(error);
      });
    e.target.reset();
  };

  // Function to handle Google login (placeholder)
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        setLoading(false);
        toast.success("Welcome to Leaf Store ");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <>
      <title>Leaf Store - Login</title>
      <div className="min-h-[calc(100dvh-150px)] flex items-center justify-center poppins">
        <div className="bg-white p-8 md:py-10 rounded-xl shadow-2xl w-full max-w-md mx-4">
          <h2 className="text-4xl font-bebas text-center text-green-800 mb-8">
            Leaf Store Login
          </h2>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6 ">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400 "
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type={showPass ? "password" : "text"}
                id="password"
                name="password"
                placeholder="password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="btn border-none bg-transparent absolute right-1 bottom-1 text-gray-500"
              >
                {showPass ? (
                  <FaEye size={20}></FaEye>
                ) : (
                  <GoEyeClosed size={20}></GoEyeClosed>
                )}
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              {/* 💡 Use a Link component from react-router-dom if applicable */}
              <Link
                to={"/forgetPass"}
                state={emailInput}
                className="text-sm text-green-700 hover:text-green-900 transition duration-150 cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-block btn-1 py-6 text-lg">
              Log In
            </button>
          </form>

          {/* Other Options */}
          <div className="mt-8 space-y-4">
            {/* Sign Up Link */}
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to={"/registration"}
                className="text-green-700 hover:text-green-900 font-semibold transition duration-150"
              >
                Sign Up
              </Link>
            </p>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="shrink mx-4 text-gray-400">Or</span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            {/* Social Login (Google) */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-block rounded-lg"
            >
              <FcGoogle size={24}></FcGoogle>
              <span className="">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
