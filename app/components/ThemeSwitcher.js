"use client";

import styles from "./ThemeSwitcher.module.css";

export const themes = [
  // from figma's color palettes
  {
    id: "white",
    colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
  },
  {
    id: "sage",
    colors: ["#94B444", "#A8BB6E", "#DDDBDA", "#DBC1A0", "#839546", "#BBBAB9"],
  },
  {
    id: "maraschino",
    colors: ["#FC2414", "#9A130B", "#BC9482", "#FC9E7A", "#F1324F", "#EE756D"],
  },
  {
    id: "diamond twilight blues",
    colors: ["#0705F6", "#110792", "#FCB4D4", "#B079C2", "#0705F6", "#110792"],
  },
  {
    id: "dijon mustard",
    colors: ["#FFDE21", "#FFEA99", "#FFD32C", "#E0BC00", "#FFB302", "#F5C935"],
  },
];

export default function ThemeSwitcher({ onThemeChange }) {
  return (
    <div className={styles.themeSwitcher}>
      {themes.map((theme) => (
        <button
          key={theme.id}
          className={styles.themeButton}
          onClick={() => onThemeChange(theme.colors)}
          aria-label={`Switch to ${theme.id}`}
        >
          <div className={styles.colorPreview}>
            <div
              className={styles.colorSwatch}
              style={{
                backgroundColor: theme.colors[0],
                border: "1px solid black",
              }}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
