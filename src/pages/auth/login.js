// "useClient"

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl  w-400 h-180 flex overflow-hidden">
        
        {/* Left - Welcome Section */}
        <motion.div 
          key={isRegistering ? "register" : "login"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={`flex-1 flex flex-col justify-center items-center text-white rounded-l-2xl transition-all duration-500 ${
            isRegistering ? "bg-purple-600" : "bg-teal-600"
          }`}
        >
          <h2 className="text-2xl font-bold">
            {isRegistering ? "Join Us Today!" : "Welcome Back"}
          </h2>
          <p className="mt-2 text-center px-6">
            {isRegistering 
              ? "Sign up and start your journey with us." 
              : "Login to continue learning and growing."}
          </p>
        </motion.div>

        {/* Right - Login Form */}
        <div className="flex-1 px-8 py-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            {isRegistering ? "Register" : "Login"}
          </h2>
          <p className="text-gray-500 text-center mt-2">
            {isRegistering ? "Create an account to get started." : "Enter your details to continue."}
          </p>

          <form className="mt-6">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mt-4 relative">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
            </div>

            {/* Toggle Register/Login */}
            <button className="mt-6 w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
            <button 
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-teal-500 hover:underline"
            >
              {isRegistering ? "Login" : "Register"}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
