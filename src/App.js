import './App.css';
import Logo from './classroomPhoto.jpg';
import OSULogo from './OSUlogo.png';
import OULogo from './images.png';
import TULogo from './tu_law_logo.png'
import UCOLogo from './images-2.png'
import RSULogo from './images-3.png'
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
    { value: "OU", label: "University of Oklahoma"},
    { value: "UCO", label: "University of Central Oklahoma"},
    { value: "TU", label: "University of Tulsa"},
    { value: "RSU", label: "Rogers State University"},
  ];

  const majorOptions = [
    { value: "Choose", label: "Choose your major" },
    { value: "CS", label: "Computer Science" },
  ];

  const jobOptions = [
    { value: "Choose", label: "Choose desired job" },
    { value: "SE", label: "Software Engineer" },
    { value: "CE", label: "Cloud Engineer" },
    { value: "BD", label: "Backend Developer" },
    { value: "FD", label: "Full-Stack Developer" },
  ];

  // Job-specific recommended classes
  const jobClasses = {
    SE: [
      { code: 'MATHS 2144 - CALCULUS 1', link: 'http://catalog.okstate.edu/search/?P=MATH%202144' },
      { code: 'COMPUTER SCIENCE 1(A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113' },
      { code: 'CS 1113 - Computer Science I (A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113 ' },
      { code: 'General Education Courses' },
      { code: 'MATHS 2153 - Calculus II (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%202153' },
      { code: 'CS 2133 - Computer Science II', link: 'http://catalog.okstate.edu/search/?P=CS%202133' },
      { code: 'General Education Courses' },
      { code: 'CS 2433 - C/C++ Programming', link: 'http://catalog.okstate.edu/search/?P=CS%202433' },
      { code: 'CS 3653 - Discrete Mathematics for Computer Science', link: 'http://catalog.okstate.edu/search/?P=CS%203653' },
      { code: 'MATHS 2163 - Calculus III', link: 'http://catalog.okstate.edu/search/?P=MATH%202163' },
      { code: 'General Education Courses' },
      { code: 'CS 3353- Data Structures and Algorithm Analysis I', link: 'http://catalog.okstate.edu/search/?P=CS%203353' },
      { code: 'CS 3443 - Computer Systems', link: 'http://catalog.okstate.edu/search/?P=CS%203443' },
      { code: 'MATHS 3013 - Linear Algebra (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%203013' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4243 - Introduction to Computer Security', link: 'http://catalog.okstate.edu/search/?P=CS%204243' },
      { code: 'STAT 4033 - Engineering Statistics', link: 'http://catalog.okstate.edu/search/?P=STAT%204033' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3613 - Theoretical Foundations of Computing', link: 'http://catalog.okstate.edu/search/?P=CS%203613' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3363 - Organization of Programming Languages', link: 'http://catalog.okstate.edu/search/?P=CS%203363' },
      { code: 'CS 3513 - Numerical Methods for Digital Computers', link: 'http://catalog.okstate.edu/search/?P=CS%203513' },
      { code: '3 hours Upper-Division CS Elective, CS 4273 suggested', link: 'http://catalog.okstate.edu/search/?P=CS%204273' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4323 - Design and Implementation of Operating Systems I', link: 'http://catalog.okstate.edu/search/?P=CS%204323' },
      { code: 'CS 4883 - Social Issues in Computing', link: 'http://catalog.okstate.edu/search/?P=CS%204883' },
      { code: 'CS 4983 - Senior Capstone Project', link: 'http://catalog.okstate.edu/search/?P=CS%204983' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
    ],
    CE: [
      { code: 'MATHS 2144 - CALCULUS 1', link: 'http://catalog.okstate.edu/search/?P=MATH%202144' },
      { code: 'COMPUTER SCIENCE 1(A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113' },
      { code: 'CS 1113 - Computer Science I (A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113 ' },
      { code: 'General Education Courses' },
      { code: 'MATHS 2153 - Calculus II (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%202153' },
      { code: 'CS 2133 - Computer Science II', link: 'http://catalog.okstate.edu/search/?P=CS%202133' },
      { code: 'General Education Courses' },
      { code: 'CS 2433 - C/C++ Programming', link: 'http://catalog.okstate.edu/search/?P=CS%202433' },
      { code: 'CS 3653 - Discrete Mathematics for Computer Science', link: 'http://catalog.okstate.edu/search/?P=CS%203653' },
      { code: 'MATHS 2163 - Calculus III', link: 'http://catalog.okstate.edu/search/?P=MATH%202163' },
      { code: 'General Education Courses' },
      { code: 'CS 3353- Data Structures and Algorithm Analysis I', link: 'http://catalog.okstate.edu/search/?P=CS%203353' },
      { code: 'CS 3443 - Computer Systems', link: 'http://catalog.okstate.edu/search/?P=CS%203443' },
      { code: 'MATHS 3013 - Linear Algebra (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%203013' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4243 - Introduction to Computer Security', link: 'http://catalog.okstate.edu/search/?P=CS%204243' },
      { code: 'STAT 4033 - Engineering Statistics', link: 'http://catalog.okstate.edu/search/?P=STAT%204033' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3613 - Theoretical Foundations of Computing', link: 'http://catalog.okstate.edu/search/?P=CS%203613' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3363 - Organization of Programming Languages', link: 'http://catalog.okstate.edu/search/?P=CS%203363' },
      { code: 'CS 3513 - Numerical Methods for Digital Computers', link: 'http://catalog.okstate.edu/search/?P=CS%203513' },
      { code: '3 hours Upper-Division CS Elective, CS 4273 suggested', link: 'http://catalog.okstate.edu/search/?P=CS%204273' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4323 - Design and Implementation of Operating Systems I', link: 'http://catalog.okstate.edu/search/?P=CS%204323' },
      { code: 'CS 4883 - Social Issues in Computing', link: 'http://catalog.okstate.edu/search/?P=CS%204883' },
      { code: 'CS 4983 - Senior Capstone Project', link: 'http://catalog.okstate.edu/search/?P=CS%204983' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
    ],
    BD: [
      { code: 'MATHS 2144 - CALCULUS 1', link: 'http://catalog.okstate.edu/search/?P=MATH%202144' },
      { code: 'COMPUTER SCIENCE 1(A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113' },
      { code: 'CS 1113 - Computer Science I (A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113 ' },
      { code: 'General Education Courses' },
      { code: 'MATHS 2153 - Calculus II (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%202153' },
      { code: 'CS 2133 - Computer Science II', link: 'http://catalog.okstate.edu/search/?P=CS%202133' },
      { code: 'General Education Courses' },
      { code: 'CS 2433 - C/C++ Programming', link: 'http://catalog.okstate.edu/search/?P=CS%202433' },
      { code: 'CS 3653 - Discrete Mathematics for Computer Science', link: 'http://catalog.okstate.edu/search/?P=CS%203653' },
      { code: 'MATHS 2163 - Calculus III', link: 'http://catalog.okstate.edu/search/?P=MATH%202163' },
      { code: 'General Education Courses' },
      { code: 'CS 3353- Data Structures and Algorithm Analysis I', link: 'http://catalog.okstate.edu/search/?P=CS%203353' },
      { code: 'CS 3443 - Computer Systems', link: 'http://catalog.okstate.edu/search/?P=CS%203443' },
      { code: 'MATHS 3013 - Linear Algebra (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%203013' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4243 - Introduction to Computer Security', link: 'http://catalog.okstate.edu/search/?P=CS%204243' },
      { code: 'STAT 4033 - Engineering Statistics', link: 'http://catalog.okstate.edu/search/?P=STAT%204033' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3613 - Theoretical Foundations of Computing', link: 'http://catalog.okstate.edu/search/?P=CS%203613' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3363 - Organization of Programming Languages', link: 'http://catalog.okstate.edu/search/?P=CS%203363' },
      { code: 'CS 3513 - Numerical Methods for Digital Computers', link: 'http://catalog.okstate.edu/search/?P=CS%203513' },
      { code: '3 hours Upper-Division CS Elective, CS 4273 suggested', link: 'http://catalog.okstate.edu/search/?P=CS%204273' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4323 - Design and Implementation of Operating Systems I', link: 'http://catalog.okstate.edu/search/?P=CS%204323' },
      { code: 'CS 4883 - Social Issues in Computing', link: 'http://catalog.okstate.edu/search/?P=CS%204883' },
      { code: 'CS 4983 - Senior Capstone Project', link: 'http://catalog.okstate.edu/search/?P=CS%204983' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
    ],
    FD: [
      { code: 'MATHS 2144 - CALCULUS 1', link: 'http://catalog.okstate.edu/search/?P=MATH%202144' },
      { code: 'COMPUTER SCIENCE 1(A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113' },
      { code: 'CS 1113 - Computer Science I (A)', link: 'http://catalog.okstate.edu/search/?P=CS%201113 ' },
      { code: 'General Education Courses' },
      { code: 'MATHS 2153 - Calculus II (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%202153' },
      { code: 'CS 2133 - Computer Science II', link: 'http://catalog.okstate.edu/search/?P=CS%202133' },
      { code: 'General Education Courses' },
      { code: 'CS 2433 - C/C++ Programming', link: 'http://catalog.okstate.edu/search/?P=CS%202433' },
      { code: 'CS 3653 - Discrete Mathematics for Computer Science', link: 'http://catalog.okstate.edu/search/?P=CS%203653' },
      { code: 'MATHS 2163 - Calculus III', link: 'http://catalog.okstate.edu/search/?P=MATH%202163' },
      { code: 'General Education Courses' },
      { code: 'CS 3353- Data Structures and Algorithm Analysis I', link: 'http://catalog.okstate.edu/search/?P=CS%203353' },
      { code: 'CS 3443 - Computer Systems', link: 'http://catalog.okstate.edu/search/?P=CS%203443' },
      { code: 'MATHS 3013 - Linear Algebra (A)', link: 'http://catalog.okstate.edu/search/?P=MATH%203013' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4243 - Introduction to Computer Security', link: 'http://catalog.okstate.edu/search/?P=CS%204243' },
      { code: 'STAT 4033 - Engineering Statistics', link: 'http://catalog.okstate.edu/search/?P=STAT%204033' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3613 - Theoretical Foundations of Computing', link: 'http://catalog.okstate.edu/search/?P=CS%203613' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 3363 - Organization of Programming Languages', link: 'http://catalog.okstate.edu/search/?P=CS%203363' },
      { code: 'CS 3513 - Numerical Methods for Digital Computers', link: 'http://catalog.okstate.edu/search/?P=CS%203513' },
      { code: '3 hours Upper-Division CS Elective, CS 4273 suggested', link: 'http://catalog.okstate.edu/search/?P=CS%204273' },
      { code: 'Major, College, and Elective courses' },
      { code: 'CS 4323 - Design and Implementation of Operating Systems I', link: 'http://catalog.okstate.edu/search/?P=CS%204323' },
      { code: 'CS 4883 - Social Issues in Computing', link: 'http://catalog.okstate.edu/search/?P=CS%204883' },
      { code: 'CS 4983 - Senior Capstone Project', link: 'http://catalog.okstate.edu/search/?P=CS%204983' },
      { code: '3 hours Upper-Division CS Elective' },
      { code: 'Major, College, and Elective courses' },
    ],
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
        {/* Left side: Form selection */}
        <div className="left-sidebar">
          <div className="form-section">
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
              <label htmlFor="inputGroupSelect03">Choose a major:</label>
              <Form.Select id="inputGroupSelect03" size="lg" onChange={handleMajorChange}>
                {majorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </div>

            <div className="form-group">
              <label htmlFor="inputGroupSelect04">Desired Job:</label>
              <Form.Select id="inputGroupSelect04" size="lg" onChange={handleJobChange}>
                {jobOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>

        {/* Right side: Job details */}
        <div className="right-sidebar">
          {selectedJob && selectedJob !== 'Choose' && (
            <>
              <div className="job-description-classes">
                <div className="job-description">
                  <h2>Job Description</h2>
                  <p>{jobDescriptions[selectedJob]}</p>
                </div>
                <div className="recommended-classes">
                  <h2>Recommended Classes</h2>
                  <ul>
                    {jobClasses[selectedJob].map((classItem, index) => (
                      <li key={index}>
                        {classItem.link ? <a href={classItem.link}>{classItem.code}</a> : classItem.code}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
