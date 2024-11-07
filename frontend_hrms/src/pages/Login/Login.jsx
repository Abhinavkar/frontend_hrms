import React, { useState } from "react";
import fetchToken from "/src/components/Helper";
import "./Login.css";
import { Route } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function setCookie(refreshToken) {
    document.cookie = `refresh=${refreshToken}; path=/; SameSite=Lax; Secure`;
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
        setCookie(data.refresh); // Use refresh token
        setUsername(""); // Clear username
        setPassword(""); // Clear password
        alert("Login successful!");
        window.location.href="./home"
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
      <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input class = "input-field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input class = "input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button class = "login-button" type="submit">Login</button>
      </form>
      </div>
      {/* <button onClick={async () => await fetchToken()}>Token Expiry Check</button> */}
    </div>
  );
};

export default LoginPage;
