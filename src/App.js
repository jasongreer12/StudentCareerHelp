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
  ];

  const [states, setStates] = useState([]);
  const [schools, setSchools] = useState([]);
  const [majors, setMajors] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectedState, setSelectedState] = useState('Choose');
  const [selectedSchool, setSelectedSchool] = useState('Choose');
  const [selectedMajor, setSelectedMajor] = useState('Choose');
  const [selectedJob, setSelectedJob] = useState('Choose');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [stateRes, schoolRes, majorRes, jobRes] = await Promise.all([
          fetch('http://localhost:3000/states'),
          fetch('http://localhost:3000/schools'),
          fetch('http://localhost:3000/majors'),
          fetch('http://localhost:3000/jobs')
        ]);

        const statesData = await stateRes.json();
        const schoolsData = await schoolRes.json();
        const majorsData = await majorRes.json();
        const jobsData = await jobRes.json();

        setStates(statesData);
        setSchools(schoolsData);
        setMajors(majorsData);
        setJobs(jobsData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOptions();
  }, []);



  // get info based on user choice
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const queryParams = new URLSearchParams({
          state: selectedState,
          school: selectedSchool,
          major: selectedMajor,
          job: selectedJob
        }).toString();

        const response = await fetch(`http://localhost:3000/filter?${queryParams}`);
        const data = await response.json();
        // need to do something with data like display it
      } catch (err) {
        setError(err.message);
      }
    };

    // Only fetch data if one or more filters are selected
    if (selectedState && selectedSchool && selectedMajor && selectedJob) {
      fetchFilteredData();
    }
  }, [selectedState, selectedSchool, selectedMajor, selectedJob]); // Dependencies for filter effect




  return (
    <div className="App">
      <img src={Logo} alt="Error loading image." className="logoID"></img>
      <h1 id="appTitle">Student Career Helper</h1>
      <div className="container-fluid" id="selectContainer" data-bs-theme="light">
        <div className="row g-3">

          <div className="col-md-12">
            <label className="form-label" for="inputGroupSelect01" style={{ fontWeight: '700' }}>State:</label>
            <Form.Select id="inputGroupSelect01" size="lg" className="form-select" value={selectedState}
              onChange={(e) => setSelectedSchool(e.target.value)}>
              <option value="Choose" disabled selected>Choose your state</option>
              {states.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col-md-12" >
            <label className="form-label" for="inputGroupSelect02">School:</label>
            <Form.Select id="inputGroupSelect02" size="lg" className="form-select" value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}>
              <option value="Choose" disabled selected>Choose your school</option>
              {schools.map((school, index) => (
                <option key={index} value={school.SchoolName}>
                  {school.SchoolName}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col-md-12">
            <label className="form-label" for="inputGroupSelect02">Major:</label>
            <Form.Select id="inputGroupSelect03" size="lg" className="form-select" value={selectedMajor}
              onChange={(e) => setSelectedMajor(e.target.value)}>
              <option value="Choose" disabled selected>Choose your major</option>
              {majors.map((major, index) => (
                <option key={index} value={major.MajorName}>
                  {major.MajorName}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col-md-12">
            <label className="form-label" for="inputGroupSelect03" style={{ fontWeight: '700' }}>Job:</label>
            <Form.Select id="inputGroupSelect04" size="lg" className="form-select" value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}>
              <option value="Choose" disabled selected>Choose desired job</option>
              {jobs.map((job, index) => (
                <option key={index} value={job.JobName}>
                  {job.JobName}
                </option>
              ))}
            </Form.Select>
          </div>


        </div>
      </div>
      {/* Class List Section */}
      <div className="container-fluid" id="schoolInfoContainer">
        {/* This will render the class list fetched from your backend */}

      </div>
    </div>

  );
}




export default App;
