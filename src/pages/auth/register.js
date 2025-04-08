"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast

const Register = () => {
  const Router = useRouter(); 
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await axios.post("/api/auth/register", formData);
      toast.success("✅ Registration successful! Redirecting...");
  
      Router.push("/")
    } catch (err) {
      const errorMessage = err.response?.data?.message || "❌ Something went wrong!";
      toast.error(errorMessage);  // Show error toast
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <motion.div
            className="bg-white bg-opacity-80 p-6 rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-center text-teal-600">Processing...</p>
          </motion.div>
        </div>
      )}
      
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
            <Link
              href="/auth/login"
              className="text-teal-500 hover:underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
