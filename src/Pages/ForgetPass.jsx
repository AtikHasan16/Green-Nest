import React, { useContext } from "react";
import { AuthContext } from "../Contexts/Context/AuthContext";
import { Link, useLocation } from "react-router";
import { toast } from "react-toastify";
import { BiArrowBack, BiEnvelope } from "react-icons/bi";

const ForgetPass = () => {
  const { passReset, setLoading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location.state);
  const handleResetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    passReset(email)
      .then(() => {
        toast.success("An Email sent to your Gmail");
        setLoading(false);
        e.target.reset();
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error(error.code);
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100dvh-300px)] poppins">
      <div className="bg-white rounded-2xl w-xl p-6 space-y-4 sm:shadow-2xl ">
        <Link to={"/login"}>
          <BiArrowBack size={26} className="text-green-800"></BiArrowBack>
        </Link>
        <h1 className="font-bebas text-4xl text-green-800 text-center my-5">
          Reset Your Password
        </h1>
        <form onSubmit={handleResetPass} className="space-y-4">
          <div className="relative">
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
              defaultValue={location.state ? location.state : ""}
              placeholder="Enter your valid Email here"
              required
              className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400 "
            />
            <BiEnvelope
              size={24}
              className="absolute bottom-3 right-4 text-gray-500"
            ></BiEnvelope>
          </div>

          <button type="submit" className="btn btn-block btn-1 py-6 my-2 ">
            Reset Now
          </button>
        </form>
        <p className="w-8/10 text-gray-500">
          {" "}
          Note : Please double check your Email. Mail can go to your spam
          folder.
        </p>
      </div>
    </div>
  );
};

export default ForgetPass;
