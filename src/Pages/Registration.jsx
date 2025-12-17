import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Contexts/Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";

const Registration = () => {
  const { createNewUser, setLoading, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const [checkPass, setCheckPass] = useState("");
  // console.log(checkPass);

  const handleRegistration = (e) => {
    e.preventDefault();
    // Get form data directly from the event target
    const userName = e.target.name.value;
    const email = e.target.email.value;
    const userPhoto = e.target.photoURL.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setCheckPass("Password length must be at least 6 character");
      return;
    } else if (!/[A-Z]/g.test(password)) {
      setCheckPass("Must have an Uppercase letter in the password");
      return;
    } else if (!/[a-z]/g.test(password)) {
      setCheckPass("Must have Lowercase letter in the password");
      return;
    }

    createNewUser(email, password)
      .then(() => {
        updateUserProfile(userName, userPhoto, email)
          .then(() => {
            setLoading(false);
            toast.success("Welcome to Leaf Store ");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.code);
            console.log(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.code);
        console.log(error);
        setLoading(false);
      });

    e.target.reset();
  };

  const handleGoogleRegistration = () => {
    googleLogin()
      .then(() => {
        setLoading(false);
        toast.success("Welcome to Leaf Store ");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <>
      <title>Leaf Store - Sign Up</title>
      <div className="md:min-h-[calc(100dvh-70px)]  md:bg-gray-100 flex items-center justify-center poppins">
        <div className="bg-white p-8 md:p-10 rounded-xl md:shadow-2xl w-full max-w-lg mx-4">
          {/* Title */}
          <h2 className="text-4xl font-bebas text-center text-green-800 mb-8">
            Join Leaf Store
          </h2>

          {/* Registration Form */}
          <form onSubmit={handleRegistration} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="test@mail.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400"
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Picture URL
              </label>
              <input
                type="url"
                id="photoURL"
                name="photoURL"
                required
                placeholder="https://example.com/my-photo.jpg"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400"
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
                placeholder="•••••••• (Min 6 characters)"
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
            <p className="text-red-600 text-center">{checkPass}</p>
            {/* Registration Button */}
            <button type="submit" className="btn btn-block btn-1 py-6 text-lg">
              Register
            </button>
          </form>

          {/* Other Options */}
          <div className="mt-8 space-y-4">
            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              {/* 💡 Use a Link component from react-router-dom if applicable */}
              <Link
                to={"/login"}
                className="text-green-700 hover:text-green-900 font-semibold transition duration-150"
              >
                Log In
              </Link>
            </p>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="shrink mx-4 text-gray-400">
                Or Register With
              </span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            {/* Social Login (Google) */}
            <button
              type="button"
              onClick={handleGoogleRegistration}
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

export default Registration;
