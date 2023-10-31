import React from 'react';
import Navigation from '../components/Navigation';
import SleepData from '../components/SleepData';
import './styles.css'; // You can keep your custom styles here

const SleepDataPage = () => {
  // Mock data for demonstration
  const data = [
    { id: 1, team: 'Team A', record: '5-2', pf: 30 },
    { id: 2, team: 'Team B', record: '4-3', pf: 28 },
    // Add more data as needed
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-4">Sleeper Data Page</h1>
      <SleepData data={data} />
    </div>
  );
};

export default SleepDataPage;
