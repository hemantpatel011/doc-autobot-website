import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";

const Demo = () => {
  const { isDarkMode } = useTheme();
  const steps = [
    {
      title: "Install the tool",
      command: "npm install -g doc-autobot",
      description: "Get started with a simple npm install command",
    },
    {
      title: "Setup Gemini API key",
      command: "echo 'GEMINI_API_KEY=your_api_key' >\n .env",
      description:
        "Configure your Google Gemini API key for AI-powered generation",
    },
    {
      title: "Run the command",
      command: "doc-autobot readme",
      description: "Generate your README with one simple command",
    },
    {
      title: "Get your document",
      command: "✅ README.md generated successfully!",
      description: "Your comprehensive README is ready to use",
    },
  ];

  return (
    <Box className="py-24 relative">
      {/* Background */}
      <Box className="absolute inset-0 opacity-5">
        <Box className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-3xl"></Box>
        <Box className="absolute bottom-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl"></Box>
      </Box>

      <Container maxWidth="lg" className="relative z-10">
        {/* Section Header */}
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className={`mb-6 font-bold ${
              isDarkMode
                ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                : "text-gray-900"
            }`}
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
          >
            How It Works
          </Typography>
          <Typography
            variant="h5"
            className={` ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            sx={{ fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" } }}
          >
            Four simple steps to professional documentation
          </Typography>
        </Box>

        {/* Steps Only */}
        <Box className="">
          <Box className="space-y-8">
            {steps.map((step, index) => (
              <Box
                key={index}
                className="flex items-start gap-6 p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
              >
                {/* Step Number */}
                <Box className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30">
                  {index + 1}
                </Box>

                {/* Step Content */}
                <Box className="flex-1">
                  <Typography
                    variant="h6"
                    className={`mb-2 font-semibold ${
                      isDarkMode ? "text-cyan-300" : "text-cyan-600"
                    }`}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={`leading-relaxed mb-3 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {step.description}
                  </Typography>
                  <Box
                    className={`rounded-lg p-3 border ${
                      isDarkMode
                        ? "bg-gray-900 border-gray-700"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    <Typography
                      variant="body2"
                      className={`font-mono text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-800"
                      }`}
                      component="div"
                    >
                      $ {step.command}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Demo;
