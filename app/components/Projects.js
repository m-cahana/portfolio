"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import * as Portal from "@radix-ui/react-portal";

export default function Projects({
  hoveredProject,
  setHoveredProject,
  shouldAnimate,
  currentTheme,
}) {
  let colorIndex = 0; // Start at 0
  const getNextIndex = () => {
    const current = colorIndex;
    colorIndex = (colorIndex + 1) % 6; // Increment and wrap around at 6
    return current;
  };

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
    <div className={styles.projectsContainer}>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectItem} ${
              shouldAnimate ? styles.fadeIn : ""
            }`}
            style={
              shouldAnimate ? { animationDelay: `${(index + 4) * 0.3}s` } : {}
            }
          >
            <a
              href={project.path}
              className={styles.projectHeader}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <em
                className={styles.projectDate}
                style={
                  currentTheme[0] === "#FFFFFF"
                    ? {}
                    : { color: currentTheme[getNextIndex()] }
                }
              >
                {project.date}
              </em>
              <span
                className={styles.projectTitle}
                style={
                  currentTheme[0] === "#FFFFFF"
                    ? {}
                    : { color: currentTheme[getNextIndex()] }
                }
              >
                {project.title}
              </span>
            </a>
            <a href={project.path} className={styles.projectDescription}>
              {project.description}
            </a>
            <div className={styles.skillsList}>
              {project.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={styles.skillTag}
                  style={
                    currentTheme[0] === "#FFFFFF"
                      ? {}
                      : { color: currentTheme[getNextIndex()] }
                  }
                >
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
  );
}
