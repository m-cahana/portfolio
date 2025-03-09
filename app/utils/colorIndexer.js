export const getColorIndexer = (isDarkMode, isLightMode) => {
  let colorIndex = isDarkMode || isLightMode ? 1 : 0; // Start at 1 if dark or light mode mode, 0 otherwise

  const getNextIndex = () => {
    const current = colorIndex;
    if (isDarkMode || isLightMode) {
      colorIndex = ((colorIndex - 1 + 1) % 5) + 1; // Cycle through 1-5 in dark/light mode
    } else {
      colorIndex = (colorIndex + 1) % 6; // Normal cycle through 0-5
    }
    return current;
  };

  return getNextIndex;
};
