import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Register</h2>
        <p className="text-gray-500 text-center mt-2">Create your account to get started.</p>

        <form className="mt-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="mt-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button className="mt-6 w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
