import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200); // simulate API load
  }, []);

  if (loading) return <Loader />;

  const data = [
    { week: "W1", progress: 20 },
    { week: "W2", progress: 40 },
    { week: "W3", progress: 60 },
    { week: "W4", progress: 75 },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "30px", flex: 1 }}>
        <h1>Welcome, {user?.name}</h1>
        <p>Role: {user?.role}</p>

        <h3>Learning Progress</h3>
        <LineChart width={400} height={250} data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line dataKey="progress" stroke="#6366f1" />
        </LineChart>

        <button onClick={() => { logout(); navigate("/login"); }}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
