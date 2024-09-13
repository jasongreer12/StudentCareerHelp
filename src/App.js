import './App.css';
import Logo from './classroomPhoto.jpg';
import Form from 'react-bootstrap/Form';
import 

function App() {

  const stateOptions = [
    { value: "Choose", label: "Choose your state" },
    { value: "OK", label: "Oklahoma" },
  ];

  const schoolOptions = [
    { value: "Choose", label: "Choose your school" },
    { value: "OSU", label: "Oklahoma State University" },
  ];
  const majorOptions = [
    { value: "Choose", label: "Choose your major" },
    { value: "CS", label: "Computer Science" },
  ];
  const jobOptions = [
    { value: "Choose", label: "Choose desired job" },
    { value: "CS", label: "Software Engineer" },
    {value: "CS", label: "Cyber Security"}
  ];

  return (
    <div className="App">
      <img src={Logo} alt="Error loading image." className="logoID"></img>
      <h1 id="appTitle">Student Career Helper</h1>
      <div className="container-fluid" id="selectContainer" data-bs-theme="light">
        <div className="row g-3">

          <div className="col-md-12">
            <label className="form-label" for="inputGroupSelect01" style={{ fontWeight: '700' }}>State:</label>
            <Form.Select id="inputGroupSelect01" size="lg" className="form-select">
              {stateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col-md-12" >
            <label className="form-label" for="inputGroupSelect02">School:</label>
            <Form.Select id="inputGroupSelect02" size="lg" className="form-select">
              {schoolOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col-md-12">
            <label className="form-label" for="inputGroupSelect02">Choose a major:</label>
            <Form.Select id="inputGroupSelect03" size="lg" className="form-select">
              {majorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col-md-12">
            <label className="form-label" for="inputGroupSelect03" style={{ fontWeight: '700' }}>Job:</label>
            <Form.Select id="inputGroupSelect04" size="lg" className="form-select">
              {jobOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
      </div>
    </div>

  );
}

// async function connectToDatabase() {
//   try {
//     const odbc = require('odbc');
//     // use a connection string to get access to database
//     const connection = await odbc.connect('Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\Users\jason\OneDrive\Documents\StudentHelperDB.accdb;');
    
//     // query whatever table is needed
//     const result = await connection.query('SELECT * FROM Class Table');
    
//     console.log(result); // output the results of the query
    
//     // close connection
//     await connection.close();
//   } catch (error) {
//     console.error('Error connecting to database:', error);
//   }
// }

export default App;
