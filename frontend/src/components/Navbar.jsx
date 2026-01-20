import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Andy Plays Guitar</div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/tabs" style={styles.link}>Tabs</Link>
        <Link to="/videos" style={styles.link}>Videos</Link>
        <Link to="/blog" style={styles.link}>Blog</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#0d0d0d",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #d32f2f",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.25rem",
    fontWeight: "700",
    letterSpacing: "1px",
    color: "#fff",
    textTransform: "uppercase",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "0.2s ease",
  },
};
