"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import * as Portal from "@radix-ui/react-portal";

export default function Work(props) {
  const { shouldAnimate } = props;

  const jobs = [
    {
      role: "Sabbatical of sorts",
      organization: "",
      description:
        "Running an afterschool program for preschoolers, working at a restaurant, teaching myself how to make interactive graphics, and building out visual projects.",
      date: "September 2024 - Present",
    },
    {
      role: "Data Scientist",
      organization: "Quora",
      description:
        "Managed experimentation and research for multiple monetization workstreams. Oversaw experiments that increased company revenue by 10%. Set pricing for our new chat product, developed a revenue sharing system for content creators, and analyzed subscriber behavior to improve retention.",
      date: "November 2021 - September 2024",
    },
    {
      role: "Research Analyst",
      organization: "University of Chicago Energy & Environment Lab",
      description:
        "Partnered with state governments to evaluate environmental policies. Developed a randomized controlled trial to test a new approach to enforcing air quality standards in California. Built a supervised machine learning model to predict emissions leaks at oil and gas wells in Colorado, and better target the state's inspectors towards emitting wells.",
      date: "March 2019 - June 2021",
    },
    {
      role: "Research Fellow",
      organization: "University of Chicago Energy Policy Institute",
      description:
        "Researched topics in energy economics, using supervised machine learning, spatial data analysis, and regression models to investigate whether energy producers learn to innovate during periods of economic downturn.",
      date: "August 2018 - July 2019",
    },
    {
      role: "Research Assistant",
      organization: "Northwestern University Dept. of Economics",
      description:
        "Researched real-time electricity pricing and renewable energy policies in Spain, using large-scale data analysis to determine whether new policies had uneven distributional impacts on Spanish residential households.",
      date: "June 2017 - June 2018",
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsList}>
        {jobs.map((job, index) => (
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
              <em className={styles.projectDate}>{job.date}</em>
              <span className={`${styles.projectTitle} ${styles.noUnderline}`}>
                {job.role}
                {job.organization && `, ${job.organization}`}
              </span>
            </div>
            <a className={styles.projectDescription}>{job.description}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
