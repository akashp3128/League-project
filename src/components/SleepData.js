import React from 'react';

const SleepData = ({ data }) => {
  return (
    <div>
      <h2 className="custom-text-color"></h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped custom-text-color">
          <thead>
            <tr>
              <th>Team</th>
              <th>Record</th>
              <th>PF</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.team}</td>
                <td>{entry.record}</td>
                <td>{entry.pf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SleepData;
