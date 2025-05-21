import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [hoverWork, setHoverWork] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [refName, inViewName] = useInView({ triggerOnce: false, threshold: 0.4 });
  const [refTitle, inViewTitle] = useInView({ triggerOnce: false, threshold: 0.4 });
  const [refParagraph, inViewParagraph] = useInView({ triggerOnce: false, threshold: 0.4 });
  const [refButtons, inViewButtons] = useInView({ triggerOnce: false, threshold: 0.4 });
  const [refImage, inViewImage] = useInView({ triggerOnce: false, threshold: 0.4 });

  const animateStyle = (inView, delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const s = {
    hero: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "2rem 1rem" : "4rem 6rem",
      background: "linear-gradient(to right, #f8f9fd, #f0f1ff)",
      minHeight: "100vh",
      flexDirection: isMobile ? "column" : "row",
    },
    left: {
      maxWidth: isMobile ? "100%" : "50%",
      width: "100%",
      marginBottom: isMobile ? "2rem" : 0,
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "center" : "flex-start",
      textAlign: isMobile ? "center" : "left",
    },
    name: {
      ...animateStyle(inViewName),
      color: "#333",
      fontSize: isMobile ? "1.4rem" : "1.6rem",
      fontWeight: 400,
      margin: 0,
    },
    title: {
      ...animateStyle(inViewTitle, 0.1),
      color: "#111",
      fontSize: isMobile ? "1.8rem" : "2.2rem",
      fontWeight: "bold",
      margin: "0.5rem 0",
    },
    paragraph: {
      ...animateStyle(inViewParagraph, 0.2),
      color: "#666",
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      lineHeight: 1.6,
      maxWidth: "480px",
    },
    buttons: {
      ...animateStyle(inViewButtons, 0.3),
      marginTop: "1.5rem",
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    buttonWrapper: {
      padding: "2px",
      borderRadius: "9999px",
      background: "linear-gradient(90deg, #667eea, #764ba2)",
      display: "inline-block",
    },
    button: (hovered) => ({
      padding: "0.6rem 1.8rem",
      borderRadius: "9999px",
      background: hovered
        ? "linear-gradient(to right, #667eea, #764ba2)"
        : "#fff",
      color: hovered ? "#fff" : "#000",
      border: "none",
      fontWeight: "600",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
    }),
    right: {
      maxWidth: isMobile ? "100%" : "45%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      height: isMobile ? "280px" : "300px",
      width: "auto",
      objectFit: "contain",
      ...animateStyle(inViewImage, 0.4),
    },
  };

  return (
    <section id="home" style={s.hero}>
      <div style={s.left}>
        <h1 ref={refName} style={s.name}>Hi, I’m Mishal V S</h1>
        <h2 ref={refTitle} style={s.title}>Cybersecurity Student | Front-End Developer</h2>
        <p ref={refParagraph} style={s.paragraph}>
          Aspiring to protect digital spaces by learning and applying core
          cybersecurity principles, ethical hacking, and network defense
          strategies. Currently sharpening my skills through projects and
          certifications.
        </p>
        <div ref={refButtons} style={s.buttons}>
          <span style={s.buttonWrapper}>
            <a
              href="mailto:mishalvs211003@gmail.com"
              style={s.button(hoverWork)}
              onMouseEnter={() => setHoverWork(true)}
              onMouseLeave={() => setHoverWork(false)}
            >
              Hire Me
            </a>
          </span>
        </div>
      </div>
      <div style={s.right}>
        <img ref={refImage} src="/photos/Home.png" alt="Avatar" style={s.avatar} />
      </div>
    </section>
  );
};

export default Hero;
