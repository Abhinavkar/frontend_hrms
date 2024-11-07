import TableComponent from "../../components/Function";

export default function Bu() {
  
  return (
    <div style={{ padding: "20px"}}>

        <TableComponent title="BusinessUnit" apiUrl="http://127.0.0.1:8000/employee/get-business-unit/"/>
    </div>
  );
}