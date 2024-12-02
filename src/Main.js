import './Main.css';
import Logo from './classroomPhoto.jpg';
import OSULogo from './OSUlogo.png';
import OULogo from './images.png';
import TULogo from './tu_law_logo.png';
import UCOLogo from './images-2.png';
import RSULogo from './images-3.png';
import D3TreeGraph from './D3TreeGraph.js';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


function Main() {
  const [jobsData, setJobsData] = useState(null);
  const [states, setStates] = useState([]);
  const [schools, setSchools] = useState([]);
  const [majors, setMajors] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectedState, setSelectedState] = useState('Choose');
  const [selectedSchool, setSelectedSchool] = useState('Choose');
  const [selectedMajor, setSelectedMajor] = useState('Choose');
  const [selectedJob, setSelectedJob] = useState('Choose');
  const [selectedResource, setSelectedResource] = useState('');
  const[showTree, setTree] = useState(false);
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

  const sidebarOptions = [
    { value: "aboutus", label: "About Us", description: "About Us at Student Career Helper" },
    { value: "faq", label: "FAQ", description: "Frequently asked questions and resources" },
    { value: "tools", label: "Tools, Technologies, Certifications and job / internship opportunities", description: "Career-related tools and technologies" },
    { value: "quiz", label: "Quiz", description: "Career path quiz" },

  ];


  const otherResources = {

    aboutus: (
      <>
        <p><strong> Student Career Helper is designed and developed my a group of students from Oklahoma State University to help students navigate their job field from early</strong></p>
        <p><strong>MEET THE TEAM!</strong></p>

        <p><strong>Tarek Enain</strong></p>
        <p>Currently a computer science grad student with a focus in software engineering. </p>

        <p><strong>Keegan Neal</strong></p>
        <p></p>

        <p><strong>Jason Greer</strong></p>
        <p>A senior studying computer science. Expected graduation in spring 2025.</p>

        <p><strong>Venkat Kandlagunta</strong></p>
        <p>Currently a computer science grad student. Expected to graduate in spring 2025</p>

        <p><strong>Damilola Agbebiyi</strong></p>
        <p>Currently a senior studying computer science with a minor in Information Assurance. On track to graduate in spring, 2025</p>
      </>
    ),

    faq: (
      <>
        <p><strong>Question:</strong> What is Student Career Helper?</p>
        <p><strong>Answer:</strong> Student Career Helper is a comprehensive platform designed to support college students in planning their academic and career journeys. It provides tools and resources to help students select classes aligned with their career goals, explore job opportunities, and access relevant certifications and internships. By combining valuable insights with user-friendly features, Student Career Helper empowers students to make informed decisions about their future while complementing the guidance of academic advisors.</p>

        <p><strong>Question:</strong> Who are the faces behind Student Career Helper?</p>
        <p><strong>Answer:</strong> Student Career Helper is an initiative by Oklahoma State University students who developed this tool as a helpful resource. The contributors are Jason Greer, Tarek Enain, Damilola Agbebiyi, Keegan Neal, and Venkat Kandlagunta.</p>

        <p><strong>Question:</strong> How accurate is Student Career Helper?</p>
        <p><strong>Answer:</strong> Student Career Helper is a resource designed primarily for college students to assist in selecting classes tailored to their intended career paths. It provides valuable information, including job descriptions, internship opportunities, and certification links relevant to various fields. However, while Student Career Helper is a helpful tool, students are encouraged to consult their academic advisors for personalized guidance and conduct additional research to make informed decisions about their coursework and career planning.</p>
      </>
    ),
    tools: (
      <>
        <p><strong>Recommended Tools and Cerifications for Software Engineering:</strong></p>
        <p> Certificattions related to Software engineering that are strongly recommended: <a href="https://www.indeed.com/career-advice/career-development/software-engineering-certifications" target="_blank" rel="noopener noreferrrer"> Certifications  </a>.</p>
        <p>IDEs such as VS Code, Replit, Eclipse etc</p>
        <p>Some job and internship opportunities are recommended: <a href="https://www.linkedin.com/jobs/software-engineering-intern-jobs/?currentJobId=4037398237" target="_blank" rel="noopener noreferrer"> LinkedIN</a>.</p>
        <p>Some recommended Software Engineering projects worth looking at and partaking in: <a href='https://nevonprojects.com/project-ideas/software-project-ideas/ ' target="_blank" > Software engineering Projects</a> </p>


        <p><strong>Recommended Certifications for Cloud Engineering:</strong></p>
        <p>Certifications related to Cloud engineering that are strongly recommended: <a href="https://www.coursera.org/articles/cloud-certifications-for-your-it-career" target="_blank"> Recommended certifications </a> </p>
        <p>Job and internship opportunities are recommended: <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/jobs/cloud-intern-jobs&ved=2ahUKEwiw8eiGq-6JAxVNGtAFHUTkKpQQFnoECD0QAQ&usg=AOvVaw29PngbBkPCdWXkeJuyGrgW' target="_blank"> LinkedIN</a></p>
        <p>Some recommended Cloud Engineering projects worth looking at and partaking in: <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.knowledgehut.com/blog/cloud-computing/cloud-computing-project-ideas&ved=2ahUKEwjH0PW_r_CJAxW9GtAFHb81DoYQFnoECDQQAQ&usg=AOvVaw3psutw1aT46Qf4nae0mQ-i' target="_blank" > Cloud Engineering Projects</a> </p>

        <p><strong>Recommended Tools for CyberSecurity :</strong></p>
        <p>Software tools like Power BI and Tableau</p>
        <p> Certifications related to CyberSecurity that are strong recommended: <a href=" https://www.coursera.org/articles/popular-cybersecurity-certifications" target="_blank"> Recommended certifications </a> </p>
        <p>Job and internship opportunities are recommended: <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/jobs/cybersecurity-internship-jobs&ved=2ahUKEwiGkeu1q-6JAxVG_skDHcVcDJAQFnoECDkQAQ&usg=AOvVaw1FuZ9Xn9FfEcKMueN7vmH-' target="_blank"> LinkedIN</a></p>
        <p>Some recommended Cybersecurity projects worth looking at and partaking in: <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.knowledgehut.com/blog/security/top-cyber-security-projects&ved=2ahUKEwje0oC1sPCJAxW3GtAFHU_1KeAQFnoECDkQAQ&usg=AOvVaw2mq-GLX5XQPRGigf-cowF4' target="_blank" > CybersecurityProjects</a> </p>

        <p><strong>Recommended Tools for Front End Development:</strong></p>
        <p>Front-end tools like Figma, Adobe XD, VS code etc</p>
        <p> Recommended certtification for Front End Development: <a href="https://www.tealhq.com/certifications/front-end-developer" target="_blank"> Recommended Certifications</a></p>
        <p>Job and internship opportunities are recommended: < a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/jobs/internship-front-end-jobs&ved=2ahUKEwj5jfidrO6JAxWuMtAFHVG8NdkQFnoECBMQAQ&usg=AOvVaw0naNDoCfqa59Rfe3VjciMT' target="_blank"> LinkedIN</a> </p>
        <p>Some recommended Front End Development projcets worth looking at and partaking in: <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.geeksforgeeks.org/top-10-front-end-web-development-projects-for-beginners/&ved=2ahUKEwi8vt_DsPCJAxV66skDHVeRAzIQFnoECBMQAQ&usg=AOvVaw2TrjXAzw-VOb3i0kpzlL4w ' target="_blank" > Front-end Development Projects</a> </p>

      </>
    ),
    quiz: (
      <>
        <p>This quiz is designed to guide you in discovering how your personal interests, skills, and passions align with various career fields. By answering a series of carefully curated questions, you'll gain insights into potential professions that match your preferences and strengths. The results can help you identify areas where your talents can thrive, paving the way for informed decisions about your academic and professional journey."</p>
        <a
          href="https://tripleten.com/quiz/career-quiz-n/?utm_source=google&utm_medium=cpc&utm_campaign=Google_Search_USA_Tripleten_Mobile_PerfQuiz&utm_content=169116267767&utm_term=it%20career%20test&utm_placement=&utm_device=c&gad_source=1&gbraid=0AAAAAozDkyFZHegPMMkRVIq3v2RciuQ1L&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOIKfPtOIXYwjCIP6vl6OGCQnTmRIFvN0b4rCFbU4wTBYyCQr9qK9cwaAqsaEALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            color: '#fff',
            backgroundColor: 'orange',
            textDecoration: 'none',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          Click here!
        </a>
      </>
    ),

  };

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
        { name: "MATH 2163", link: "http://catalog.okstate.edu/search/?P=MATH%202163" },
        { name: "Humanities" },
        { name: "Lab Science" }
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
        { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
        { name: "Electives" }
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
        { name: "Lab Science" },
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
        { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
        { name: "Electives" }
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
        { name: "ENGL 1113", link: "http://catalog.okstate.edu/search/?P=ENGL%201113" },
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
        { name: "Lab Science" },
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
        { name: "CS 4433", link: "http://catalog.okstate.edu/search/?P=CS%204433" },
        { name: "Electives" }
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

  const sidebarOptions = [
    { value: "aboutus", label: "About Us", description: "About Us at Student Career Helper"},
    { value: "faq", label: "FAQ", description: "Frequently asked questions and resources" },
    { value: "tools", label: "Tools, Technologies, Certifications and job / internship opportunities", description: "Career-related tools and technologies" },
    { value: "quiz", label: "Quiz", description: "Career path quiz" },
    
  ];


  const otherResources = {

    aboutus: (
      <>
      <p><strong> Student Career Helper is designed and developed my a group of students from Oklahoma State University to help students navigate their job field from early</strong></p>
      <p><strong>MEET THE TEAM!</strong></p>

      <p><strong>Tarek Enain</strong></p>
      <p>Currently a computer science grad student with a focus in software engineering. </p> 

     <p><strong>Keegan Neal</strong></p>
     <p></p>

      <p><strong>Jason Greer</strong></p>
      <p>A senior studying computer science. Expected graduation in spring 2025.</p>

      <p><strong>Venkat Kandlagunta</strong></p>
      <p>Currently a computer science grad student. Expected to graduate in spring 2025</p>

      <p><strong>Damilola Agbebiyi</strong></p>
      <p>Currently a senior studying computer science with a minor in Information Assurance. On track to graduate in spring, 2025</p>
      </>
    ),

    faq: (
      <>
        <p><strong>Question:</strong> What is Student Career Helper?</p>
        <p><strong>Answer:</strong> Student Career Helper is a comprehensive platform designed to support college students in planning their academic and career journeys. It provides tools and resources to help students select classes aligned with their career goals, explore job opportunities, and access relevant certifications and internships. By combining valuable insights with user-friendly features, Student Career Helper empowers students to make informed decisions about their future while complementing the guidance of academic advisors.</p>
  
        <p><strong>Question:</strong> Who are the faces behind Student Career Helper?</p>
        <p><strong>Answer:</strong> Student Career Helper is an initiative by Oklahoma State University students who developed this tool as a helpful resource. The contributors are Jason Greer, Tarek Enain, Damilola Agbebiyi, Keegan Neal, and Venkat Kandlagunta.</p>
  
        <p><strong>Question:</strong> How accurate is Student Career Helper?</p>
        <p><strong>Answer:</strong> Student Career Helper is a resource designed primarily for college students to assist in selecting classes tailored to their intended career paths. It provides valuable information, including job descriptions, internship opportunities, and certification links relevant to various fields. However, while Student Career Helper is a helpful tool, students are encouraged to consult their academic advisors for personalized guidance and conduct additional research to make informed decisions about their coursework and career planning.</p>
      </>
    ),
    tools: (
      <>
        <p><strong>Recommended Tools and Cerifications for Software Engineering:</strong></p>
        <p> Certificattions related to Software engineering that are strongly recommended: <a href= "https://www.indeed.com/career-advice/career-development/software-engineering-certifications" target= "_blank" rel="noopener noreferrrer"> Certifications  </a>.</p>
        <p>IDEs such as VS Code, Replit, Eclipse etc</p>
        <p>Some job and internship opportunities are recommended: <a href= "https://www.linkedin.com/jobs/software-engineering-intern-jobs/?currentJobId=4037398237" target="_blank" rel="noopener noreferrer"> LinkedIN</a>.</p>
        <p>Some recommended Software Engineering projects worth looking at and partaking in: <a href = 'https://nevonprojects.com/project-ideas/software-project-ideas/ ' target ="_blank" > Software engineering Projects</a> </p>


        <p><strong>Recommended Certifications for Cloud Engineering:</strong></p>
        <p>Certifications related to Cloud engineering that are strongly recommended: <a href= "https://www.coursera.org/articles/cloud-certifications-for-your-it-career" target = "_blank"> Recommended certifications </a> </p>
        <p>Job and internship opportunities are recommended: <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/jobs/cloud-intern-jobs&ved=2ahUKEwiw8eiGq-6JAxVNGtAFHUTkKpQQFnoECD0QAQ&usg=AOvVaw29PngbBkPCdWXkeJuyGrgW' target ="_blank"> LinkedIN</a></p>
        <p>Some recommended Cloud Engineering projects worth looking at and partaking in: <a href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.knowledgehut.com/blog/cloud-computing/cloud-computing-project-ideas&ved=2ahUKEwjH0PW_r_CJAxW9GtAFHb81DoYQFnoECDQQAQ&usg=AOvVaw3psutw1aT46Qf4nae0mQ-i' target ="_blank" > Cloud Engineering Projects</a> </p>
   
        <p><strong>Recommended Tools for CyberSecurity :</strong></p>
        <p>Software tools like Power BI and Tableau</p>
        <p> Certifications related to CyberSecurity that are strong recommended: <a href= " https://www.coursera.org/articles/popular-cybersecurity-certifications" target = "_blank"> Recommended certifications </a> </p>
        <p>Job and internship opportunities are recommended: <a href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/jobs/cybersecurity-internship-jobs&ved=2ahUKEwiGkeu1q-6JAxVG_skDHcVcDJAQFnoECDkQAQ&usg=AOvVaw1FuZ9Xn9FfEcKMueN7vmH-' target = "_blank"> LinkedIN</a></p>
        <p>Some recommended Cybersecurity projects worth looking at and partaking in: <a href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.knowledgehut.com/blog/security/top-cyber-security-projects&ved=2ahUKEwje0oC1sPCJAxW3GtAFHU_1KeAQFnoECDkQAQ&usg=AOvVaw2mq-GLX5XQPRGigf-cowF4' target ="_blank" > CybersecurityProjects</a> </p>

        <p><strong>Recommended Tools for Front End Development:</strong></p>
        <p>Front-end tools like Figma, Adobe XD, VS code etc</p>
        <p> Recommended certtification for Front End Development: <a href = "https://www.tealhq.com/certifications/front-end-developer" target = "_blank"> Recommended Certifications</a></p>
        <p>Job and internship opportunities are recommended: < a href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/jobs/internship-front-end-jobs&ved=2ahUKEwj5jfidrO6JAxWuMtAFHVG8NdkQFnoECBMQAQ&usg=AOvVaw0naNDoCfqa59Rfe3VjciMT' target = "_blank"> LinkedIN</a> </p>
        <p>Some recommended Front End Development projcets worth looking at and partaking in: <a href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.geeksforgeeks.org/top-10-front-end-web-development-projects-for-beginners/&ved=2ahUKEwi8vt_DsPCJAxV66skDHVeRAzIQFnoECBMQAQ&usg=AOvVaw2TrjXAzw-VOb3i0kpzlL4w ' target ="_blank" > Front-end Development Projects</a> </p>
      
      </>
    ),
    quiz: (
      <>
        <p>This quiz is designed to guide you in discovering how your personal interests, skills, and passions align with various career fields. By answering a series of carefully curated questions, you'll gain insights into potential professions that match your preferences and strengths. The results can help you identify areas where your talents can thrive, paving the way for informed decisions about your academic and professional journey."</p>
        <a 
          href="https://tripleten.com/quiz/career-quiz-n/?utm_source=google&utm_medium=cpc&utm_campaign=Google_Search_USA_Tripleten_Mobile_PerfQuiz&utm_content=169116267767&utm_term=it%20career%20test&utm_placement=&utm_device=c&gad_source=1&gbraid=0AAAAAozDkyFZHegPMMkRVIq3v2RciuQ1L&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOIKfPtOIXYwjCIP6vl6OGCQnTmRIFvN0b4rCFbU4wTBYyCQr9qK9cwaAqsaEALw_wcB" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            color: '#fff',
            backgroundColor: 'orange',
            textDecoration: 'none',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          Click here!
        </a>
      </>
    ),
    
  };
   

  // Event handler for job selection
  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);

  };

  const handleResourceChange = (e) => {
    setSelectedResource(e.target.value !== 'Select other resources' ? e.target.value : null);
    setSelectedJob(null); // Deselect job if navigating to resources
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
      case 'Computer Systems Engineers/Architects':
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

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden' }}>
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

            <div className="form-group">
            <label htmlFor="inputGroupSelect05">More Resources:</label>
            <Form.Select
              id="inputGroupSelect05"
              size="lg"
              onChange={handleResourceChange}
            >
              <option value="Select other resources">Choose other resources</option>
              {sidebarOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>

          </div>

        </div>
        
        {/* Right side: Recommended classes and Job description */}
<div className="right-sidebar">
  {selectedResource ? ( // Check if a resource is selected
    <div className="other-resources-page">
      <h2>
        Other Resources:{" "}
        {sidebarOptions.find((opt) => opt.value === selectedResource)?.label}
      </h2>
      <p>{otherResources[selectedResource]}</p>
    </div>
  ) : (
    selectedState !== "Choose" &&
    selectedSchool !== "Choose" &&
    selectedMajor !== "Choose" &&
    selectedJob !== "Choose" && (
      <div className="classes-job-description">
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            id="spinner"
            role="status"
            style={{
              position: "absolute",
              height: "5rem",
              width: "5rem",
              display: "none",
              left: "50%",
              top: "50%",
            }}
          >
            {/** spinner to show while data is being fetched */}
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="job-description">
          <h2>Recommended Classes</h2>
          <Button variant="primary" href="/D3TreeGraph" target="_blank">
            Open CS Hierarchy Tree
          </Button>
          <ul>
            {Object.entries(getSelectedJobCourses() || {}).map(([year, semesters]) => (
              <li key={year}>
                <strong>{year.charAt(0).toUpperCase() + year.slice(1)}</strong>
                <ul>
                  {semesters && typeof semesters === "object" ? (
                    Object.entries(semesters || {}).map(([semester, classes]) => (
                      <li key={semester}>
                        <strong>{semester.charAt(0).toUpperCase() + semester.slice(1)} Semester</strong>
                        <ul>
                          {Array.isArray(classes) ? (
                            classes.map((course) => (
                              <li key={course.link}>
                                <a href={course.link} target="_blank" rel="noopener noreferrer">
                                  {course.name}
                                </a>
                              </li>
                            ))
                          ) : (
                            <li>No classes available</li>
                          )}
                        </ul>
                      </li>
                    ))
                  ) : (
                    <li>No semesters available</li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="recommended-classes">
          <h2 className="recommended-classes-h2">Job Description</h2>
          {jobsData ? ( // if jobs data is not empty, populate container with info
            <div className="row">
              <div className="col-md-12">
                <h3>{jobsData.apiData.title}</h3>
                {jobsData.apiData.also_called?.title ? ( // check if there are other titles
                  <p>
                    <strong>Other titles:</strong>{" "}
                    {jobsData.apiData.also_called.title.map((otherTitle, index) => (
                      <span key={index}>
                        {otherTitle}
                        {index < jobsData.apiData.also_called.title.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p></p>
                )}
                <p>
                  <strong>What they do:</strong> {jobsData.jobDescr}
                </p>
                <p>
                  <strong>On the Job Tasks:</strong>
                </p>
                <ul>
                  {jobsData.apiData.on_the_job.task.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
                <p>
                  <strong>Education required:</strong> {jobsData.education}
                </p>
                <p>
                  <strong>Average Salary:</strong>{" "}
                  {currencyFormat(jobsData.outlook.salary.annual_median)}
                </p>
              </div>
            </div>
          ) : (
            <p>
              <strong>No job data available</strong>
            </p>
          )}
        </div>
      </div>
    )
  )}
</div>
</div>

        <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} Student Career Helper. All Rights
          Reserved.
        </p>
        <p>
          Designed by OSU Students | Damilola, Venkat, Jason, Tarek, Keegan{" "}
          <a
            href="https://go.okstate.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
           <p> Visit OSU </p>
          </a>
        </p>
      </footer>
    </div >


  );
}

export default Main;
