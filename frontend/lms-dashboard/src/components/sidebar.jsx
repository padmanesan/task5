import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaHome, FaBook, FaUserShield } from "react-icons/fa";

function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div style={sidebar}>
      <h2>LMS</h2>

      <Link to="/dashboard" style={link}><FaHome /> Dashboard</Link>
      <Link to="/courses" style={link}><FaBook /> Courses</Link>

      {user?.role === "admin" && (
        <Link to="/admin" style={link}>
          <FaUserShield /> Admin
        </Link>
      )}
    </div>
  );
}

const sidebar = {
  width: "220px",
  background: "#020617",
  padding: "20px",
  minHeight: "100vh",
};

const link = {
  display: "flex",
  gap: "10px",
  color: "#cbd5f5",
  textDecoration: "none",
  marginTop: "15px",
};

export default Sidebar;
