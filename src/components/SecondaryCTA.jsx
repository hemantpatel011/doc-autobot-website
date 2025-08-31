import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faLightbulb,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const SecondaryCTA = () => {
  const { isDarkMode } = useTheme();
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCloseSnackbar = () => {
    setCopySuccess(false);
  };

  return (
    <Box className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <Box className="absolute inset-0">
        <Box className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></Box>
        <Box className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></Box>
        <Box className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></Box>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></Box>
      </Box>

      <Container maxWidth="lg" className="relative z-10">
        {/* Section Content */}
        <Box className="text-center">
          {/* Icon */}
          <Box className="mb-8">
            <Box className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/30 mb-6">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-3xl text-white"
              />
            </Box>
          </Box>

          {/* Headline */}
          <Typography
            variant="h2"
            className={`mb-6 font-bold ${
              isDarkMode
                ? "bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              lineHeight: 1,
            }}
          >
            Ready to Eliminate
            <br />
            <span
              className={isDarkMode ? "text-emerald-400" : "text-emerald-600"}
            >
              Documentation Hassles?
            </span>
          </Typography>

          {/* Description */}
          <Typography
            variant="h5"
            className={`mb-12 py-5 md:px-30  leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
            sx={{
              fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
              fontWeight: 400,
            }}
          >
            Join thousands of developers who have already streamlined their
            documentation workflow. Get started in less than a minute.
          </Typography>

          {/* Secondary CTA - GitHub */}
          <Button
            variant="contained"
            size="large"
            href="https://github.com/hemantpatel011/doc-autobot/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-gray-600 text-white hover:border-cyan-400 hover:text-cyan-400 font-semibold px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            startIcon={
              <FontAwesomeIcon icon={faSquareGithub} className="text-xl" />
            }
            sx={{
              textTransform: "none",
              fontSize: "1.10rem",
              minWidth: "200px",
              height: "48px",
            }}
          >
            View on GitHub
          </Button>

          {/* Trust Indicators */}
          <Box
            className={`flex flex-col pt-12 sm:flex-row items-center justify-center gap-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <Box className="flex items-center gap-2">
              <Box className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></Box>
              <Typography variant="body2" className="text-sm">
                Free & Open Source
              </Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <Box className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></Box>
              <Typography variant="body2" className="text-sm">
                CLI Tool for Developers
              </Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <Box className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></Box>
              <Typography variant="body2" className="text-sm">
                No Registration Required
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Pro Tip Section */}
        <Paper
          className=" mt-14 flex md:mx-60  justify-center content-center bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 backdrop-blur-sm"
          elevation={0}
          sx={{
            borderRadius: "16px",
            padding: "1.5rem",
            background: "rgba(30, 58, 138, 0.1)",
            backdropFilter: "blur(10px)",
            maxWidth: { lg: "95%" },
          }}
        >
          <Box className="flex items-start gap-4">
            <Box className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-white text-lg"
              />
            </Box>
            <Box className="flex-1 text-left">
              <Typography
                variant="h6"
                className={`mb-3 font-semibold ${
                  isDarkMode ? "text-yellow-300" : "text-yellow-600"
                }`}
                sx={{ fontSize: "1.125rem" }}
              >
                💡 Pro Tip: API Configuration
              </Typography>
              <Typography
                variant="body2"
                className={`mb-3 leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                sx={{ fontSize: "0.95rem" }}
              >
                To enable AI-powered README.md generation, you must provide a
                Google Gemini API key:
              </Typography>
              <Box className="space-y-2 text-sm">
                <Box
                  className={`flex items-center gap-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Box className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></Box>
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    Obtain your key from{" "}
                    <span className="text-cyan-400 font-medium">
                      Google AI Studio
                    </span>
                  </Typography>
                </Box>
                <Box
                  className={`flex items-center gap-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Box className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></Box>
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    Create a{" "}
                    <code
                      className={`px-1 py-0.5 rounded font-mono ${
                        isDarkMode
                          ? "bg-gray-800 text-cyan-300"
                          : "bg-gray-200 text-cyan-700"
                      }`}
                    >
                      .env
                    </code>{" "}
                    file in your project directory
                  </Typography>
                </Box>
                <Box
                  className={`flex items-center gap-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Box className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></Box>
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    Add:{" "}
                    <code
                      className={`px-2 py-1 rounded font-mono ${
                        isDarkMode
                          ? "bg-gray-800 text-emerald-300"
                          : "bg-gray-200 text-emerald-700"
                      }`}
                    >
                      GEMINI_API_KEY=YOUR_GEMINI_API_KEY
                    </code>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={copySuccess}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          className="bg-emerald-600"
        >
          Command copied to clipboard! 🚀
        </Alert>
      </Snackbar>

      {/* Custom CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default SecondaryCTA;
