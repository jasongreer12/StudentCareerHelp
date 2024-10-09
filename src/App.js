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
    { value: "IS", label: "Information Security Engineer" },
    { value: "FD", label: "Full-Stack Developer" },
  ];

 

  // Job-specific recommended classes organized by year and semester
  const jobClasses = {
    SE: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link:"http://catalog.okstate.edu/search/?P=ENGL%201113"},
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713"},
          { name: "Genral Education courses"},
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144"},
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213"},
          { name: "Humanities"},
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713"},
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113"},
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333"},
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163"},
          { name: "Lab Science", link: ""},
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013"},
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113"},
          { name: "Upper - Division"},
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363"},
          { name: "ELectives"},
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433"},
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033"},
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273"},
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373"},
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713"},
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513"},
        ],
      },
    },
    CE: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link:"http://catalog.okstate.edu/search/?P=ENGL%201113"},
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713"},
          { name: "Genral Education courses"},
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144"},
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213"},
          { name: "Humanities"},
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713"},
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113"},
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333"},
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163"},
          { name: "Lab Science", link: ""},
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013"},
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113"},
          { name: "Upper - Division"},
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363"},
          { name: "ELectives"},
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433"},
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033"},
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273"},
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373"},
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713"},
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513"},
        ],
      },
    },
    IS: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link:"http://catalog.okstate.edu/search/?P=ENGL%201113"},
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713"},
          { name: "Genral Education courses"},
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144"},
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213"},
          { name: "Humanities"},
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713"},
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113"},
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333"},
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163"},
          { name: "Lab Science", link: ""},
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013"},
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113"},
          { name: "Upper - Division"},
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363"},
          { name: "ELectives"},
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433"},
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033"},
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273"},
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373"},
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713"},
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513"},
        ],
      },
    },
    FD: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link:"http://catalog.okstate.edu/search/?P=ENGL%201113"},
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713"},
          { name: "Genral Education courses"},
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144"},
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213"},
          { name: "Humanities"},
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713"},
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113"},
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333"},
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163"},
          { name: "Lab Science", link: ""},
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013"},
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113"},
          { name: "Upper - Division"},
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363"},
          { name: "ELectives"},
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433"},
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033"},
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273"},
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373"},
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713"},
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513"},
        ],
      },
    },
  };
  
  // Job-specific descriptions
  const jobDescriptions = {
    SE: 'Software Engineers design, develop, and maintain software systems. They work closely with clients and teams to build efficient solutions.',
    CE: 'Cloud Engineers specialize in cloud computing platforms and are responsible for managing and designing cloud architecture.',
    IS: 'Responsible for designing, implementing, and maintaining an organizations security systems to protect its data and networks from unauthorized access cyber threats and security breaches. Key responsibilities include identifying vulnerabilities, developing security measures, conducting risk assessments, and ensuring compliance with industry security standards and regulations. Information Security Engineers also monitor network traffic, respond to security incidents, and work with IT teams to implement security best practices, firewalls, encryption, and intrusion detection systems.',
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
