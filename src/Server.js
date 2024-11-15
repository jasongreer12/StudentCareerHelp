import odbc from 'odbc';
import express from 'express';
import cors from 'cors'; // Import cors

import { fetchCareerOverview, getEducationRequired } from './Backend/api.js';  // Import from api.js


const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3001', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'] // Allow these headers
}));



app.get('/filter', async (req, res) => { // need to set up to handle 
  try {
    const selectedJob = req.query.job || '';
    // for dev purposes ::
    //const devString = "15-1252.00"; // must be double quote not single 
    let jobNumber = String(await getJobCode(selectedJob));
    console.log(`Selectedjob =, ${selectedJob}`);
    jobNumber = String(jobNumber);
    console.log(`jobnumber =, ${jobNumber}`);
    // Fetch O*NET data
    const apiResult = await fetchCareerOverview(jobNumber);
    console.log(`Selected job:, ${selectedJob}`);
    // Combine and return data
    let educationPageLink = apiResult.resources.resource.find(
      (resource) => resource.title === 'Education'
    );
    let jobOutlookLink = apiResult.resources.resource.find(
      (resource) => resource.title === 'Job Outlook'
    );
    let resourceLink = null;
    if (educationPageLink && jobOutlookLink) {
      // create a way to access both
      resourceLink = {
        education: educationPageLink.href,
        jobOutlook: jobOutlookLink.href
      };
    }
    let jobInfo = await getEducationRequired(resourceLink);
    let educationInfo = await getJobZoneDescr(jobInfo.educationData.job_zone);
    console.log(jobInfo.jobOutlookData);
    console.log(jobInfo.educationData.job_zone);

    const combinedResult = {
      apiData: apiResult,
      jobDescr: apiResult.what_they_do,
      education: educationInfo,
      outlook: jobInfo.jobOutlookData
    };
    //const educationRequired = {apiResult.resources.resource.Education};
    res.json(combinedResult);
  } catch (error) {
    console.error('Error fetching job data:' + error);
    res.status(500).send('Error fetching job data.');
  }
});

async function getJobCode(selectedJob) {
  try {
    const connection = await odbc.connect(connString);
    const queryString = `SELECT Code FROM [OccupationTable] WHERE Occupation = '${selectedJob}'`;

    let result = await connection.query(queryString);
    console.log(result[0]);
    await connection.close();
    return result[0].Code;
  } catch (error) {
    console.error('Error connecting to major database:', error);
    return "Error";
  }
}

async function getJobZoneDescr(zone) {
  let description = null;
  switch (zone) {
    case 1:
      description = 'These occupations may require a high school diploma or GED certificate.';
      return description;
      break;
    case 2:
      description = 'These occupations usually require a high school diploma.';
      return description;
      break;
    case 3:
      description = 'This occupations typically requires training in vocational schools, related on-the-job experience, or an associate\'s degree.';
      return description;
      break;
    case 4:
      description = 'Most of these occupations require a four-year bachelor\'s degree, but some do not.';
      return description;
      break;
    case 5:
      description = 'Most of these occupations require graduate school. For example, they may require a master\'s degree, and some require a Ph.D., M.D., or J.D. (law degree).';
      return description;
      break;
  }
}



const connString = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\\Users\\keega\\OneDrive\\Desktop\\StudentHelperDB1.accdb;PWD=rustyL1d';

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



app.get('/getJobInfo', async (req, res) => {

  try {
    const job = req.query.job || '';
    const connection = await odbc.connect(connString);
    const queryString = `SELECT JobName, JobSalary, JobDescription FROM [JobTable] WHERE JobName LIKE '%${job}%';`;
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
    const queryString = "SELECT Occupation FROM [OccupationTable] WHERE Occupation IS NOT NULL;";
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


