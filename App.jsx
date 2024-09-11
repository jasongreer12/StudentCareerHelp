import React, { useState } from 'react';
import './App.css'; // Move the CSS into a separate file for better organization

const colleges = {
  Oklahoma: ['OKLAHOMA STATE UNIVERSITY', 'University of Oklahoma', 'OCU', 'University of Central Oklahoma', 'University of Science and Arts of Oklahoma'],
};

const majors = {
  'OKLAHOMA STATE UNIVERSITY': ['Business', 'Agriculture', 'Nursing', 'Mechanical Engineering', 'COMPUTER SCIENCE'],
};

const jobs = {
  'COMPUTER SCIENCE': [
    {
      title: 'SOFTWARE DEVELOPER',
      description: 'The primary role of a software developer is to develop and maintain software applications. The list of recommended classes to take at Oklahoma State University are below. Click on the class to view its description on the OSU website.',
      classes: [
        { code: 'MATHS 2144 - CALCULUS 1', link: 'http://catalog.okstate.edu/search/?P=MATH%202144' },
        { code: 'COMPUTER SCIENCE 1(A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113' },
        { code: 'CS 1113 - Computer Science I (A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113 ' },
        { code: 'General Education Courses' },
        { code: 'MATHS 2153 - Calculus II (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%202153' },
        { code: 'CS 2133 - Computer Science II', link: 'http://catalog.okstate.edu/search/?P=CS%202133' },
        { code: 'CS 2433 - C/C++ Programming', link: 'http://catalog.okstate.edu/search/?P=CS%202433' },
        { code: 'CS 3653 - Discrete Mathematics for Computer Science', link: 'http://catalog.okstate.edu/search/?P=CS%203653' },
        { code: 'MATHS 2163 - Calculus III', link: 'http://catalog.okstate.edu/search/?P=MATH%202163' },
        { code: 'CS 3353- Data Structures and Algorithm Analysis I', link: 'http://catalog.okstate.edu/search/?P=CS%203353' },
        { code: 'CS 3443 - Computer Systems', link: 'http://catalog.okstate.edu/search/?P=CS%203443' },
        { code: 'CS 4243 - Introduction to Computer Security', link: 'http://catalog.okstate.edu/search/?P=CS%204243' },
      ],
    },
  ],
};

const App = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const [jobDetails, setJobDetails] = useState(null);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCollege('');
    setSelectedMajor('');
    setJobDetails(null);
  };

  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
    setSelectedMajor('');
    setJobDetails(null);
  };

  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
    setJobDetails(null);
  };

  const handleJobClick = (job) => {
    setJobDetails(job);
  };

  return (
    <div className="container">
      <h1>STUDENT CAREER HELPER</h1>
      <h3>This tool allows users to choose their major and job field to view recommended classes, salary, job descriptions, internships, and job information.</h3>

      <div className="form-section">
        <h2>CHOOSE A STATE</h2>
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">SELECT A STATE TO VIEW THE TOP 5 SCHOOLS...</option>
          {Object.keys(colleges).map((state) => (
            <option key={state} value={state}>
              {state.toUpperCase()}
            </option>
          ))}
        </select>

        {selectedState && (
          <>
            <h2>TOP 5 COLLEGES</h2>
            <select value={selectedCollege} onChange={handleCollegeChange}>
              <option value="">SELECT A COLLEGE...</option>
              {colleges[selectedState].map((college) => (
                <option key={college} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedCollege && (
          <>
            <h2>TOP 5 MAJORS</h2>
            <select value={selectedMajor} onChange={handleMajorChange}>
              <option value="">SELECT A MAJOR...</option>
              {majors[selectedCollege].map((major) => (
                <option key={major} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedMajor && (
          <>
            <h2>TOP 5 MOST POPULAR JOB FIELDS OR ROLES IN YOUR PREFERRED MAJOR</h2>
            <ul className="job-list">
              {jobs[selectedMajor]?.map((job) => (
                <li key={job.title} onClick={() => handleJobClick(job)}>
                  {job.title}
                </li>
              ))}
            </ul>
          </>
        )}

        {jobDetails && (
          <div className="job-details">
            <h2>{jobDetails.title}</h2>
            <p>{jobDetails.description}</p>
            {jobDetails.classes && (
              <>
                <h3>Recommended Classes:</h3>
                <ul>
                  {jobDetails.classes.map((c) => (
                    <li key={c.code}>
                      <a href={c.link} target="_blank" rel="noopener noreferrer">
                        {c.code}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
