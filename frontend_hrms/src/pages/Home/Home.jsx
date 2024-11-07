
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import TableComponent from "../../components/Function";
export default function Home(){
  return (
    <div style={{ padding: "20px" }}>

      <TableComponent title="Department"
      apiUrl="http://localhost:8000/employee/get-business-unit/"
     / >
    </div>
  );
}