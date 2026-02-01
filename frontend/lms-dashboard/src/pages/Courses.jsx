import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then(res => setCourses(res.data));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "30px", flex: 1 }}>
        <h2>Courses</h2>

        {courses.map(course => (
          <div key={course._id} style={card}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const card = {
  background: "#0f172a",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "8px",
};

export default Courses;
