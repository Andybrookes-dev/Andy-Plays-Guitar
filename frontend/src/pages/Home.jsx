import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section style={styles.hero}>
        <h1 style={styles.title}>Andy Plays Guitar</h1>
        <p style={styles.subtitle}>Tabs • Lessons • Blog</p>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Tabs</h2>
          <p style={styles.cardText}>Browse guitar tabs arranged by difficulty and style.</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Videos</h2>
          <p style={styles.cardText}>Watch lessons, breakdowns, and play‑throughs.</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Blog</h2>
          <p style={styles.cardText}>Read posts about technique, gear, and creativity.</p>
        </div>
      </section>
    </Layout>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.25rem",
    opacity: 0.85,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2rem",
  },
  card: {
    padding: "1.75rem",
    background: "#1a1a1a",
    borderRadius: "6px",
    border: "1px solid #2a2a2a",
    boxShadow: "0 4px 10px rgba(0,0,0,0.45)",
    transition: "0.25s ease",
    cursor: "pointer",
  },
  cardTitle: {
    marginBottom: "0.5rem",
    fontSize: "1.5rem",
    color: "#d32f2f", // rock red accent
  },
  cardText: {
    opacity: 0.85,
    lineHeight: "1.5",
  },
};
