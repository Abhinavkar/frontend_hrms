import React, { useState } from "react";
import  fetchToken from "./Helper";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function setCookie(access){
    document.cookie = `refresh=${access}`
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill out both fields.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), 
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {  
        localStorage.setItem("token", data.access);
        setCookie(data.access);
        // window.location.href = "/";
        alert("Login successful!");
      } else {
        alert(data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <button onClick={fetchToken}>Token Expiry Check </button>
      
    </div>
  );
};

export default LoginPage;
