import React, { useContext } from "react";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // API call to authenticate user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:3000/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Sign in info updated in Database", data);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const signInWithGoogle = () => {
    // Your Google Sign In logic here
    console.log("Your Google Sign In logic");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Log In</h1>
        <form className="space-y-4" onSubmit={handleSignIn}>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Email</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered pl-10 w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Password</span>
            </label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered pl-10 w-full"
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Log In
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="divider">OR</div>

        {/* Google Login Button */}
        <button
          onClick={signInWithGoogle}
          className="btn btn-outline w-full flex items-center justify-center"
        >
          <FaGoogle className="mr-2 text-red-500" />
          Sign in with Google
        </button>

        {/* Forgot Password & Sign Up */}
        <div className="text-center mt-4">
          <Link to={"/"} className="link link-primary text-sm">
            Forgot Password?
          </Link>
          <p className="text-sm mt-2">
            Don't have an account?{" "}
            <Link to={"/signup"} className="link link-primary font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
