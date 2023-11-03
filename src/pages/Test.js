import React, { useState, useEffect } from 'react';
import { getLeagueInfo } from '../services/sleeperAPI'; // Import the necessary functions
import { getRostersInLeague } from '../services/getRoster'; // Import the necessary functions

function Test() {
  const [leagueInfo, setLeagueInfo] = useState(null);
  const [rosters, setRosters] = useState([]);
  const leagueId = '989246993694261248'; // Replace with the desired league ID

  useEffect(() => {
    const fetchLeagueInfo = async () => {
      try {
        const data = await getLeagueInfo(leagueId);
        setLeagueInfo(data);
      } catch (error) {
        // Handle the error
      }
    };

    fetchLeagueInfo();
  }, [leagueId]);

  useEffect(() => {
    const fetchRosters = async () => {
      try {
        const data = await getRostersInLeague(leagueId);
        setRosters(data);
      } catch (error) {
        // Handle the error
      }
    };

    fetchRosters();
  }, [leagueId]);

  return (
    <div>
      {leagueInfo ? (
        <div>
          <h2 className='custom-text-color'>League Info</h2>
          <pre className='custom-text-color'>{JSON.stringify(leagueInfo, null, 2)}</pre>
        </div>
      ) : (
        <p className='custom-text-color'>Loading league information...</p>
      )}

      {rosters.length > 0 ? (
        <div>
          <h2 className='custom-text-color'>Rosters</h2>
          <pre className='custom-text-color'>{JSON.stringify(rosters, null, 2)}</pre>
        </div>
      ) : (
        <p className='custom-text-color'>Loading rosters...</p>
      )}
    </div>
  );
}

export default Test;
