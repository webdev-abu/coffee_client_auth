import React, { useContext } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };
        // Save NewUser instance
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User create to Database successfully !", data);
            if (data.insertedId) {
              //   alert("User created successfully");
              Swal.fire({
                title: "success!",
                text: "User created successfully !",
                icon: "success",
                confirmButtonText: "Cool",
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.error("error creating user", error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h1>
        <form className="space-y-4" onSubmit={handleSignUp}>
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Full Name</span>
            </label>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="input input-bordered pl-10 w-full"
              />
            </div>
          </div>

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

          {/* Signup Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="divider">OR</div>

        {/* Google Signup Button */}
        <button
          onClick={""}
          className="btn btn-outline w-full flex items-center justify-center"
        >
          <FaGoogle className="mr-2 text-red-500" />
          Sign up with Google
        </button>

        {/* Already have an account? */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to={"/signin"} className="link link-primary font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
