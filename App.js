import './App.css';
import Logo from './classroomPhoto.jpg';
import OSULogo from './OSUlogo.png';
import OULogo from './images.png';
import TULogo from './tu_law_logo.png';
import UCOLogo from './images-2.png';
import RSULogo from './images-3.png';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [selectedJob, setSelectedJob] = useState(''); // State to track selected job
  const [selectedSchool, setSelectedSchool] = useState(''); // State to track selected school
  const [selectedMajor, setSelectedMajor] = useState(''); // State to track selected major
  const [selectedResource, setSelectedResource] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  

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
   
  const jobDescriptions = {
    SE: (
      <p>
        Software Engineers design, develop, and maintain software systems. They work closely with clients and teams to build efficient solutions. 
        Learn more about this role on{' '}.
        <a href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" target="_blank" rel="noopener noreferrer">BLS.gov</a>.

        Some job and internship opportunities are included in the link below: {''}
        <a href= "https://www.linkedin.com/jobs/software-engineering-intern-jobs/?currentJobId=4037398237" target="_blank" rel="noopener noreferrer"> LinkedIN</a>.

        Certifications are essentials in developing your career as a software engineer and there are some lists of certifications that you can get to be a software engineer included in the link attached {''}.
        <a href= "https://www.indeed.com/career-advice/career-development/software-engineering-certifications" target= "_blank" rel="noopener noreferrrer"> Certifications  </a>.
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
  
  


  {/*const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
  };*/}

  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
  };


  const handleResourceChange = (e) => {
    setSelectedResource(e.target.value !== 'Select other resources' ? e.target.value : null);
    setSelectedJob(null); // Deselect job if navigating to resources
  };

  const handleJobChange = (e) => {
    setSelectedJob(e.target.value !== 'Choose' ? e.target.value : null);
    setSelectedResource(null); // Deselect resources if navigating to jobs
  };
  

  // Event handler for major selection
  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value !== 'Choose major' ? e.target.value : null);
    setSelectedSchool(null);
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
    <div
      className="App"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            <Form.Select
              id="inputGroupSelect02"
              size="lg"
              onChange={handleSchoolChange}
            >
              {schoolOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>
  
          <div className="form-group">
            <label htmlFor="inputGroupSelect03">Major:</label>
            <Form.Select
              id="inputGroupSelect03"
              size="lg"
              onChange={handleMajorChange}
            >
              {majorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>
  
          <div className="form-group">
            <label htmlFor="inputGroupSelect04">Job:</label>
            <Form.Select
              id="inputGroupSelect04"
              size="lg"
              onChange={handleJobChange}
            >
              {jobOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>
  
          {/* Render content based on the selected resource */}
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
  
        {/* Main Content Area */}
        <div className="main-content">
          {selectedJob && (
            <div className="job-field">
              <h2>Job Field: {selectedJob}</h2>
              <div className="classes-job-description">
                <div className="job-description">
                  <h3>Recommended Classes</h3>
                  <ul>
                    {Object.entries(jobClasses[selectedJob]).map(
                      ([year, semesters]) => (
                        <li key={year}>
                          <strong>
                            {year.charAt(0).toUpperCase() + year.slice(1)}
                          </strong>
                          <ul>
                            {Object.entries(semesters).map(
                              ([semester, classes]) => (
                                <li key={semester}>
                                  <strong>
                                    {semester.charAt(0).toUpperCase() +
                                      semester.slice(1)}{" "}
                                    Semester
                                  </strong>
                                  <ul>
                                    {classes.map((course) => (
                                      <li key={course.link}>
                                        <a
                                          href={course.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {course.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="recommended-classes">
                  <h3>Job Description</h3>
                  <p>{jobDescriptions[selectedJob]}</p>
                </div>
              </div>
            </div>
          )}
  
          {selectedResource && (
            <div className="other-resources-page">
              <h2>
                Other Resources:{" "}
                {sidebarOptions.find((opt) => opt.value === selectedResource)
                  ?.label}
              </h2>
              <p>{otherResources[selectedResource]}</p>
            </div>
          )}
        </div>
      </div>
  
     
      <footer className="app-footer">
        <p>
          © {new Date().getFullYear()} Student Career Helper. All Rights
          Reserved.
        </p>
        <p>
          Designed by OSU Students | Damilola, Venkat, Jason, Tarek, Kegan{" "}
          <a
            href="https://go.okstate.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
           <p> Visit OSU </p>
          </a>
        </p>
      </footer>
    </div>
  );
                }
  
  export default App;
                