import TableComponent from "../../components/Function";

 function Techstack() {
  
  return (
    <div style={{ padding: "20px"}}>
        <TableComponent title="Techstack" apiUrl= 'http://127.0.0.1:8000/employee/get-TechStack-list/'/>
    </div>
  );
}
export default Techstack