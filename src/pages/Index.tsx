
import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import LandingPage from '@/components/LandingPage';

const Index = () => {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
};

export default Index;
