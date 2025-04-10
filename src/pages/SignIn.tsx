import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    setLoading(true);
    try {
      const user = await login(email, password);
      console.log("User logged in:", user);

      if (user) {
        alert("Login successful! 🎉");
        navigate("/dashboard"); // Redirect after login
      } else {
        alert("Login failed. No user found.");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
        alert(error.message);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred");
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/create-account" className="text-blue-500 font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
