"use client";

import styles from "./page.module.css";
import { useState } from "react";
import * as Portal from "@radix-ui/react-portal";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Deny and Demolish: Israel's Permitting System in the West Bank",
      description:
        "An interactive investigation into permitting in the West Bank, where Israeli settlements expand freely while Palestinian communities face systematic demolition.",
      path: "/west-bank-demolitions",
      date: "February 2025",
      skills: ["d3.js", "JavaScript", "HTML", "CSS", "Python"],
      image: "/west_bank_demolitions.jpeg",
    },
    {
      title:
        "Drivers Speed Through New York City's School Zones With No Limits",
      description:
        "An interactive story on dangerous drivers in New York City's school zones, who rack up hundreds of speeding violations without ever losing their license.",
      path: "/nyc-camera-violations",
      date: "January 2025",
      skills: ["d3.js", "JavaScript", "HTML", "CSS", "Python"],
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
            background in economic research and data science. I make interactive
            graphics to tell stories that feel important and overlooked.
            I&apos;m open to collaboration and freelance work, and you can reach
            me at{" "}
            <a href="mailto:cahanamichael@gmail.com">cahanamichael@gmail.com</a>
            .
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
                <div className={styles.skillsList}>
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
                {hoveredProject === index && (
                  <Portal.Root>
                    <div className={styles.projectImage}>
                      <img src={project.image} alt={project.title} />
                    </div>
                  </Portal.Root>
                )}
              </div>
            ))}
          </div>
        </div>
        <Analytics />
      </main>
    </div>
  );
}
