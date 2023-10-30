// src/components/SleepData.js
import React from 'react';

const SleepData = ({ data }) => {
  return (
    <div>
      <h2>league Data</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">Record</th>
            <th className="px-4 py-2">PF</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id}>
              <td className="border px-4 py-2">{entry.team}</td>
              <td className="border px-4 py-2">{entry.record}</td>
              <td className="border px-4 py-2">{entry.pf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SleepData;
