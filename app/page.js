"use client";

import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import styles from "./page.module.css";
import { Tabs, Tab, Box } from "@mui/material";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";
import { themes } from "./components/ThemeSwitcher";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  const [currentTheme, setCurrentTheme] = useState(themes[0].colors);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setShouldAnimateProjects(false);
  };

  const handleThemeChange = (colors) => {
    if (typeof window !== "undefined") {
      // Add this check
      setCurrentTheme(colors);
    }
  };

  const backgroundOpacity = 1;

  const isDarkMode = currentTheme[0] === "#1E1E1E";
  const isLightMode = currentTheme[0] === "#FFFFFF";

  return (
    <div
      className={styles.page}
      style={{
        backgroundColor: isDarkMode ? currentTheme[0] : "inherit",
      }}
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1
              className={`${styles.title} ${styles.fadeIn}`}
              style={{
                color: isDarkMode
                  ? "#FFFFFF"
                  : currentTheme[0] === "#FFFFFF"
                  ? "black"
                  : addOpacity(currentTheme[0], backgroundOpacity),
              }}
            >
              Michael Cahana
            </h1>
            <div className={`${styles.fadeIn} ${styles.delay1}`}>
              <ThemeSwitcher
                onThemeChange={handleThemeChange}
                currentTheme={currentTheme}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
          <p
            className={`${styles.text} ${styles.fadeIn} ${styles.delay1}`}
            style={{
              color: isDarkMode ? "#F5F5F5" : "inherit",
            }}
          >
            I&apos;m a{" "}
            <span
              style={{
                fontWeight: 600,
                color: isDarkMode
                  ? "#F5F5F5"
                  : currentTheme[0] === "#FFFFFF"
                  ? "black"
                  : addOpacity(currentTheme[0], backgroundOpacity),
              }}
            >
              data scientist
            </span>
            ,{" "}
            <span
              style={{
                fontWeight: 600,
                color: isDarkMode
                  ? "#F5F5F5"
                  : currentTheme[0] === "#FFFFFF"
                  ? "black"
                  : addOpacity(currentTheme[1], backgroundOpacity),
              }}
            >
              data journalist
            </span>
            , and{" "}
            <span
              style={{
                fontWeight: 600,
                color: isDarkMode
                  ? "#F5F5F5"
                  : currentTheme[0] === "#FFFFFF"
                  ? "black"
                  : addOpacity(currentTheme[2], backgroundOpacity),
              }}
            >
              web designer
            </span>
            . I make interactive graphics to tell stories that feel important
            and overlooked. I&apos;m open to collaborating, and you can reach me
            at{" "}
            <a
              className={styles.email}
              style={{
                fontWeight: 600,
                color: isDarkMode
                  ? "#F5F5F5"
                  : currentTheme[0] === "#FFFFFF"
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
                  color: isDarkMode
                    ? currentTheme[1]
                    : isLightMode
                    ? "#7E7E7E"
                    : currentTheme[0],
                  "&.Mui-selected": {
                    fontWeight: 600,
                    color: isDarkMode
                      ? "#FFFFFF"
                      : isLightMode
                      ? "black"
                      : currentTheme[0],
                  },
                  "&:hover": { fontWeight: 600 },
                }}
              />
              <Tab
                label="Work"
                disableRipple
                sx={{
                  color: isDarkMode
                    ? currentTheme[1]
                    : isLightMode
                    ? "#7E7E7E"
                    : currentTheme[1],
                  "&.Mui-selected": {
                    fontWeight: 600,
                    color: isDarkMode
                      ? "#FFFFFF"
                      : isLightMode
                      ? "black"
                      : currentTheme[1],
                  },
                  "&:hover": { fontWeight: 600 },
                }}
              />
              <Tab
                label="Education"
                disableRipple
                sx={{
                  color: isDarkMode
                    ? currentTheme[1]
                    : isLightMode
                    ? "#7E7E7E"
                    : currentTheme[2],
                  "&.Mui-selected": {
                    fontWeight: 600,
                    color: isDarkMode
                      ? "#FFFFFF"
                      : isLightMode
                      ? "black"
                      : currentTheme[2],
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
              isDarkMode={isDarkMode}
              isLightMode={isLightMode}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Work
              shouldAnimate={shouldAnimateProjects}
              currentTheme={currentTheme}
              isDarkMode={isDarkMode}
              isLightMode={isLightMode}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Education
              shouldAnimate={shouldAnimateProjects}
              currentTheme={currentTheme}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              isDarkMode={isDarkMode}
              isLightMode={isLightMode}
            />
          </TabPanel>
        </Box>
        <Analytics />
        <SpeedInsights />
      </main>
    </div>
  );
}
