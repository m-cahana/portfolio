"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import * as Portal from "@radix-ui/react-portal";
import { getColorIndexer } from "../utils/colorIndexer";

export default function Education({
  shouldAnimate,
  currentTheme,
  hoveredProject,
  setHoveredProject,
  isDarkMode,
  isLightMode,
}) {
  const getNextIndex = getColorIndexer(isDarkMode, isLightMode);
  const schools = [
    {
      school: "Northwestern University",
      degree: (
        <>
          B.A. with Honors in Economics, Minors in Computer Science and
          Environmental Policy
        </>
      ),
      thesis: (
        <a
          href="https://www.ipr.northwestern.edu/documents/working-papers/2022/wp-22-23.pdf"
          className={styles.thesisLink}
          onMouseEnter={() => setHoveredProject("thesis")}
          onMouseLeave={() => setHoveredProject(null)}
        >
          Thesis: The Distributional Impacts of Real-Time Pricing in the Spanish
          Residential Electricity Market (later developed into a working paper)
        </a>
      ),
      date: "Graduated June 2018",
      image: "/thesis.jpeg",
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsList}>
        {schools.map((school, index) => (
          <div
            key={index}
            className={`${styles.projectItem} ${
              shouldAnimate ? styles.fadeIn : ""
            }`}
            style={
              shouldAnimate ? { animationDelay: `${(index + 4) * 0.4}s` } : {}
            }
          >
            <div className={styles.projectHeader}>
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
                {school.date}
              </em>
              <span
                className={`${styles.projectTitle} ${styles.noUnderline}`}
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
                {school.school}
              </span>
            </div>
            <div
              className={styles.projectDescription}
              style={{
                color: isDarkMode ? "#F5F5F5" : "inherit",
              }}
            >
              {school.degree}
            </div>
            <div
              className={styles.projectDescription}
              style={
                isLightMode
                  ? {}
                  : {
                      color: currentTheme[getNextIndex()],
                    }
              }
            >
              {school.thesis}
            </div>
            {hoveredProject === "thesis" && (
              <Portal.Root>
                <div className={styles.projectImage}>
                  <img src={school.image} alt="Thesis Preview" />
                </div>
              </Portal.Root>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
