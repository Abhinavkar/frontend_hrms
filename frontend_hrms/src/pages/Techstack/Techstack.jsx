import TableComponent from "../../components/Function";

export default function Techstack() {
  
  return (
    <div style={{ padding: "20px", display: "flex" }}>

        <TableComponent title="Techstack" apiUrl= 'http://127.0.0.1:8000/employee/get-TechStack-list/'/>
    </div>
  );
}