import TableComponent from "../../components/Function";

export default function Roles() {
  
  return (
    <div style={{ padding: "20px", display: "flex" }}>

        <TableComponent title="Roles" apiUrl="http://127.0.0.1:8000/employee/get-roles-list/"/>
    </div>
  );
}