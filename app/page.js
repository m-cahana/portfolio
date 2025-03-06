"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && children}
    </div>
  );
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [shouldAnimateProjects, setShouldAnimateProjects] = useState(true);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setShouldAnimateProjects(false);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${styles.fadeIn}`}>Michael Cahana</h1>
          <p className={`${styles.text} ${styles.fadeIn} ${styles.delay1}`}>
            I&apos;m a data scientist and aspiring data journalist and web
            designer. I make interactive graphics to tell stories that feel
            important and overlooked. I&apos;m open to freelance work, and you
            can reach me at{" "}
            <a className={styles.email} href="mailto:cahanamichael@gmail.com">
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
                  color: "rgba(0, 0, 0, 0.4)",
                  fontStyle: "italic",
                  "&.Mui-selected": {
                    color: "rgba(0, 0, 0, 1)",
                    backgroundColor: "transparent",
                  },
                  "&:hover": {
                    color: "rgba(0, 0, 0, 1)",
                    backgroundColor: "transparent",
                  },
                  "&:focus": {
                    color: "rgba(0, 0, 0, 1)",
                    backgroundColor: "transparent",
                  },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              <Tab label="Projects" disableRipple />
              <Tab label="Work" disableRipple />
              <Tab label="Education" disableRipple />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Projects
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              shouldAnimate={shouldAnimateProjects}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Work shouldAnimate={shouldAnimateProjects} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Education shouldAnimate={shouldAnimateProjects} />
          </TabPanel>
        </Box>
      </main>
    </div>
  );
}
