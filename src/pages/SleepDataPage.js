import React, { useState, useEffect } from 'react';
import SleepData from '../components/SleepData';
import './styles.css'; // You can keep your custom styles here

const SleepDataPage = () => {
  // Mock data for demonstration (current year record)
  const currentYearData = [
    { id: 1, team: 'Team A', record: '5-2', pf: 30 },
    { id: 2, team: 'Team B', record: '4-3', pf: 28 },
    // Add more data as needed
  ];

  // State to hold data for all time record
  const [allTimeData, setAllTimeData] = useState([]);

  // Simulate loading data for all time record (you can replace this with actual data fetching)
  useEffect(() => {
    // Simulate an API request or data loading
    setTimeout(() => {
      const data = [
        { id: 1, team: 'Team X', record: '10-5', pf: 45 },
        { id: 2, team: 'Team Y', record: '9-6', pf: 40 },
        // Add more data for all time record
      ];
      setAllTimeData(data);
    }, 2000); // Simulate a 2-second delay
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="container p-4 color-white">
            <h1 className="text-center">League all time Record</h1>
            <SleepData data={allTimeData} />
          </div>
        </div>
        <div className="col-md-9">
          <div className="container p-4">
            <h1 className="text-center color-white">Current year record</h1>
            <SleepData data={currentYearData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepDataPage;
