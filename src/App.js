import './App.css';
import Logo from './classroomPhoto.jpg';
import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';



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
    { value: "CS", label: "Software Engineer" }
  ];

  const [classes, setClasses] = useState([]); // Store the classes data
  const [error, setError] = useState(null);   // Store any error that occurs

   /* useEffect(() => {
      // Fetch data from the backend
      fetch('http://localhost:3000/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching data');
          }
          return response.json();
        })
        .then(data => setClasses(data))
        .catch(error => setError(error.message));
    }, []); // Empty array ensures the effect runs once when the component mounts

    if (error) {
      return <div>Error: {error}</div>;
    }
      */
  
  const renderClassList = () => {
    if (error) {
      return <div>Error: {error}</div>;  // Show error message if any
    }

    return (
      <div>
        <h2>Class List</h2>
        <ul>
          {classes.map(classItem => (
            <li key={classItem.ID}>
              {classItem['Class Code']} - {classItem['Class Name']}
            </li>
          ))}
        </ul>
      </div>
    );
  };

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

          {/* Class List Section */}
          <div className="col-md-12">
            {/* This will render the class list fetched from your backend */}
            {renderClassList()}
          </div>
        </div>
      </div>
    </div>

  );
}




export default App;
