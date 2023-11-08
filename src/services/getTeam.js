import axios from 'axios';

const SLEEPER_API_BASE_URL = 'https://api.sleeper.app/v1';

export async function getTeam(teamId) {
  try {
    const response = await axios.get(`${SLEEPER_API_BASE_URL}/team/${teamId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
