import './App.css';
import Logo from './classroomPhoto.jpg';
import OSULogo from './OSUlogo.png';
import OULogo from './images.png';
import TULogo from './tu_law_logo.png';
import UCOLogo from './images-2.png';
import RSULogo from './images-3.png';
import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function App() {
  const [jobsData, setJobsData] = useState(null);
  const [states, setStates] = useState([]);
  const [schools, setSchools] = useState([]);
  const [majors, setMajors] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectedState, setSelectedState] = useState('Choose');
  const [selectedSchool, setSelectedSchool] = useState('Choose');
  const [selectedMajor, setSelectedMajor] = useState('Choose');
  const [selectedJob, setSelectedJob] = useState('Choose');
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchFilteredData = async () => {
      const spinner = document.getElementById('spinner');
      if (spinner) {
        spinner.style.display = 'flex';
      }
      try {
        const queryParams = new URLSearchParams({
          job: selectedJob
        }).toString();
        if (selectedState != "Choose" && selectedSchool != "Choose" && selectedMajor != "Choose" && selectedJob != "Choose") { // need to set this up to also pass job code in query string
          const response = await fetch(`http://localhost:3000/filter?${queryParams}`);
          //console.log(`query params = ${queryParams}`);
          const data = await response.json();
          //console.log(`data = ${JSON.stringify(data, null, 2)}`);
          setJobsData(data);
        }
      } catch (err) {
        setError(err.message);
      }
      if (spinner) {
        spinner.style.display = 'none';
      }
    };
    if (selectedState || selectedSchool || selectedMajor || selectedJob) {
      fetchFilteredData();
    }
  }, [selectedState, selectedSchool, selectedMajor, selectedJob]); // Dependencies for filter effect


  const jobDescriptions = {
    SE: (
      <p>
        Software Engineers design, develop, and maintain software systems. They work closely with clients and teams to build efficient solutions.
        Learn more about this role on{' '}.
        <a href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" target="_blank" rel="noopener noreferrer">BLS.gov</a>.

        Some job and internship opportunities are included in the link below: {''}
        <a href="https://www.linkedin.com/jobs/software-engineering-intern-jobs/?currentJobId=4037398237" target="_blank" rel="noopener noreferrer"> LinkedIN</a>.

        Certifications are essentials in developing your career as a software engineer and there are some lists of certifications that you can get to be a software engineer included in the link attached {''}.
        <a href="https://www.indeed.com/career-advice/career-development/software-engineering-certifications" target="_blank" rel="noopener noreferrrer"> Certifications  </a>.
      </p>

    ),
    CE: (
      <p>
        Cloud Engineers specialize in cloud computing platforms and are responsible for managing and designing cloud architecture. Find out more from{' '}
        <a href="https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm" target="_blank" rel="noopener noreferrer">BLS.gov</a>.
      </p>
    ),
    IS: (
      <p>
        Responsible for designing, implementing, and maintaining an organization's security systems to protect its data and networks from unauthorized access. Learn more on{' '}
        <a href="https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm" target="_blank" rel="noopener noreferrer">BLS.gov</a>.
      </p>
    ),
    FD: (
      <p>
        Full-Stack Developers handle both the front-end and back-end of a web application, integrating various technologies to deliver seamless applications. Learn more about this role from{' '}
        <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" target="_blank" rel="noopener noreferrer">BLS.gov</a>.
      </p>
    ),
  };
  // Job-specific recommended classes organized by year and semester

  const courseScheduleCompSci = {
    freshman: {
      fall: [
        { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
        { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
        { name: "ENGL 113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
        { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713" },
        { name: "General Education courses" },
      ],
      spring: [
        { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
        { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144" },
        { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
        { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213" },
        { name: "Humanities" },
      ],
    },
    sophomore: {
      fall: [
        { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
        { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
        { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713" },
        { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113" },
        { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333" },
      ],
      spring: [
        { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
        { name: "Humanities", link: "" },
        { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
        { name: "Lab Science", link: "" },
      ],
    },
    junior: {
      fall: [
        { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
        { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
        { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013" },
        { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113" },
        { name: "Upper - Division" },
      ],
      spring: [
        { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
        { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
        { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363" },
        { name: "Electives" },
        { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
      ],
    },
    senior: {
      fall: [
        { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
        { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
        { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033" },
        { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273" },
        { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373" },
      ],
      spring: [
        { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
        { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
        { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
        { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713" },
        { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513" },
      ],
    }
  };

  const courseScheduleCloudEng = {
    freshman: {
      fall: [
        { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
        { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
        { name: "ENGL 113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
        { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713" },
        { name: "General Education courses" },
      ],
      spring: [
        { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
        { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144" },
        { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
        { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213" },
        { name: "Humanities" },
      ],
    },
    sophomore: {
      fall: [
        { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
        { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
        { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713" },
        { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113" },
        { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333" },
      ],
      spring: [
        { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
        { name: "Humanities", link: "" },
        { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
        { name: "Lab Science", link: "" },
      ],
    },
    junior: {
      fall: [
        { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
        { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
        { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013" },
        { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113" },
        { name: "Upper - Division" },
      ],
      spring: [
        { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
        { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
        { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363" },
        { name: "Electives" },
        { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
      ],
    },
    senior: {
      fall: [
        { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
        { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
        { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033" },
        { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273" },
        { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373" },
      ],
      spring: [
        { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
        { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
        { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
        { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713" },
        { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513" },
      ],
    }
  };

  const courseScheduleInfSecur = {
    freshman: {
      fall: [
        { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
        { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
        { name: "ENGL 113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
        { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713" },
        { name: "General Education courses" },
      ],
      spring: [
        { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
        { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144" },
        { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
        { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213" },
        { name: "Humanities" },
      ],
    },
    sophomore: {
      fall: [
        { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
        { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
        { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713" },
        { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113" },
        { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333" },
      ],
      spring: [
        { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
        { name: "Humanities", link: "" },
        { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
        { name: "Lab Science", link: "" },
      ],
    },
    junior: {
      fall: [
        { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
        { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
        { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013" },
        { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113" },
        { name: "Upper - Division" },
      ],
      spring: [
        { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
        { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
        { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363" },
        { name: "Electives" },
        { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
      ],
    },
    senior: {
      fall: [
        { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
        { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
        { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033" },
        { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273" },
        { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373" },
      ],
      spring: [
        { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
        { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
        { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
        { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713" },
        { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513" },
      ],
    }
  };

  // NOTE: need to set this up to have each class schedule correlate with an occupation title in DB
  const jobClasses = {
    SE: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713" },
          { name: "General Education courses" },
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144" },
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213" },
          { name: "Humanities" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713" },
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113" },
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333" },
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
          { name: "Lab Science", link: "" },
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013" },
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113" },
          { name: "Upper - Division" },
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363" },
          { name: "Electives" },
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033" },
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273" },
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373" },
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713" },
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513" },
        ],
      },
    },
    CE: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713" },
          { name: "General Education courses" },
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144" },
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213" },
          { name: "Humanities" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713" },
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113" },
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333" },
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
          { name: "Lab Science", link: "" },
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013" },
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113" },
          { name: "Upper - Division" },
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363" },
          { name: "Electives" },
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033" },
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273" },
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373" },
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713" },
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513" },
        ],
      },
    },
    IS: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713" },
          { name: "General Education courses" },
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144" },
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213" },
          { name: "Humanities" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713" },
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113" },
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333" },
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
          { name: "Lab Science", link: "" },
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013" },
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113" },
          { name: "Upper - Division" },
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363" },
          { name: "Electives" },
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033" },
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273" },
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373" },
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713" },
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513" },
        ],
      },
    },
    FD: {
      freshman: {
        fall: [
          { name: "MATH 2144 - Calculus I", link: "http://catalog.okstate.edu/search/?search=MATH+2144+-+Calculus+I" },
          { name: "CS 1103 - Computer Science I (A)", link: "http://catalog.okstate.edu/search/?P=CS%201103" },
          { name: "ENGL 113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?search=SPCH+2713" },
          { name: "General Education courses" },
        ],
        spring: [
          { name: "HIST 1493", link: "http://catalog.okstate.edu/search/?P=HIST%201493" },
          { name: "MATH 2144", link: "http://catalog.okstate.edu/search/?P=MATH%202144" },
          { name: "CS 1113", link: "http://catalog.okstate.edu/search/?P=CS%201113" },
          { name: "ENGL 1213", link: "http://catalog.okstate.edu/search/?P=ENGL%201213" },
          { name: "Humanities" },
        ],
      },
      sophomore: {
        fall: [
          { name: "MATH 2153 - Calculus II", link: "http://catalog.okstate.edu/search/?P=MATH%202153" },
          { name: "CS 2433", link: "http://catalog.okstate.edu/search/?P=CS%202433" },
          { name: "SPCH 2713", link: "http://catalog.okstate.edu/search/?P=SPCH%202713" },
          { name: "POLS 1113", link: "http://catalog.okstate.edu/search/?P=POLS%201113" },
          { name: "GEOG 3333", link: "http://catalog.okstate.edu/search/?P=GEOG%203333" },
        ],
        spring: [
          { name: "CS 2133", link: "http://catalog.okstate.edu/search/?P=CS%202133" },
          { name: "Humanities", link: "" },
          { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
          { name: "Lab Science", link: "" },
        ],
      },
      junior: {
        fall: [
          { name: "CS 3443", link: "http://catalog.okstate.edu/search/?P=CS%203443" },
          { name: "CS 3653", link: "http://catalog.okstate.edu/search/?P=CS%203653" },
          { name: "MATH 3013", link: "http://catalog.okstate.edu/search/?P=MATH%203013" },
          { name: "BCOM 3113", link: "http://catalog.okstate.edu/search/?P=BCOM%203113" },
          { name: "Upper - Division" },
        ],
        spring: [
          { name: "CS 3613", link: "http://catalog.okstate.edu/search/?P=CS%203613" },
          { name: "CS 3513", link: "http://catalog.okstate.edu/search/?P=CS%203513" },
          { name: "CS 3363", link: "http://catalog.okstate.edu/search/?P=CS%203363" },
          { name: "Electives" },
          { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
        ],
      },
      senior: {
        fall: [
          { name: "CS 4243 - Introduction to Computer Security", link: "http://catalog.okstate.edu/search/?P=CS%204243" },
          { name: "CS 3353", link: "http://catalog.okstate.edu/search/?P=CS%203353" },
          { name: "STAT 4033", link: "http://catalog.okstate.edu/search/?P=STAT%204033" },
          { name: "CS 4273", link: "http://catalog.okstate.edu/search/?P=CS%204273" },
          { name: "CS 4373", link: "http://catalog.okstate.edu/search/?P=CS%204373" },
        ],
        spring: [
          { name: "CS 4323", link: "http://catalog.okstate.edu/search/?P=CS%204323" },
          { name: "CS 4883", link: "http://catalog.okstate.edu/search/?P=CS%204883" },
          { name: "CS 4983", link: "http://catalog.okstate.edu/search/?P=CS%204983" },
          { name: "MSIS 4713", link: "http://catalog.okstate.edu/search/?P=MSIS%204713" },
          { name: "CS 4513", link: "http://catalog.okstate.edu/search/?P=CS%204513" },
        ],
      },
    },
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

  const getSelectedJobCourses = () => {
    console.log('getselectedjobcourses called');
    switch (selectedJob) {
      case 'Blockchain Engineers':
      case 'Business Intelligence Analysts':
      case 'Computer Programmers':
      case 'Computer Systems Analysts':
      case 'Computer Systems Engineer/Architects':
      case 'Computer User Support Specialists':
      case 'Software Developers':
      case 'Software Quality Assurance Analysts and Testers':
      case 'Video Game Designers':
      case 'Web Developers':
      case 'Web Administrators':
      case 'Web and Digital Interface Designers':
      case 'Data Warehousing Specialists':
      case 'Database Administrators':
      case 'Database Architects':
      case 'Network and Computer Systems Administrators':
      case 'Data Scientists':
      case 'Business Intelligence Analysts':
      case 'Computer Hardware Engineers':
      case 'Microsystems Engineers':
      case 'Quality Control Systems Managers':
      case 'Intelligence Analysts':
      case 'Computer and Information Research Scientists':
      case 'Computer Science Teachers, Postsecondary':
      case 'Computer, Automated Teller, and Office Machine Repairers':
      case 'Data Entry Keyers':
        return courseScheduleCompSci;
      case 'Information Security Analysts':
      case 'Information Security Engineers':
        return courseScheduleInfSecur;
      case 'Computer Network Architects':
      case 'Computer Network Support Specialists':
        return courseScheduleCloudEng;
    }
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 id="appTitle">Student Career Helper</h1>


      <div className="container-fluid main-layout">
        {/* Left side: Job description and selection */}
        <div className="left-sidebar">
          <h2>Choose Your Path</h2>
          <div className="form-group">
            <label htmlFor="inputGroupSelect01">State:</label>
            <Form.Select id="inputGroupSelect01" size="lg" className="form-select" value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}>
              <option value="Choose" disabled >Choose your state</option>
              {states.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="form-group">
            <label htmlFor="inputGroupSelect02">School:</label>
            <Form.Select id="inputGroupSelect02" size="lg" onChange={(e) => {
              handleSchoolChange(e);
              setSelectedSchool(e.target.value);
            }}
              value={selectedSchool}>
              <option value="Choose" disabled >Choose your school</option>
              {schools.map((school, index) => (
                <option key={index} value={school.SchoolName}>
                  {school.SchoolName}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="form-group">
            <label htmlFor="inputGroupSelect03">Major:</label>
            <Form.Select id="inputGroupSelect03" size="lg" className="form-select" value={selectedMajor}
              onChange={(e) => setSelectedMajor(e.target.value)}>
              <option value="Choose" disabled >Choose your major</option>
              {majors.map((major, index) => (
                <option key={index} value={major.MajorName}>
                  {major.MajorName}
                </option>
              ))}
            </Form.Select>



          </div>

          <div className="form-group">
            <label htmlFor="inputGroupSelect04">Job:</label>
            <Form.Select id="inputGroupSelect04" size="lg" className="form-select" value={selectedJob}
              onChange={(e) => {
                setSelectedJob(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="Choose" disabled >Choose desired job</option>
              {jobs.map((job, index) => (
                <option key={index} value={job.Occupation}>
                  {job.Occupation}
                </option>
              ))}
            </Form.Select>

          </div>

          {/*<button id="saveButton">Save Options</button>*/}

        </div>



        {/* Right side: Recommended classes and Job description */}
        <div className="right-sidebar">
          {selectedState != "Choose" && selectedSchool != "Choose" && selectedMajor != "Choose" && selectedJob != "Choose"
            ? (
              <div className="classes-job-description">
                <div className="text-center">
                  <div class="spinner-border text-primary" id="spinner" role="status" style={{position: "absolute", height: "5rem", width: "5rem", display: "none", left: "50%", top: "50%"}}> {/**spinner to show while data is being fetched */}
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div className="job-description">
                  <h2>Recommended classes</h2>
                  <ul>
                    {Object.entries(getSelectedJobCourses()).map(([year, semesters]) => (
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
                <div className="recommended-classes">
                  <h2>Job description</h2>
                  {jobsData ? ( // if jobs data is not empty, populate container with info
                    <div className="row">
                      <div className="col-md-12">
                        <h3>{jobsData.apiData.title}</h3>
                        {jobsData.apiData.also_called?.title ? // check if there are other titles. if so, parse them. if not, skip. 
                          <p>
                            <strong>Other titles:</strong> {jobsData.apiData.also_called.title.map((otherTitle, index) => (
                              <span key={index}>
                                {otherTitle}{index < jobsData.apiData.also_called.title.length - 1 && ', '}
                              </span>
                            ))}
                          </p> : (<p></p>)} {/* end of ternary check */}
                        <p><strong>What they do:</strong> {jobsData.jobDescr}</p>
                        <p><strong>On the Job Tasks:</strong></p>
                        <ul>
                          {jobsData.apiData.on_the_job.task.map((task, index) => (
                            <li key={index}>{task}</li>
                          ))}
                        </ul>
                        <p><strong>Education required:</strong> {jobsData.education}</p>
                        <p><strong>Average Salary:</strong> ${jobsData.outlook.salary.annual_median}</p>
                      </div>
                    </div>
                  ) : (
                    <p><strong>No job data available</strong></p>
                  )}

                </div>
              </div>

            )
            : null} {/* if options arent selected, display nothing*/}
        </div>
      </div>
    </div >

  );
}

export default App;
