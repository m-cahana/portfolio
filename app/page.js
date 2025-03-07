"use client";

import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import styles from "./page.module.css";
import { Tabs, Tab, Box } from "@mui/material";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";
import { themes } from "./components/ThemeSwitcher";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && children}
    </div>
  );
}

// Helper function to add opacity to hex colors
const addOpacity = (hexColor, opacity) => {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Return rgba string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [shouldAnimateProjects, setShouldAnimateProjects] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes[0].colors); // Use first theme from the array

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setShouldAnimateProjects(false);
  };

  const handleThemeChange = (colors) => {
    setCurrentTheme(colors);
  };

  const backgroundOpacity = 1;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1
              className={`${styles.title} ${styles.fadeIn}`}
              style={{
                color:
                  currentTheme[0] === "#FFFFFF"
                    ? "black"
                    : addOpacity(currentTheme[0], backgroundOpacity),
              }}
            >
              Michael Cahana
            </h1>
            <div className={`${styles.fadeIn} ${styles.delaySwitcher}`}>
              <ThemeSwitcher onThemeChange={handleThemeChange} />
            </div>
          </div>
          <p className={`${styles.text} ${styles.fadeIn} ${styles.delay1}`}>
            I&apos;m a{" "}
            <span
              style={{
                fontWeight: 500,
                color:
                  currentTheme[0] === "#FFFFFF"
                    ? "black"
                    : addOpacity(currentTheme[0], backgroundOpacity),
              }}
            >
              data scientist
            </span>
            ,{" "}
            <span
              style={{
                fontWeight: 500,
                color:
                  currentTheme[0] === "#FFFFFF"
                    ? "black"
                    : addOpacity(currentTheme[1], backgroundOpacity),
              }}
            >
              aspiring data journalist
            </span>
            , and{" "}
            <span
              style={{
                fontWeight: 500,
                color:
                  currentTheme[0] === "#FFFFFF"
                    ? "black"
                    : addOpacity(currentTheme[2], backgroundOpacity),
              }}
            >
              web designer
            </span>
            . I make interactive graphics to tell stories that feel important
            and overlooked. I&apos;m open to freelance work, and you can reach
            me at{" "}
            <a
              className={styles.email}
              style={{
                fontWeight: 500,
                color:
                  currentTheme[0] === "#FFFFFF"
                    ? "black"
                    : addOpacity(currentTheme[3], backgroundOpacity),
              }}
              href="mailto:cahanamichael@gmail.com"
            >
              cahanamichael@gmail.com
            </a>
            .
          </p>
        </div>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 0 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="portfolio sections"
              className={`${styles.fadeIn} ${styles.delay2}`}
              sx={{
                "& .MuiTab-root": {
                  fontSize: "24px",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  textTransform: "none",
                  fontFamily: "var(--font-geist-sans)",
                  padding: "0 32px 0 0",
                  minWidth: "auto",
                  fontStyle: "italic",
                  transition: "font-weight 0.2s",
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              <Tab
                label="Projects"
                disableRipple
                sx={{
                  color:
                    currentTheme[0] === "#FFFFFF" ? "black" : currentTheme[4],
                  "&.Mui-selected": {
                    fontWeight: 600,
                    color:
                      currentTheme[0] === "#FFFFFF" ? "black" : currentTheme[4],
                  },
                  "&:hover": { fontWeight: 600 },
                }}
              />
              <Tab
                label="Work"
                disableRipple
                sx={{
                  color:
                    currentTheme[0] === "#FFFFFF" ? "black" : currentTheme[5],
                  "&.Mui-selected": {
                    fontWeight: 600,
                    color:
                      currentTheme[0] === "#FFFFFF" ? "black" : currentTheme[5],
                  },
                  "&:hover": { fontWeight: 600 },
                }}
              />
              <Tab
                label="Education"
                disableRipple
                sx={{
                  color:
                    currentTheme[0] === "#FFFFFF" ? "black" : currentTheme[1],
                  "&.Mui-selected": {
                    fontWeight: 600,
                    color:
                      currentTheme[0] === "#FFFFFF" ? "black" : currentTheme[1],
                  },
                  "&:hover": { fontWeight: 600 },
                }}
              />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Projects
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              shouldAnimate={shouldAnimateProjects}
              currentTheme={currentTheme}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Work
              shouldAnimate={shouldAnimateProjects}
              currentTheme={currentTheme}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Education
              shouldAnimate={shouldAnimateProjects}
              currentTheme={currentTheme}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          </TabPanel>
        </Box>
      </main>
    </div>
  );
}
