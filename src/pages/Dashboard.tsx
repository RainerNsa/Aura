
import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import DashboardLayout from '@/components/DashboardLayout';

const Dashboard = () => {
  return (
    <ThemeProvider>
      <DashboardLayout />
    </ThemeProvider>
  );
};

export default Dashboard;
