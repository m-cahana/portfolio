"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Deny and Demolish: Israel's Permitting Regime in the West Bank",
      description:
        "An interactive investigation into Israel's discriminatory permitting system in the West Bank, which is being leveraged to expand Israeli settlements and demolish Palestinian homes.",
      path: "/west-bank-demolitions",
      date: "February 2025",
      image: "/west_bank_demolitions.jpeg",
    },
    {
      title: "Drivers Are Speeding Through New York City's School Zones",
      description:
        "An interactive story on drivers who speed through New York City's school zones hundreds of times a year without getting taken off the road.",
      path: "/nyc-camera-violations",
      date: "January 2025",
      image: "/nyc_camera_violations.jpeg",
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${styles.fadeIn}`}>Michael Cahana</h1>
          <p className={`${styles.text} ${styles.fadeIn} ${styles.delay1}`}>
            I&apos;m an aspiring data journalist and web designer, with a
            background in research and data science. I make interactive graphics
            to tell stories I consider important and underlooked. You can reach
            me at cahanamichael@gmail.com.
          </p>
        </div>

        <div className={styles.projectsContainer}>
          <h2
            className={`${styles.projectsTitle} ${styles.fadeIn} ${styles.delay2}`}
          >
            Projects
          </h2>
          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.projectItem} ${styles.fadeIn}`}
                style={{ animationDelay: `${(index + 4) * 0.4}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <a href={project.path} className={styles.projectHeader}>
                  <em className={styles.projectDate}>{project.date}</em>
                  <span className={styles.projectTitle}>{project.title}</span>
                </a>
                <a href={project.path} className={styles.projectDescription}>
                  {project.description}
                </a>
                {hoveredProject === index && (
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
