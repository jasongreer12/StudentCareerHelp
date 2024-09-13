import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';

const fetchSalaryData = async (occupationCode) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        seriesid: occupationCode,
        startyear: '2018',
        endyear: '2023',
        registrationKey: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching salary data:", error);
    throw error;
  }
};
