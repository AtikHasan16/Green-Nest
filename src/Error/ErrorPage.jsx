import React from "react";
import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();

  return (
    <div className="poppins bg-linear-to-br from-gray-50 via-green-50 to-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Error Container */}
        <div className="text-center">
          {/* Large Error Number with Animation */}
          <div className="mb-8">
            <h1 className="font-bebas text-9xl md:text-10xl font-bold bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-2">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="font-bebas text-4xl md:text-5xl text-green-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            It seems like this page has wilted away or doesn't exist in our
            garden. Don't worry, let's get you back on track!
          </p>

          {/* Error Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-2 border-green-100">
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-semibold text-green-700">
                What went wrong?
              </span>
            </p>
            <ul className="text-gray-600 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                The page you're looking for doesn't exist
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                The URL might have been typed incorrectly
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                The page might have been moved or deleted
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => navigate(-1)}
              className="btn bg-green-800 text-white btn-lg rounded-lg"
            >
              ← Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="btn bg-green-800 text-white btn-lg rounded-lg"
            >
              Back to Home →
            </button>
          </div>

          {/* Footer Message */}
          <p className="text-rose-500 text-sm mt-8">
            {`Error code 404 || ${error.message || error.data}`}
          </p>
          <p className="text-gray-500 text-sm my-2">
            Contact us at support@greenearth.com if you need help
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
