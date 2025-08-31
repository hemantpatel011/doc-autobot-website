import { createTheme } from "@mui/material/styles";

export const createAppTheme = (isDarkMode) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#00d4ff",
        light: "#33ddff",
        dark: "#0094b3",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#10b981",
        light: "#34d399",
        dark: "#047857",
        contrastText: "#ffffff",
      },
      background: {
        default: isDarkMode ? "#1a202c" : "#ffffff",
        paper: isDarkMode ? "#2d3748" : "#f8fafc",
      },
      text: {
        primary: isDarkMode ? "#f7fafc" : "#1a202c",
        secondary: isDarkMode ? "#e2e8f0" : "#4a5568",
      },
      grey: {
        50: "#f7fafc",
        100: "#edf2f7",
        200: "#e2e8f0",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#718096",
        600: "#4a5568",
        700: "#2d3748",
        800: "#1a202c",
        900: "#171923",
      },
      common: {
        black: "#000000",
        white: "#ffffff",
      },
    },
    typography: {
      fontFamily:
        '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontSize: "3.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: "1.125rem",
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      "none",
      isDarkMode
        ? "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)"
        : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      isDarkMode
        ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
        : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      isDarkMode
        ? "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      isDarkMode
        ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
        : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      isDarkMode
        ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
        : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      ...Array(19).fill(
        isDarkMode
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      ),
    ],
  });
};
