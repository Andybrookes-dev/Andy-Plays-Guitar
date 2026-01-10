import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#111", color: "#fff" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/tabs">Tabs</Link> |{" "}
      <Link to="/videos">Videos</Link> |{" "}
      <Link to="/blog">Blog</Link>
    </nav>
  );
}
