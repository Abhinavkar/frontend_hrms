import TableComponent from "../../components/Function";

export default function Skills() {
  
  return (
    <div style={{ padding: "20px" }}>

        <TableComponent title="Skills" apiUrl= 'http://127.0.0.1:8000/employee/get-skills-list/'/>
    </div>
  );
}