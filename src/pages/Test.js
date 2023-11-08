import React, { useState, useEffect } from 'react';
import { getLeagueInfo } from '../services/sleeperAPI';
import { getRostersInLeague } from '../services/getRoster';
import { getTeam } from '../services/getTeam';
import { getAllPlayers } from '../services/getPlayers';

function TeamCard({ teamEntry, players }) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className={`team-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
        <h3 className='color-sleeperblue'>{teamEntry && teamEntry.team ? teamEntry.team.name : 'Unknown Team'}</h3>
        {isExpanded && (
          <div className="roster">
            <h4 className='color-sleeperblue'>Roster:</h4>
            <ul className='color-sleeperblue'>
              {teamEntry.roster.players.map((playerId) => {
                const playerData = players[playerId];
                return (
                  <li key={playerId}>
                    {playerData ? (playerData.search_first_name && playerData.search_last_name ? `${playerData.search_first_name} ${playerData.search_last_name}` : 'Unknown Player') : 'Unknown Player'}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
  

function Test() {
  const [leagueInfo, setLeagueInfo] = useState(null);
  const [rosters, setRosters] = useState([]);
  const [players, setPlayers] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const leagueId = '983853389404590080';

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

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const data = await getAllPlayers();
        setPlayers(data);
      } catch (error) {
        // Handle the error
      }
    };

    fetchAllPlayers();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      const teams = rosters.map(async (roster) => {
        try {
          const team = await getTeam(roster.team_id);
          return { team, roster };
        } catch (error) {
          return { team: null, roster };
        }
      });

      const resolvedTeams = await Promise.all(teams);
      setTeamData(resolvedTeams);
    };

    fetchTeamData();
  }, [rosters]);

  return (
    <div>
      <h2 className='color-white'>Teams and Rosters</h2>
      {teamData.map((teamEntry, index) => (
        <TeamCard key={index} teamEntry={teamEntry} players={players} />
      ))}
    </div>
  );
}

export default Test;
