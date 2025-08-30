import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
      }`}
      sx={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <Container maxWidth="xl">
        <Box className="flex items-center justify-between py-4">
          {/* Logo */}
          <Box className="flex items-center">
            <Typography 
              variant="h4" 
              className={`font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'hover:from-cyan-300 hover:to-purple-500' : 'hover:from-cyan-500 hover:to-purple-700'
              }`}
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em'
              }}
            >
              doc-autobot
            </Typography>
            <Box 
              className="ml-2 px-2 py-1 rounded-full text-xl md:text-2xl font-medium transition-all duration-300"  
            >
            🤖
            </Box>
          </Box>

          {/* Theme Toggle */}
          <Box className="flex items-center gap-4">
            <Box className="flex items-center gap-2">
              <Typography 
                variant="body2" 
                className={`text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {isDarkMode ? 'Dark' : 'Light'}
              </Typography>
              
              {/* Custom Toggle Switch */}
              <Box 
                onClick={toggleTheme}
                className={`relative w-14 h-7 rounded-full cursor-pointer transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30' 
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/30'
                }`}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: isDarkMode 
                      ? '0 8px 25px -8px rgba(59, 130, 246, 0.5)' 
                      : '0 8px 25px -8px rgba(251, 191, 36, 0.5)'
                  }
                }}
              >
                {/* Toggle Circle */}
                <Box 
                  className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                    isDarkMode ? 'translate-x-7' : 'translate-x-0.5'
                  }`}
                >
                  <FontAwesomeIcon 
                    icon={isDarkMode ? faMoon : faSun} 
                    className={`text-xs transition-all duration-300 ${
                      isDarkMode ? 'text-blue-600' : 'text-yellow-600'
                    }`}
                  />
                </Box>

                {/* Background Icons */}
                <Box className="absolute inset-0 flex items-center justify-between px-2">
                  <FontAwesomeIcon 
                    icon={faSun} 
                    className={`text-xs transition-all duration-300 ${
                      isDarkMode ? 'text-white/40' : 'text-white/80'
                    }`}
                  />
                  <FontAwesomeIcon 
                    icon={faMoon} 
                    className={`text-xs transition-all duration-300 ${
                      isDarkMode ? 'text-white/80' : 'text-white/40'
                    }`}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;