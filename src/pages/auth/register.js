"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/register", formData);
      setSuccess("✅ Registration successful! Redirecting...");

      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-400 h-180 flex overflow-hidden">
        {/* Left - Welcome */}
        <motion.div
          key="register"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col justify-center items-center text-white rounded-l-2xl bg-purple-600"
        >
          <h2 className="text-2xl font-bold">Join Us Today!</h2>
          <p className="mt-2 text-center px-6">
            Sign up and start your journey with us.
          </p>
        </motion.div>

        {/* Right - Form */}
        <div className="flex-1 px-8 py-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Register</h2>
          <p className="text-gray-500 text-center mt-2">Create an account to get started.</p>

          {/* Feedback */}
          {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-4 text-center">{success}</p>}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-2 p-3 text-gray-400 border rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 p-3 text-gray-400 border rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full mt-2 p-3 text-gray-400 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer mt-4 w-full py-3 rounded-lg font-semibold text-white-500 transition ${
                loading ? "text-teal-500 cursor-not-allowed bg-purple-500" : "bg-purple-500 hover:bg-purple-600"
              }`}
            >
              {loading ? "Processing..." : "Register"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-teal-500 hover:underline cursor-pointer"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
