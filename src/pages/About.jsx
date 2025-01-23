import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "black", // Full-page dark background
        color: "#FFFFFF", // White text for contrast
        minHeight: "100vh", // Takes up full viewport height
        display: "flex", // Flexbox for centering content
        justifyContent: "center", // Centers content horizontally
        alignItems: "center", // Centers content vertically
        padding: "40px", // Adds padding around the content for mobile
        textAlign: "center", // Centers the text for a balanced look
      }}
    >
      <div
        // style={{
        //   maxWidth: "900px", // Max width to keep the text readable on large screens
        //   padding: "20px", // Adds padding to the content for spacing
        //   borderRadius: "10px", // Softens the edges of the content
        //   backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for a card effect
        // }}
      >
        <h1
          style={{
            fontSize: "3rem", // Large heading for impact
            marginBottom: "20px", // Space below heading
            color: "Blue", // Highlighted heading color
          }}
        >
          About Us
        </h1>
        <p style={styles.paragraph}>
          At Nice Dent, we are dedicated to enhancing dental practices by
          providing high-quality refurbished dental chairs and equipment. With
          years of experience in the industry, we understand the importance of
          reliable and comfortable dental equipment for both patients and
          professionals. Our mission is to offer cost-effective solutions
          without compromising on quality or performance.
        </p>

        <p style={styles.paragraph}>
          We specialize in refurbishing dental chairs and equipment to the
          highest standards, ensuring they meet the rigorous demands of modern
          dental care. By carefully restoring and upgrading each piece, we help
          dental clinics access premium equipment at a fraction of the cost of
          new purchases.
        </p>

        <p style={styles.paragraph}>
          Our team of skilled technicians uses state-of-the-art technology and
          superior craftsmanship to bring worn or outdated equipment back to
          life. We meticulously test and inspect every unit to ensure it
          operates like new, giving our clients peace of mind and confidence in
          the equipment they use.
        </p>

        <p style={styles.paragraph}>
          At Nice Dent, sustainability is at the core of what we do.
          Refurbishing dental chairs and equipment not only saves resources but
          also reduces environmental impact. We are proud to support
          eco-friendly practices in the dental industry, making top-tier dental
          care more accessible and sustainable.
        </p>

        <p style={styles.paragraph}>
          Our commitment to quality, value, and customer satisfaction has earned
          us the trust of dental professionals worldwide. Whether you’re looking
          to upgrade your practice or replace older equipment, Nice Dent is here
          to provide solutions that meet your unique needs.
        </p>

        <p style={styles.paragraph}>
          Let us help you create a more efficient, comfortable, and sustainable
          dental practice with our expertly refurbished dental chairs and
          equipment.
        </p>
      </div>
    </div>
  );
};

// Inline Styles for Full Page Dark Theme
const styles = {
  // page: {
  //   backgroundColor: "#2C2C2C", // Full-page dark background
  //   color: "#FFFFFF", // White text for contrast
  //   minHeight: "100vh", // Takes up full viewport height
  //   display: "flex", // Flexbox for centering content
  //   justifyContent: "center", // Centers content horizontally
  //   alignItems: "center", // Centers content vertically
  //   padding: "40px", // Adds padding around the content for mobile
  //   textAlign: "center", // Centers the text for a balanced look
  // },
  // content: {
  //   maxWidth: "900px", // Max width to keep the text readable on large screens
  //   padding: "20px", // Adds padding to the content for spacing
  //   borderRadius: "10px", // Softens the edges of the content
  //   backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for a card effect
  // },
  // heading: {
  //   fontSize: "3rem", // Large heading for impact
  //   marginBottom: "20px", // Space below heading
  //   color: "Blue", // Highlighted heading color
  // },
  paragraph: {
    fontSize: "1.2rem", // Larger font for readability
    lineHeight: "1.8", // More space between lines for readability
    marginBottom: "20px", // Space between paragraphs
  },
};

export default About;
