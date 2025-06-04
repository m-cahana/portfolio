"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import * as Portal from "@radix-ui/react-portal";
import { getColorIndexer } from "../utils/colorIndexer";

export default function Projects({
  hoveredProject,
  setHoveredProject,
  shouldAnimate,
  currentTheme,
  isDarkMode,
  isLightMode,
}) {
  const getNextIndex = getColorIndexer(isDarkMode, isLightMode);

  const projects = [
    {
      title: "Animated Sketches",
      description:
        "A series of animated sketches experimenting with creative coding techniques.",
      path: "/sketches",
      date: "May 2025",
      skills: ["p5.js"],
      image: "/sketches.mov",
      isVideo: true,
    },
    {
      title:
        "Drivers Speed Through New York City's School Zones With No Limits (Featured in Streetsblog NYC)",
      description:
        "An interactive story on dangerous drivers in New York City's school zones, who rack up hundreds of speeding violations without ever losing their license.",
      path: "/nyc-camera-violations",
      date: "April 2025",
      skills: ["d3.js", "Svelte", "Python"],
      image: "/nyc_camera_violations_sky.jpeg",
    },
    {
      title:
        "What's the Trump Administration Trying to Erase Through Its DEI Purge?",
      description:
        "A systematic classification of all the websites the Pentagon purged as part of the Trump administration's campaign against DEI content.",
      path: "/pentagon-dei-purge",
      date: "March 2025",
      skills: ["d3.js", "Svelte", "Python"],
      image: "/pentagon_dei_purge.jpeg",
    },
    {
      title: "Deny and Demolish: Israel's Permitting System in the West Bank",
      description:
        "An interactive investigation into permitting in the West Bank, where Israeli settlements expand freely while Palestinian communities face systematic demolition.",
      path: "/west-bank-demolitions",
      date: "February 2025",
      skills: ["d3.js", "JavaScript", "Python"],
      image: "/west_bank_demolitions_updated.jpeg",
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
                  isLightMode
                    ? {}
                    : {
                        color: isDarkMode
                          ? currentTheme[1]
                          : currentTheme[getNextIndex()],
                      }
                }
              >
                {project.date}
              </em>
              <span
                className={styles.projectTitle}
                style={
                  isLightMode
                    ? {}
                    : {
                        color: isDarkMode
                          ? "#FFFFFF"
                          : currentTheme[getNextIndex()],
                      }
                }
              >
                {project.title}
              </span>
            </a>
            <a
              href={project.path}
              className={styles.projectDescription}
              style={{
                color: isDarkMode ? "#F5F5F5" : "inherit",
              }}
            >
              {project.description}
              {project.featured && (
                <span
                  className={styles.projectFeatured}
                  style={
                    isLightMode
                      ? {}
                      : {
                          color: isDarkMode
                            ? currentTheme[1]
                            : currentTheme[getNextIndex()],
                        }
                  }
                >
                  {" "}
                  Featured in {project.featured}
                </span>
              )}
            </a>
            <div className={styles.skillsList}>
              {project.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={styles.skillTag}
                  style={{
                    color: currentTheme[getNextIndex()],
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            {hoveredProject === index && (
              <Portal.Root>
                <div className={styles.projectImage}>
                  {project.isVideo ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      alt={project.title}
                    />
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>
              </Portal.Root>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
