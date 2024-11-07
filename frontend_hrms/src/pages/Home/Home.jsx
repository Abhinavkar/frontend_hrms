export default function Home() {

  return (
    <div style={{ padding: "20px" }}>

      <TableComponent title="Department"
      apiUrl="http://localhost:8000/employee/get-department-list/"
     / >
      
    </div>
  );
}
