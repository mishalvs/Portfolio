import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with React, showcasing my projects, skills, and experience with smooth animations and a modern UI.",
    img: "/photos/portfolio.jpg",
    link: "https://github.com/mishalvs/My-Internship-Project/tree/main/E-Commerce%20Website",
  },
  {
    title: "CrowdMint",
    description:
      "A decentralized crowdfunding platform built using Solidity, Web3, and Next.js.",
    img: "/photos/Crowdmint.jpg",
    link: "https://github.com/mishalvs/CrowdMint",
  },
  {
    title: "LAN Intrusion Detection System",
    description:
      "A network security tool that monitors and flags unauthorized or suspicious LAN activity.",
    img: "/photos/LAN.jpg",
    link: "https://github.com/mishalvs/LAN-Intrusion_Alert",
  },
  {
    title: "Fake Instagram Profile Detection",
    description:
      "Machine learning model that detects fake Instagram profiles based on activity metrics.",
    img: "/photos/Instagram.jpg",
    link: "https://github.com/NaveenShaji742/InstagramFakeProfileDetection",
  },
  {
    title: "Business Frontend Website",
    description:
      "A responsive, animated business landing page developed using React and Tailwind CSS.",
    img: "/photos/Business.jpg",
    link: "https://github.com/mishalvs/My-Internship-Project/tree/main/Business%20Website",
  },
  {
    title: "E-Commerce Frontend",
    description:
      "Modern e-commerce UI developed in React with product filtering, cart, and animations.",
    img: "/photos/e-commerce.jpg",
    link: "https://github.com/mishalvs/My-Internship-Project/tree/main/E-Commerce%20Website",
  },
];

const styles = {
  section: {
    backgroundColor: "#f9fafb",
    padding: "4rem 2rem",
    color: "#111827",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  headerText: {
    color: "#3B82F6",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    fontWeight: 600,
    letterSpacing: 1,
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "1rem",
    color: "#111827",
  },
  subtitle: {
    color: "#374151",
    textAlign: "center",
    marginBottom: "3rem",
    fontSize: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  content: {
    padding: "1.5rem",
    flexGrow: 1,
  },
  projectTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#111827",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1rem",
    color: "#4B5563",
    marginBottom: "1.5rem",
    lineHeight: 1.4,
  },
  link: {
    color: "#3B82F6",
    fontWeight: 600,
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};

export default function Projects() {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };
  const handleLinkEnter = (e) => {
    e.target.style.color = "#2563EB";
  };
  const handleLinkLeave = (e) => {
    e.target.style.color = "#3B82F6";
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section style={styles.section} id="projects">
      <div style={styles.container}>
        <p style={styles.headerText}>Projects</p>
        <h2 style={styles.title}>What I've Built</h2>
        <p style={styles.subtitle}>
          Explore a few of my hands-on software and cybersecurity projects.
        </p>

        <div style={styles.grid}>
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              style={styles.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
            >
              <img src={proj.img} alt={proj.title} style={styles.image} />
              <div style={styles.content}>
                <h3 style={styles.projectTitle}>{proj.title}</h3>
                <p style={styles.description}>{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                  onMouseEnter={handleLinkEnter}
                  onMouseLeave={handleLinkLeave}
                >
                  View project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
