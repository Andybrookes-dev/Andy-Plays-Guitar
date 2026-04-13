import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";
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
    image="/assets/tabs.jpeg"
    to="/tabs"
  />

  <FeatureCard
    title="Videos"
    text="Watch lessons, breakdowns, and play-throughs."
    to="/videos"
  />

  <FeatureCard
    title="Blog"
    text="Read posts about technique, gear, and creativity."
    to="/blog"
  />

  <FeatureCard
    title="Shop"
    text="Purchase guitars, amplifiers, and accessories."
    to="/shop"
  />
  <FeatureCard
    title="Newsletter"
    text="Subscribe to our monthly newsletter."
    to="/newsletter"
  />
</section>


    </div>
  );
}


function FeatureCard({ title, text, image, to }) {
  return (
    <Link to={to} className="card-link">
      <motion.div
        className="card"
        whileHover={{ scale: 1.05, y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {image && <img src={image} alt={title} className="card-image" />}
        <h2>{title}</h2>
        <p>{text}</p>
      </motion.div>
    </Link>
  );
}


