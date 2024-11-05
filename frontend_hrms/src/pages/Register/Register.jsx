import React, { useEffect, useState } from "react";
import './Register.css'; 

const HRUserRegistration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(""); 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const fetchDepartments = async () => {
    try {
      const response = await fetch("http://localhost:8000/employee/get-department-list/");
      if (!response.ok) {
        throw new Error("Failed to fetch departments");
      }
      const data = await response.json();
      setDepartments(data); 
    } catch (error) {
      console.error("Error fetching departments:", error);
      setError("An error occurred while fetching departments.");
    }
  };

  useEffect(() => {
    fetchDepartments(); 
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:8000/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          department: selectedDepartment, 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("HR user registered successfully. Please check your email for details.");
        setUsername("");
        setEmail("");
        setPassword("");
        setSelectedDepartment(""); 
        window.location.href="./login"
      } else {
        setError(data.error || "User registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
      <h2>HR User Registration</h2>
      <form onSubmit={handleRegister} className="form">
        <div className="inputGroup">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label>Department:</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            required
            className="input"
          >
            <option value="">Select a department</option>
            {departments.map((department) => (
              <option key={department.dept_id} value={department.dept_id}>
                {department.dept_name} 
              </option>
            ))}
          </select>
        </div>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default HRUserRegistration;
