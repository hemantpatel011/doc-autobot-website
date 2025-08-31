import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandSparkles,
  faFileText,
  faHatWizard,
  faTerminal,
  faBox,
  faLayerGroup,
  faLightbulb,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext";

const Features = () => {
  const { isDarkMode } = useTheme();
  const features = [
    {
      icon: faWandSparkles,
      title: "AI-Powered README.md Generation",
      description:
        "Automatically creates a detailed README.md by analyzing your project's content.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: faFileText,
      title: "Templated CONTRIBUTING.md Generation",
      description: "Quickly generates a standard CONTRIBUTING.md file.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: faHatWizard,
      title: "Interactive Wizard",
      description:
        "If you run the tool without commands, a user-friendly wizard guides you through the options.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: faTerminal,
      title: "Multiple Commands",
      description: "Offers dedicated commands for generating specific files.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: faBox,
      title: "Project Context Awareness",
      description:
        "Fetches details from package.json to inform documentation generation.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: faLayerGroup,
      title: "Tech Stack Agnostic",
      description: "Useful for any type of project.",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <Box className="py-24 relative">
      {/* Background Elements */}
      <Box className="absolute inset-0 opacity-5">
        <Box className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"></Box>
        <Box className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl"></Box>
      </Box>

      <Container maxWidth="lg" className="relative z-10">
        {/* Pro Tip Section */}
        <Paper
          className=" md:mt-[-14.2rem] flex md:mx-60  justify-center content-center bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 backdrop-blur-sm"
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

        {/* Section Header */}
        <Box className="text-center mb-16 mt-24">
          <Typography
            variant="h2"
            className={`mb-6 font-bold ${
              isDarkMode
                ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
          >
            Powerful Features
          </Typography>
          <Typography
            variant="h5"
            className={` ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            sx={{ fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" } }}
          >
            Everything you need to create professional documentation
            effortlessly
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Paper
              key={index}
              className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              elevation={0}
              sx={{
                borderRadius: "16px",
                padding: "2rem",
                background: "rgba(45, 55, 72, 0.6)",
                backdropFilter: "blur(10px)",
                "&:hover": {
                  background: "rgba(45, 55, 72, 0.8)",
                  boxShadow: "0 25px 50px -12px rgba(0, 212, 255, 0.15)",
                },
              }}
            >
              {/* Gradient Overlay */}
              <Box
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></Box>

              {/* Icon */}
              <Box className="relative z-10 mb-3">
                <Box
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-2xl text-white"
                  />
                </Box>
              </Box>

              {/* Content */}
              <Box className="relative z-10">
                <Typography
                  variant="h3"
                  className={`mb-3 font-semibold group-hover:text-cyan-300 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-white"
                  }`}
                  sx={{ fontSize: "1.2rem" }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={`leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-300"
                  }`}
                  sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </Box>

              {/* Hover Effect Border */}
              <Box className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-500/50 group-hover:to-blue-500/50 transition-all duration-500"></Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
