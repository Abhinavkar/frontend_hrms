import TableComponent from "../../components/Function";

export default function Department() {
  
  return (
    <div style={{ padding: "20px"}}>

        <TableComponent title="Department" apiUrl="http://127.0.0.1:8000/employee/get-department-list/"/>
    </div>
  );
}