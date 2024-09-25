import './App.css';
import Logo from './classroomPhoto.jpg';
import OSULogo from './OSUlogo.png';
import OULogo from './images.png';
import TULogo from './tu_law_logo.png';
import UCOLogo from './images-2.png';
import RSULogo from './images-3.png';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function App() {
  const [selectedJob, setSelectedJob] = useState(''); // State to track selected job
  const [selectedSchool, setSelectedSchool] = useState(''); // State to track selected school
  const [selectedMajor, setSelectedMajor] = useState(''); // State to track selected major

  const stateOptions = [
    { value: "Choose", label: "Choose your state" },
    { value: "OK", label: "Oklahoma" },
  ];

  const schoolOptions = [
    { value: "Choose", label: "Select your University" },
    { value: "OSU", label: "Oklahoma State University" },
    { value: "OU", label: "University of Oklahoma" },
    { value: "UCO", label: "University of Central Oklahoma" },
    { value: "TU", label: "University of Tulsa" },
    { value: "RSU", label: "Rogers State University" },
  ];

  const majorOptions = [
    { value: "Choose", label: "Choose your major" },
    { value: "CS", label: "Computer Science" },
    // Add more majors as needed
  ];

  const jobOptions = [
    { value: "Choose", label: "Choose desired job" },
    { value: "SE", label: "Software Engineer" },
    { value: "CE", label: "Cloud Engineer" },
    { value: "BD", label: "Backend Developer" },
    { value: "FD", label: "Full-Stack Developer" },
  ];

  // Job-specific recommended classes organized by year and semester
  const jobClasses = {
    SE: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "https://link_to_calculus_1" },
          { name: "CS 1113 - Computer Science I (A)", link: "https://link_to_cs1" },
        ],
        spring: [
          { name: "General Education Courses", link: "https://link_to_general_ed" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "https://link_to_calculus_2" },
          { name: "CS 2133 - Computer Science II", link: "https://link_to_cs2" },
        ],
        spring: [
          { name: "CS 2433 - C/C++ Programming", link: "https://link_to_cplusplus" },
          { name: "CS 3653 - Discrete Mathematics for Computer Science", link: "https://link_to_discrete_math" },
        ],
      },
      junior: {
        fall: [
          { name: "MATH 2163 - Calculus III", link: "https://link_to_calculus_3" },
          { name: "CS 3353 - Data Structures and Algorithm Analysis I", link: "https://link_to_data_structures" },
        ],
        spring: [
          { name: "CS 3443 - Computer Systems", link: "https://link_to_computer_systems" },
          { name: "MATH 3013 - Linear Algebra", link: "https://link_to_linear_algebra" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "https://link_to_security" },
          { name: "STAT 4033 - Engineering Statistics", link: "https://link_to_statistics" },
        ],
        spring: [
          { name: "CS 3613 - Theoretical Foundations of Computing", link: "https://link_to_theoretical_foundations" },
          { name: "CS 3363 - Organization of Programming Languages", link: "https://link_to_programming_languages" },
          { name: "CS 4983 - Senior Capstone Project", link: "https://link_to_capstone_project" },
        ],
      },
    },
    CE: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "https://link_to_calculus_1" },
          { name: "CS 1113 - Computer Science I (A)", link: "https://link_to_cs1" },
        ],
        spring: [
          { name: "General Education Courses", link: "https://link_to_general_ed" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "https://link_to_calculus_2" },
          { name: "CS 2133 - Computer Science II", link: "https://link_to_cs2" },
        ],
        spring: [
          { name: "CS 2433 - C/C++ Programming", link: "https://link_to_cplusplus" },
          { name: "CS 3653 - Discrete Mathematics for Computer Science", link: "https://link_to_discrete_math" },
        ],
      },
      junior: {
        fall: [
          { name: "MATH 2163 - Calculus III", link: "https://link_to_calculus_3" },
          { name: "CS 3353 - Data Structures and Algorithm Analysis I", link: "https://link_to_data_structures" },
        ],
        spring: [
          { name: "CS 3443 - Computer Systems", link: "https://link_to_computer_systems" },
          { name: "MATH 3013 - Linear Algebra", link: "https://link_to_linear_algebra" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "https://link_to_security" },
          { name: "STAT 4033 - Engineering Statistics", link: "https://link_to_statistics" },
        ],
        spring: [
          { name: "CS 3613 - Theoretical Foundations of Computing", link: "https://link_to_theoretical_foundations" },
          { name: "CS 3363 - Organization of Programming Languages", link: "https://link_to_programming_languages" },
          { name: "CS 4983 - Senior Capstone Project", link: "https://link_to_capstone_project" },
        ],
      },
    },
    BD: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "https://link_to_calculus_1" },
          { name: "CS 1113 - Computer Science I (A)", link: "https://link_to_cs1" },
        ],
        spring: [
          { name: "General Education Courses", link: "https://link_to_general_ed" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "https://link_to_calculus_2" },
          { name: "CS 2133 - Computer Science II", link: "https://link_to_cs2" },
        ],
        spring: [
          { name: "CS 2433 - C/C++ Programming", link: "https://link_to_cplusplus" },
          { name: "CS 3653 - Discrete Mathematics for Computer Science", link: "https://link_to_discrete_math" },
        ],
      },
      junior: {
        fall: [
          { name: "MATH 2163 - Calculus III", link: "https://link_to_calculus_3" },
          { name: "CS 3353 - Data Structures and Algorithm Analysis I", link: "https://link_to_data_structures" },
        ],
        spring: [
          { name: "CS 3443 - Computer Systems", link: "https://link_to_computer_systems" },
          { name: "MATH 3013 - Linear Algebra", link: "https://link_to_linear_algebra" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "https://link_to_security" },
          { name: "STAT 4033 - Engineering Statistics", link: "https://link_to_statistics" },
        ],
        spring: [
          { name: "CS 3613 - Theoretical Foundations of Computing", link: "https://link_to_theoretical_foundations" },
          { name: "CS 3363 - Organization of Programming Languages", link: "https://link_to_programming_languages" },
          { name: "CS 4983 - Senior Capstone Project", link: "https://link_to_capstone_project" },
        ],
      },
    },
    FD: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "https://link_to_calculus_1" },
          { name: "CS 1113 - Computer Science I (A)", link: "https://link_to_cs1" },
        ],
        spring: [
          { name: "General Education Courses", link: "https://link_to_general_ed" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "https://link_to_calculus_2" },
          { name: "CS 2133 - Computer Science II", link: "https://link_to_cs2" },
        ],
        spring: [
          { name: "CS 2433 - C/C++ Programming", link: "https://link_to_cplusplus" },
          { name: "CS 3653 - Discrete Mathematics for Computer Science", link: "https://link_to_discrete_math" },
        ],
      },
      junior: {
        fall: [
          { name: "MATH 2163 - Calculus III", link: "https://link_to_calculus_3" },
          { name: "CS 3353 - Data Structures and Algorithm Analysis I", link: "https://link_to_data_structures" },
        ],
        spring: [
          { name: "CS 3443 - Computer Systems", link: "https://link_to_computer_systems" },
          { name: "MATH 3013 - Linear Algebra", link: "https://link_to_linear_algebra" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "https://link_to_security" },
          { name: "STAT 4033 - Engineering Statistics", link: "https://link_to_statistics" },
        ],
        spring: [
          { name: "CS 3613 - Theoretical Foundations of Computing", link: "https://link_to_theoretical_foundations" },
          { name: "CS 3363 - Organization of Programming Languages", link: "https://link_to_programming_languages" },
          { name: "CS 4983 - Senior Capstone Project", link: "https://link_to_capstone_project" },
        ],
      },
    },
  };
  
  // Job-specific descriptions
  const jobDescriptions = {
    SE: 'Software Engineers design, develop, and maintain software systems. They work closely with clients and teams to build efficient solutions.',
    CE: 'Cloud Engineers specialize in cloud computing platforms and are responsible for managing and designing cloud architecture.',
    BD: 'Backend Developers focus on the server-side of applications, working on databases, APIs, and ensuring server functionality.',
    FD: 'Full-Stack Developers handle both the front-end and back-end of a web application, integrating various technologies to deliver seamless applications.',
  };

  // Event handler for job selection
  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
  };

  // Event handler for school selection
  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
  };

  // Event handler for major selection
  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
  };

  // Function to dynamically set the background image
  const getBackgroundImage = () => {
    switch (selectedSchool) {
      case 'OSU':
        return OSULogo;
      case 'OU':
        return OULogo;
      case 'TU':
        return TULogo;
      case 'UCO':
        return UCOLogo;
      case 'RSU':
        return RSULogo;
      default:
        return Logo; // Default background
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 id="appTitle">Student Career Helper</h1>

      <div className="container-fluid main-layout">
        {/* Left side: Job description and selection */}
        <div className="left-sidebar">
          <h2>Choose Your Path</h2>
          <div className="form-group">
            <label htmlFor="inputGroupSelect01">State:</label>
            <Form.Select id="inputGroupSelect01" size="lg">
              {stateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="form-group">
            <label htmlFor="inputGroupSelect02">School:</label>
            <Form.Select id="inputGroupSelect02" size="lg" onChange={handleSchoolChange}>
              {schoolOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="form-group">
            <label htmlFor="inputGroupSelect03">Major:</label>
            <Form.Select id="inputGroupSelect03" size="lg" onChange={handleMajorChange}>
              {majorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="form-group">
            <label htmlFor="inputGroupSelect04">Job:</label>
            <Form.Select id="inputGroupSelect04" size="lg" onChange={handleJobChange}>
              {jobOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

        </div>

        {/* Right side: Job description and recommended classes */}
        <div className="right-sidebar">
          {selectedJob && selectedJob !== 'Choose' && (
            <div className="job-description-classes">
              <div className="job-description">
                <h2>Job Description</h2>
                <p>{jobDescriptions[selectedJob]}</p>
              </div>
              <div className="recommended-classes">
                <h2>Recommended Classes</h2>
                <ul>
                  {Object.entries(jobClasses[selectedJob]).map(([year, semesters]) => (
                    <li key={year}>
                      <strong>{year.charAt(0).toUpperCase() + year.slice(1)}</strong>
                      <ul>
                        {Object.entries(semesters).map(([semester, classes]) => (
                          <li key={semester}>
                            <strong>{semester.charAt(0).toUpperCase() + semester.slice(1)} Semester</strong>
                            <ul>
                              {classes.map((course) => (
                                <li key={course.link}>
                                  <a href={course.link} target="_blank" rel="noopener noreferrer">{course.name}</a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
