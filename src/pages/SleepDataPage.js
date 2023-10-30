// src/pages/SleepDataPage.js
import React from 'react';
import SleepData from '../components/SleepData'; // Import the SleepData component
// Correct usage for a named export
//import { SleepData } from './components/SleepData';

const SleepDataPage = () => {
  // Sample data (replace with your actual data)
  const data = [
    { id: 1, team: 'Team A', record: '3-1', pf: 120 },
    { id: 2, team: 'Team B', record: '2-2', pf: 105 },
    // Add more data items as needed
  ];

  return (
    <div>
      <h1>Sleep Data Page</h1>
      <SleepData data={data} /> 
    </div>
  );
};

export default SleepDataPage;
