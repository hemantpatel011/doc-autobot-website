import React from 'react';
import { Box, Typography, Container, Link, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <Box className="py-16 relative">
      {/* Background */}
      <Box className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></Box>
      
      <Container maxWidth="lg" className="relative z-10">
        <Box className="text-center">
          {/* Main Footer Content */}
          <Box className="mb-8">
            <Typography 
              variant="h4" 
              className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold"
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
            >
              doc-autobot 🤖
            </Typography>
            <Typography 
              variant="body1" 
              className={`leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Automate your documentation workflow with AI-powered generation
            </Typography>
          </Box>

          {/* Links */}
          <Box className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <Link
              href="https://github.com/hemantpatel011/doc-autobot"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300 no-underline ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <FontAwesomeIcon 
                icon={faSquareGithub} 
                className="text-2xl group-hover:scale-110 transition-transform duration-300" 
              />
              <Typography variant="body1" className="font-medium">
                View on GitHub
              </Typography>
            </Link>

     
            <Link
              href="https://www.linkedin.com/in/hemant-patel-a67031341/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 hover:text-blue-400 transition-colors duration-300 no-underline ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className="text-2xl group-hover:scale-110 transition-transform duration-300" 
              />
              <Typography variant="body1" className="font-medium">
                Hemant Patel
              </Typography>
            </Link>
          </Box>

          {/* Divider */}
          <Divider className="my-8 border-gray-700" />

          {/* Bottom Section */}
          <Box className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
            {/* License */}
            <Typography variant="body2" className={`text-center lg:text-left ${
              isDarkMode ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Released under the{' '}
              <Link 
                href="https://opensource.org/licenses/MIT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 no-underline"
              >
                MIT License
              </Link>
            </Typography>

            {/* Love Message */}
            <Box className="flex items-center gap-2 justify-center lg:justify-end">
              <Typography variant="body2" className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>
                Built with
              </Typography>
              <FontAwesomeIcon 
                icon={faHeart} 
                className="text-red-500 animate-pulse" 
              />
              <Typography variant="body2" className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>
                for the open-source community
              </Typography>
            </Box>
          </Box>

          {/* Copyright */}
          <Box className={`mt-8 pt-6 border-t ${
            isDarkMode ? 'border-gray-800' : 'border-gray-300'
          }`}>
            <Typography variant="body2" className={isDarkMode ? 'text-gray-600' : 'text-gray-500'}>
              © {new Date().getFullYear()} doc-autobot. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;