import TableComponent from "../../components/Function";

export default function Projects() {
  
  return (
    <div style={{ padding: "20px" }}>

        <TableComponent title="Projects" apiUrl= 'http://127.0.0.1:8000/project/get-projects/'/>
    </div>
  );
}