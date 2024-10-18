import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

//const USERNAME = process.env.ONET_USERNAME  // Replace with your O*NET API username
//const PASSWORD = process.env.ONET_PASSWORD  // Replace with your O*NET API password

const USERNAME = 'studentcareerhelp';
const PASSWORD = '9245jug';


const BASE_URL = 'https://services.onetcenter.org/v1.9/ws/mnm/careers/';  // Base URL for career reports
// Function to fetch career overview for a given O*NET-SOC Code
const fetchCareerOverview = async (jobName) => {
  const auth = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}${jobName}`, {
      headers: {
        'Authorization': `Basic ${auth}`,
      },
    });
    // const response = await axios.get(`${BASE_URL}${jobName}`, {
    //   mode: 'no-cors',
    //   headers: {
    //     'Authorization': `Basic ${auth}`,
    //   },
    // });

    console.log('Career Overview:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching career overview:', error.message);
    if (error.response && error.response.status === 404) {
      console.error('404 Not Found: The SOC code or URL may be incorrect.');
    } else if (error.response && error.response.status === 422) {
      console.error('422 Unprocessable Entity: Invalid parameters.');
    }
    throw error;
  }
};

// Example call for Software Developers (SOC Code: 15-1252)
export default fetchCareerOverview;
