const odbc = require('odbc');
const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'] // Allow these headers
}));

const connString = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\\Users\\jason\\ClassProjects\\Projects\\my-app\\StudentCareerHelp\\src\\StudentHelperDB1.accdb;PWD=rustyL1d';


app.get('/', async (req, res) => {
  try {
    const connection = await odbc.connect(connString);
    const result = await connection.query('SELECT * FROM [Class Table]');
    await connection.close();
    res.json(result);
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).send('Error connecting to the database.');
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});


