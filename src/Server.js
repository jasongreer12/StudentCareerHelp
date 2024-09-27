import odbc from 'odbc';
import express from 'express';
import cors from 'cors';// Import cors

import fetchCareerOverview from './Backend/api.js';  // Import from api.js


const app = express();
const port = 3000;

app.get('/filter', async (req, res) => {
  try {
    const selectedJob = req.query.job || '';
    const connection = await odbc.connect(connString);
    const queryString = `
      SELECT JobName, JobSalary, JobDescription 
      FROM [JobTable] 
      WHERE JobName LIKE '%${selectedJob}%';
    `;
    const dbResult = await connection.query(queryString);
    await connection.close();

    // Fetch O*NET data
    const apiResult = await fetchCareerOverview(selectedJob);
    console.log(`Selected job:, ${selectedJob}`);
    // Combine and return data
    const combinedResult = { dbData: dbResult, apiData: apiResult };
    res.json(combinedResult);
  } catch (error) {
    console.error('Error fetching job data:', error);
    res.status(500).send('Error fetching job data.');
  }
});



// Enable CORS for all routes
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'] // Allow these headers
}));

const connString = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\\Users\\jason\\ClassProjects\\Projects\\my-app\\StudentCareerHelp\\src\\StudentHelperDB1.accdb;PWD=rustyL1d';

const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" }
];



app.get('/', async (req, res) => {
  try {
    const connection = await odbc.connect(connString);
    const queryString = "SELECT JobName, JobSalary, JobDescription FROM [JobTable] WHERE JobName LIKE '%Software%';";
    const result = await connection.query(queryString);
    await connection.close();
    res.json(result);
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).send('Error connecting to the database.');
  }
});

app.get('/schools', async (req, res) => {
  try {
    const connection = await odbc.connect(connString);
    const queryString = "SELECT SchoolName FROM [SchoolTable];";
    const result = await connection.query(queryString);
    await connection.close();
    res.json(result);
  } catch (error) {
    console.error('Error connecting to database for schools:', error);
    res.status(500).send('Error connecting to the database.');
  }
});

app.get('/majors', async (req, res) => {
  try {
    const connection = await odbc.connect(connString);
    const queryString = "SELECT MajorName FROM [MajorTable];";
    const result = await connection.query(queryString);
    await connection.close();
    res.json(result);
  } catch (error) {
    console.error('Error connecting to major database:', error);
    res.status(500).send('Error connecting to the database.');
  }
});

app.get('/jobs', async (req, res) => {
  try {
    const connection = await odbc.connect(connString);
    const queryString = "SELECT JobName FROM [JobTable];";
    const result = await connection.query(queryString);
    await connection.close();
    res.json(result);
  } catch (error) {
    console.error('Error connecting to major database:', error);
    res.status(500).send('Error connecting to the database.');
  }
});

app.get('/states', async (req, res) => {
  try {
    res.json(states);
  } catch (error) {
    console.error('Error connecting to major database:', error);
    res.status(500).send('Error connecting to the database.');
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});


