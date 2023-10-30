import React from 'react';
import Navigation from '../components/Navigation';
import SleepData from '../components/SleepData';
import './styles.css'; // Import the CSS file

const SleepDataPage = () => {
  // Mock data for demonstration
  const data = [
    { id: 1, team: 'Team A', record: '5-2', pf: 30 },
    { id: 2, team: 'Team B', record: '4-3', pf: 28 },
    // Add more data as needed
  ];

  return (
    <div className="page-container">
      <h1 className="welcome-message">Sleep Data Page</h1>
      <SleepData data={data} />
    </div>
  );
};

export default SleepDataPage;
