import { useState } from "react";
import { login } from "../../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      console.log("User logged in:", user);
      alert("Login successful!");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
        alert(error.message);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
