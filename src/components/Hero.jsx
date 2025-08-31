import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Snackbar, Alert, Paper, Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faClone, faWandSparkles, faLightbulb, faKey, faFileText, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [copySuccess, setCopySuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const steps = [
    {
      title: "Install the tool",
      command: "npm install -g doc-autobot",
      description: "Get started with a simple npm install command"
    },
    {
      title: "Setup Gemini API key",
      command: "echo 'GEMINI_API_KEY=your_api_key_here' > .env",
      description: "Configure your Google Gemini API key for AI-powered generation"
    },
    {
      title: "Run the command",
      command: "doc-autobot readme",
      description: "Generate your README with one simple command"
    },
    {
      title: "Get your document",
      command: "✅ README.md generated successfully!",
      description: "Your comprehensive README is ready to use"
    }
  ];

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText('npm install -g doc-autobot');
      setCopySuccess(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCloseSnackbar = () => {
    setCopySuccess(false);
  };

  const typeText = (text, callback) => {
    setIsTyping(true);
    setTerminalText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTerminalText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 50);
  };

  useEffect(() => {
    const cycleSteps = () => {
      typeText(steps[currentStep].command, () => {
        setTimeout(() => {
          setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 2000);
      });
    };

    cycleSteps();
  }, [currentStep]);

  return (
    <Box className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
    }`}>
      {/* Animated Background */}
      <Box className={`absolute inset-0 ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>
        <Box className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></Box>
        <Box className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></Box>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-500"></Box>
      </Box>

      <Container maxWidth="xl" className="relative z-10">
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6 ps-3 pt-14 items-center min-h-[100vh]">
          {/* Left Column - Content */}
          <Box className="text-center lg:text-left">
            {/* Glowing Animated Badge */}
            <Box className="mb-4 md:mt-[-8rem] ml-3 flex justify-center lg:justify-start">
              <Box className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm animate-pulse">
                <FontAwesomeIcon 
                  icon={faWandSparkles} 
                  className="text-cyan-400 text-sm animate-pulse" 
                />
                <Typography 
                  variant="body2" 
                  className={`font-medium text-sm ${
                    isDarkMode ? 'text-cyan-300' : 'text-cyan-900'
                  }`}
                  sx={{ fontSize: '0.875rem' }}
                >
                 AI-Powered
                </Typography>
                <Box className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-md animate-pulse"></Box>
              </Box>
            </Box>

            {/* Main Headline */}
            <Typography 
              variant="h1" 
              className={`mb-6 py-4 font-bold ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent' 
                  : 'text-gray-900'
              }`}
              sx={{ 
                fontSize: { xs: '2.9rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                lineHeight: 0.9
              }}
            >
              Automate Your Documentation.
              <br />
              <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>Instantly.</span>
            </Typography>

            {/* Sub-headline */}
            <Typography 
              variant="h4" 
              className={`mb-8 py-4 leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
              sx={{ 
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.25rem' },
                fontWeight: 300,
                maxWidth: { lg: '90%' }
              }}
            >
               AI-powered CLI tool that automatically generates comprehensive <strong>README.md</strong> and <strong>CONTRIBUTING.md</strong> files for your projects. Save time, focus on code.
            </Typography>

            {/* CTA Buttons */}
            <Box className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              {/* Primary CTA - Install Command */}
              <Button
                variant="outlined"
                size="large"
                onClick={handleCopyCommand}
                className="group relative overflow-hidden  text-white font-semibold px-8  rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25"
                startIcon={<FontAwesomeIcon icon={faClone} className="text-lg" />}
                sx={{
                  textTransform: 'none',
                  fontSize: '1.10rem',
                  minWidth: '280px',
                  height: '48px'
                }}
              >
                <span className="relative z-10">npm install -g doc-autobot</span>
                <Box className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></Box>
              </Button>

              {/* Secondary CTA - npmjs */}
              <Button
                                         variant="contained"
                                         size="large"
                                         href="https://www.npmjs.com/package/doc-autobot"
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="group border-2 border-gray-600 text-white hover:border-cyan-400 hover:text-cyan-400 font-semibold px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                                         sx={{
                                           textTransform: 'none',
                                           fontSize: '1.10rem',
                                           minWidth: '200px',
                                           height: '48px'
                                         }}
                                       >
                                         Get Started
                                       </Button>


            </Box>

           
          </Box>

          {/* Right Column - Terminal */}
          <Box className="relative flex justify-center lg:justify-center">
            {/* Enhanced Multi-Layer Glow Background */}
            <Box className="absolute inset-0 flex items-center justify-center">
              {/* Outermost Glow - Large and Soft */}
              <Box 
                className={`w-[600px] h-[400px] bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ${
                  isTyping ? 'animate-pulse scale-110' : 'animate-pulse scale-100'
                }`}
                sx={{ opacity: 0.6 }}
              ></Box>
              
              {/* Middle Glow - Medium and Vibrant */}
              <Box 
                className={`absolute w-[400px] h-[300px] bg-gradient-to-r from-cyan-500/40 to-blue-600/40 rounded-full blur-2xl transition-all duration-700 ${
                  isTyping ? 'scale-105 opacity-80' : 'scale-100 opacity-60'
                }`}
                sx={{ 
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: '0.5s'
                }}
              ></Box>
              
              {/* Inner Glow - Sharp and Intense */}
              <Box 
                className={`absolute w-[300px] h-[200px] bg-gradient-to-r from-cyan-400/50 to-emerald-400/50 rounded-xl blur-xl transition-all duration-500 ${
                  isTyping ? 'scale-110 opacity-90' : 'scale-100 opacity-70'
                }`}
                sx={{ 
                  animation: 'pulse 1.5s ease-in-out infinite',
                  animationDelay: '0.2s'
                }}
              ></Box>
              
              {/* Terminal-Specific Glow */}
              <Box 
                className={`absolute w-[280px] h-[180px] bg-gradient-to-br from-emerald-400/30 via-cyan-400/30 to-blue-500/30 rounded-lg blur-lg transition-all duration-300 ${
                  currentStep === 3 ? 'from-emerald-400/50 to-green-500/40' : ''
                }`}
                sx={{ 
                  animation: isTyping ? 'pulse 0.8s ease-in-out infinite' : 'pulse 3s ease-in-out infinite'
                }}
              ></Box>
            </Box>

            <Box className=" w-240 max-w-lg md:mt-[-4rem] relative z-10">
              {/* Terminal - Always Dark Theme */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: '12px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  zIndex: 10,
                  backgroundColor: '#111827', // Always dark gray-900
                  border: '1px solid #374151', // Always gray-700
                  overflow: 'hidden'
                }}
              >
                {/* Terminal Header - Always Dark */}
                <Box 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1.5,
                    backgroundColor: '#1f2937', // Always gray-800
                    borderBottom: '1px solid #374151' // Always gray-700
                  }}
                >
                  <Box className="flex gap-2">
                    <Box className="w-3 h-3 rounded-full bg-red-500"></Box>
                    <Box className="w-3 h-3 rounded-full bg-yellow-500"></Box>
                    <Box className="w-3 h-3 rounded-full bg-green-500"></Box>
                  </Box>
                  <Box className="flex-1 text-left">
                    <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                      Terminal
                    </Typography>
                  </Box>
                </Box>

                {/* Terminal Content - Always Dark */}
                <Box 
                  sx={{
                    p: 3,
                    minHeight: '250px',
                    fontFamily: 'monospace',
                    position: 'relative'
                  }}
                >
                  <Box className="flex items-center gap-2 mb-4">
                    <FontAwesomeIcon icon={faTerminal} style={{ color: '#10b981' }} />
                    <Typography variant="body2" sx={{ color: '#10b981' }}>
                      ~/my-project
                    </Typography>
                  </Box>

                  <Box className="space-y-2">
                    <Typography 
                      variant="body2" 
                      component="div"
                      sx={{ 
                        color: '#d1d5db', // Always gray-300
                        fontFamily: 'monospace',
                        fontSize: '0.875rem'
                      }}
                    >
                      $ {terminalText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </Typography>
                  </Box>

                  {/* Progress Indicator */}
                  <Box className="mt-20 md:mt-50 flex justify-center">
                    <Box className="flex gap-2">
                      {steps.map((_, index) => (
                        <Box
                          key={index}
                          className={`w-3 h-2 rounded-full transition-all duration-500 ${
                            currentStep === index 
                              ? 'bg-cyan-400 scale-125' 
                              : currentStep > index 
                                ? 'bg-emerald-400' 
                                : 'bg-gray-600'
                          }`}
                        ></Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Current Step Indicator */}
                  <Box className="mt-4 text-center">
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#6b7280', // Always gray-500
                        fontSize: '0.75rem'
                      }}
                    >
                      {steps[currentStep].title}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Additional Rim Glow */}
              <Box 
                className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
                  isTyping 
                    ? 'border-cyan-400/40 shadow-lg shadow-cyan-400/20' 
                    : 'border-cyan-500/20 shadow-md shadow-cyan-500/10'
                }`}
                sx={{ 
                  pointerEvents: 'none',
                  zIndex: 5
                }}
              ></Box>
            </Box>
          </Box>
        </Box>

      </Container>

      

      {/* Success Snackbar */}
      <Snackbar
        open={copySuccess}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          variant="filled"
          className="bg-emerald-600"
        >
          Command copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Hero;