import TableComponent from "../../components/Function";

export default function Employee() {
  
  return (
    <div style={{ padding: "20px"}}>

        <TableComponent title="Employee" apiUrl= 'http://127.0.0.1:8000/employee/list/'/>
    </div>
  );
}