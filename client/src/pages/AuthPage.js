import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-[400px]">
        <h1 className="text-3xl font-extrabold mb-6 text-center">
          {isRegistering ? "Create Account" : "Welcome Back"}
        </h1>

        {isRegistering ? <Register /> : <Login />}

        <div className="mt-6 text-center text-sm text-gray-400">
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsRegistering(false)}
                className="text-blue-400 hover:underline"
              >
                Log In
              </button>
            </>
          ) : (
            <>
              Not a user?{" "}
              <button
                onClick={() => setIsRegistering(true)}
                className="text-blue-400 hover:underline"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
