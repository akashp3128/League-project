import axios from 'axios';

const SLEEPER_API_BASE_URL = 'https://api.sleeper.app/v1';

export async function getLeagueInfo(leagueId) {
  try {
    const response = await axios.get(`${SLEEPER_API_BASE_URL}/league/${leagueId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching league information:', error);
    throw error;
  }
}

// export async function getPlayer(playerId) {
//   try {
//     const response = await axios.get(`${SLEEPER_API_BASE_URL}/players/${playerId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getRoster(userId) {
//   try {
//     const response = await axios.get(`${SLEEPER_API_BASE_URL}/rosters/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getTeam(teamId) {
//   try {
//     const response = await axios.get(`${SLEEPER_API_BASE_URL}/teams/${teamId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }
