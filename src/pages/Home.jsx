import { useState } from "react";
import money from "../assets/icons/money.png";
import highQuality from "../assets/icons/high.png";
import sustainable from "../assets/icons/planet-earth.png";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        color: "black",
        fontFamily: "Arial, sans-serif",
        padding: "15px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundColor: "#0e3d75",
          color: "#FFFFFF",
          borderRadius: "10px",
          marginBottom: "40px",
        }}
      >
        <h1 style={styles.title}>Welcome to Nice Dent</h1>
        <p style={styles.subtitle}>
          Your trusted partner for refurbished dental equipment.
        </p>
      </div>

      <div style={styles.featuresSection}>
        <h2 style={styles.featuresHeading}>Why Choose Us?</h2>
        <div style={styles.features}>
          <div style={styles.feature}>
            <img
              src={highQuality}
              alt="High Quality"
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>High Quality</h3>
            <p style={styles.featureDescription}>
              We provide top-quality refurbished dental equipment that meets the
              standards of modern dental care.
            </p>
          </div>

          <div style={styles.feature}>
            <img
              src={money}
              alt="Affordable"
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>Affordable</h3>
            <p style={styles.featureDescription}>
              Our solutions are cost-effective, giving you premium equipment at
              a fraction of the price.
            </p>
          </div>

          <div style={styles.feature}>
            <img
              src={sustainable}
              alt="Sustainable"
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>Sustainable</h3>
            <p style={styles.featureDescription}>
              Refurbishing dental equipment helps reduce environmental impact
              while saving resources.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.ctaSection}>
        <h2 style={styles.ctaHeading}>Get Started Today</h2>
        <p style={styles.ctaDescription}>
          Join hundreds of dental professionals who trust Nice Dent for their
          equipment needs.
        </p>

        <a href="/contact" // External or internal URL
          style={
            isHovered
              ? { ...styles.ctaButton, ...styles.ctaButtonHover }
              : styles.ctaButton
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

// Inline styles for the Home page
const styles = {
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  ctaButton: {
    padding: "15px 30px",
    backgroundColor: "green",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  featuresSection: {
    textAlign: "center",
    marginBottom: "60px",
  },
  featuresHeading: {
    fontSize: "2.5rem",
    marginBottom: "30px",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  feature: {
    width: "300px",
    padding: "20px",
    textAlign: "center",
  },
  featureImage: {
    width: "150px",
    height: "150px",
    marginBottom: "20px",
    borderRadius: "5px"
  },
  featureTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
  },
  featureDescription: {
    fontSize: "1rem",
    color: "#555",
  },
  ctaSection: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#0e3d75",
    color: "#f0f0f0",
    borderRadius: "10px",
  },
  ctaHeading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  ctaDescription: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
};

export default Home;
