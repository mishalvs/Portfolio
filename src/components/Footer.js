import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const styles = {
  wrapper: {
    backgroundColor: "#0f0f0f",
    color: "#e5e7eb",
    padding: "2rem 1.5rem",
    borderTop: "1px solid #1f2937",
  },
  container: {
    maxWidth: "72rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "1.5rem",
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#a78bfa", // light purple
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    fontSize: "1.5rem",
  },
  iconBase: {
    color: "#9ca3af",
    transition: "color 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
  },
  iconHover: {
    color: "#a78bfa",
    transform: "scale(1.1)",
  },
  bottomText: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
};

const socialLinks = [
  {
    href: "https://instagram.com/_mishal_vs_/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/mishalvs/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/mishalvs/",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "mailto:mishalvs211003@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
];

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <footer style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.name}>Mishal V S</div>

        <div style={styles.socialIcons}>
          {socialLinks.map((item, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                style={{
                  ...styles.iconBase,
                  ...(isHovered ? styles.iconHover : {}),
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.icon}
              </a>
            );
          })}
        </div>

        <p style={styles.bottomText}>© 2025 Mishal V S. All rights reserved.</p>
      </div>
    </footer>
  );
}
