import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { createAppTheme } from './theme';
import { ThemeContextProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import SecondaryCTA from './components/SecondaryCTA';
import Footer from './components/Footer';

const AppContent = () => {
  const { isDarkMode } = useTheme();
  const theme = createAppTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-900 text-white' 
            : 'bg-white text-gray-900'
        }`}
      >
        {/* Header */}
        <Header />
        
        {/* Main Content with top padding for fixed header */}
        <Box className="pt-20">
          {/* Hero Section */}
          <Hero />
          
          {/* Features Section */}
          <Features />
          
          {/* Demo Section */}
          <Demo />
          
          {/* Secondary CTA Section */}
          <SecondaryCTA />
          
          {/* Footer */}
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;