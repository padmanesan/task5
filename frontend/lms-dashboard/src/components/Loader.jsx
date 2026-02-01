import { motion } from "framer-motion";

function Loader() {
  return (
    <div style={container}>
      <motion.div
        style={spinner}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p style={{ marginTop: "10px", color: "#94a3b8" }}>
        Loading, please wait...
      </p>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#020617",
};

const spinner = {
  width: "45px",
  height: "45px",
  border: "5px solid #1e293b",
  borderTop: "5px solid #6366f1",
  borderRadius: "50%",
};

export default Loader;
