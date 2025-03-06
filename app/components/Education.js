"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import * as Portal from "@radix-ui/react-portal";

export default function Education(props) {
  const { shouldAnimate } = props;

  const schools = [
    {
      school: "Northwestern University",
      description: (
        <>
          B.A. with Honors in Economics, Minors in Computer Science and
          Environmental Policy
          <br />
          <a
            href="https://www.ipr.northwestern.edu/documents/working-papers/2022/wp-22-23.pdf"
            className={styles.thesisLink}
          >
            Thesis: The Distributional Impacts of Real-Time Pricing in the
            Spanish Residential Electricity Market (subsequently developed into
            a working paper)
          </a>
        </>
      ),
      date: "Graduated June 2018",
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
              <em className={styles.projectDate}>{school.date}</em>
              <span className={`${styles.projectTitle} ${styles.noUnderline}`}>
                {school.school}
              </span>
            </div>
            <div className={styles.projectDescription}>
              {school.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
