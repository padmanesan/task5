import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

function Admin() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const addCourse = async () => {
    await api.post("/courses", { title, description });
    setTitle("");
    setDescription("");
    loadCourses();
  };

  const deleteCourse = async (id) => {
    await api.delete(`/courses/${id}`);
    loadCourses();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "30px", flex: 1 }}>
        <h2>Admin – Course Management</h2>

        <input
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addCourse}>Add Course</button>

        <hr />

        {courses.map((c) => (
          <div key={c._id} style={card}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <button onClick={() => deleteCourse(c._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const card = {
  background: "#0f172a",
  padding: "15px",
  marginTop: "10px",
  borderRadius: "6px",
};

export default Admin;
