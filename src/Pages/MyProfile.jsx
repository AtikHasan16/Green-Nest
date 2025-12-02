import React, { useContext } from "react";
import { toast } from "react-toastify";
import {
  FaUserEdit,
  FaEnvelope,
  FaUser,
  FaCamera,
  FaSpinner,
} from "react-icons/fa";
import { AuthContext } from "../Contexts/Context/AuthContext";
import { PiMemberOf } from "react-icons/pi";

const MyProfile = () => {
  // 2. --- Use your actual AuthContext here ---
  const { currentUser, updateUserProfile, deleteCurrentUser } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userPhoto = e.target.photoURL.value;
    // console.log(userName, userPhoto);

    updateUserProfile(userName, userPhoto, currentUser?.email)
      .then(() => {
        toast.success("Profile update successful");
      })
      .catch((error) => {
        console.log(error);

        toast.error(error.code);
      });
  };
  const handleDeleteAccount = () => {
    deleteCurrentUser()
      .then(() => {
        toast.info("Profile deleted successful");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <>
      <title>GreenNest - Profile</title>
      <div className=" md:p-10 flex items-center justify-center poppins ">
        <div className="md:border-4 border-green-800 rounded-4xl bg-white p-10 w-2xl">
          <h2 className="text-4xl font-bebas text-center text-green-800 mb-8">
            Green Nest Profile
          </h2>

          {/* Profile Display Section */}
          <div className=" flex flex-col gap-4 p-4 items-center mb-8 bg-green-50 rounded-2xl">
            {/* User Photo */}
            <figure className="w-24 h-24">
              <img
                src={currentUser?.photoURL}
                alt="User Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full border-2 border-green-800 shadow-md"
              />
            </figure>

            {/* User Info */}
            <div className="space-y-3">
              <p className=" font-bold text-gray-900 flex items-center justify-center">
                <FaUser size={24} className="mr-2 text-green-800" />{" "}
                {currentUser?.displayName}
              </p>
              <p className=" text-gray-600  flex items-center justify-center">
                <FaEnvelope size={24} className="mr-2 text-green-800" />{" "}
                {currentUser.email}
              </p>
              <p className="text-gray-500 pt-2 text-center">
                Member since : {currentUser?.metadata?.creationTime}
              </p>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-6 pb-4">
            <h2 className="text-2xl font-bold text-gray-900    flex items-center">
              <FaUserEdit className="mr-3 text-green-800" />
              My Profile Settings
            </h2>
            <p className="w-9/10 text-gray-400 pl-9 ">
              Change your user name and profile image by submitting the name and
              image url in the form below.
            </p>
          </div>

          {/* Profile Update Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Display Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3  border border-gray-300 rounded-lg placeholder-gray-400"
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div>
                <label
                  htmlFor="photoURL"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Photo URL
                </label>

                <input
                  id="photoURL"
                  type="url"
                  placeholder="Enter your picture link"
                  className="w-full p-3 border border-gray-300 rounded-lg placeholder-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-1 btn-block my-4 py-6">
              Update Profile
            </button>
          </form>
          <button
            onClick={handleDeleteAccount}
            type="button"
            className="btn btn-1 btn-block py-6"
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
// Note: Remove the MockAuthProvider when integrating into your actual app.
