"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import * as Portal from "@radix-ui/react-portal";
import { getColorIndexer } from "../utils/colorIndexer";

export default function Work({
  shouldAnimate,
  currentTheme,
  isDarkMode,
  isLightMode,
}) {
  const getNextIndex = getColorIndexer(isDarkMode, isLightMode);
  const jobs = [
    {
      role: "Sabbatical",
      organization: "",
      description:
        "Running an afterschool program for preschoolers, working at a restaurant, teaching myself how to make interactive graphics, and building visual projects.",
      date: "September 2024 - Present",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "d3.js",
        "React",
        "Next.js",
        "Svelte",
        "Python",
      ],
    },
    {
      role: "Data Scientist",
      organization: "Quora",
      description:
        "Managed experimentation and research for multiple monetization workstreams, increasing revenue for the core Quora product, and developing a subscription system for Poe, the company's new chat product.",
      date: "November 2021 - September 2024",
      skills: [
        "Python",
        "SQL",
        "Experimentation",
        "Empirical Research",
        "Metric Design",
        "Reporting Infrastructure",
        "Data Pipelines",
        "Dashboards",
        "Project Sizing and Impact Estimation",
      ],
    },
    {
      role: "Research Analyst",
      organization: "University of Chicago Energy & Environment Lab",
      description:
        "Partnered with state governments to evaluate environmental policies. Developed a randomized controlled trial to test novel enforcement of air quality standards in California, and built a model to predict emissions leaks at oil and gas wells in Colorado, better targeting the state's inspectors towards emitting wells.",
      date: "March 2019 - June 2021",
      skills: [
        "R",
        "Experimentation",
        "Supervised Machine Learning",
        "Spatial Data Analysis",
        "Regression Modeling",
        "Project & Staff Management",
        "Data Visualization",
        "Grant & Paper Writing",
      ],
    },
    {
      role: "Research Fellow",
      organization: "University of Chicago Energy Policy Institute",
      description:
        "Researched topics in energy economics, using supervised machine learning, spatial data analysis, and regression models to investigate whether energy producers learn to innovate during periods of economic downturn.",
      date: "August 2018 - July 2019",
      skills: [
        "R",
        "Supervised Machine Learning",
        "Spatial Data Analysis",
        "String Cleaning",
        "Regression Modeling",
        "Data Visualization",
      ],
    },
    {
      role: "Research Assistant",
      organization: "Northwestern University Department of Economics",
      description:
        "Researched real-time electricity pricing and renewable energy policies in Spain, using large-scale data analysis to determine whether new policies had uneven distributional impacts on Spanish residential households.",
      date: "June 2017 - June 2018",
      skills: [
        "Python",
        "Parallel Computing",
        "Unsupervised Machine Learning",
        "Data Scraping",
        "Simulation Analysis",
        "Data Visualization",
        "Teaching",
      ],
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
              shouldAnimate ? { animationDelay: `${(index + 4) * 0.3}s` } : {}
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
                {job.date}
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
                {job.role}
                {job.organization && `, ${job.organization}`}
              </span>
            </div>
            <a
              className={styles.projectDescription}
              style={{
                color: isDarkMode ? "#F5F5F5" : "inherit",
              }}
            >
              {job.description}
            </a>
            <div className={styles.skillsList}>
              {job.skills.map((skill, skillIndex) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}
