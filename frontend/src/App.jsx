import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Student Management System</h1>

      <h2>Student List</h2>

      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Department: {student.department}</p>
        </div>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
