import React, { useEffect } from "react";
import Card from "./Components/Card.jsx";
import axios from "axios";

function App() {
  const [students, setStudents] = React.useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/about").then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <div className="card-container">
        {students.map((student, index) => (
          <Card key={index} name={student.name} age={student.age} />
        ))}
      </div>
    </div>
  );
}

export default App;