import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-title"
        >
          Andy Plays Guitar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hero-subtitle"
        >
          Tabs • Videos • Creativity • Noise
        </motion.p>
      </section>

      {/* FEATURE CARDS */}
      <section className="card-grid">
        <FeatureCard
          title="Tabs"
          text="Browse guitar tabs arranged by difficulty and style."
        />
        <FeatureCard
          title="Videos"
          text="Watch lessons, breakdowns, and play-throughs."
        />
        <FeatureCard
          title="Blog"
          text="Read posts about technique, gear, and creativity."
        />
        <FeatureCard
          title="Shop"
          text="Purchase guitars, amplifiers, and accessories."
        />
      </section>

    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}
