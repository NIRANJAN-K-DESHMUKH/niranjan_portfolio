import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aws,
    udemy,
    coursera,
    java,
    cpp,
    python,
    arduino,
    tableau,
    dataAnalytics,
    volunteer, responsibility, captain, archery, inter, element
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "feedbacks",
      title: "Education",
    },
    {
      id: "work",
      title: "Certifications",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Programming Languages",
      icon: web,
      desc: "Java, C++, C, JavaScript, Python, SQL"
    },
    {
      title: "Frameworks",
      icon: mobile,
      desc: "ReactJS, NodeJS, ExpressJS, ThreeJS, Flask"
    },
    {
      title: "Tools",
      icon: backend,
      desc: "GIT, MySQL, MongoDB, Tableau, IBM Cognos"
    },
    {
      title: "Other Technologies",
      icon: backend,
      desc: "IoT, AWS, Blockchain, REST, Arduino, Matlab"
    },
    {
      title: "Spoken Languages",
      icon: creator,
      desc: "English, Hindi, Marathi, Spanish (Español)"
    },
    {
      title: "Soft Skills",
      icon: web,
      desc: "Problem Solving, Perfectionist, Leadership, Adaptability, Discipline"
    }
  ];
  
  const technologies = [
    {
      name: "tableau",
      icon: tableau,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "arduino",
      icon: arduino,
    },
    
  
  ];
  
  const experiences = [
    {
      title: "AWS Certified Cloud Practitioner",
      company_name: "Amazon AWS",
      icon: aws,
      iconBg: "#383E56",
      date: "July 2023",
      points: [
        "Became an AWS Certified Cloud Practitioner, gaining a comprehensive understanding of cloud concepts and AWS services.",
        "Acquired insights into cloud security, pricing, and best practices.", 
        "This certification solidified my grasp of cloud fundamentals, enhancing my ability to design and implement efficient, secure, and scalable solutions within the AWS ecosystem."
      ],
      source_code_link: "https://drive.google.com/file/d/10XedUh22fC5x4s3Osf4VRjQkEbICQKyY/view?usp=drive_link"
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "It was an immersive journey into modern web development.",
        "Mastered front-end technologies like HTML5, CSS3, and JavaScript, gaining proficiency in responsive design and dynamic user interfaces.",
        "Explored back-end development with Node.js and databases, honing skills in creating robust web applications.",
        "This comprehensive bootcamp equipped me with the knowledge and hands-on experience needed to craft engaging, full-stack web solutions and sparked a passion for continuous learning in the ever-evolving web landscape."
      ],
      source_code_link: "https://drive.google.com/file/d/1qdFHEKUQ2RS15ibIti4ifFLQEu4ChoB3/view?usp=sharing"
    },
    {
      title: "Crash Course on Python by Google",
      company_name: "Coursera",
      icon: coursera,
      iconBg: "#383E56",
      date: "August 2022",
      points: [
        "An intensive learning experience that provided me a solid foundation in Python programming.",
        "Explored core concepts such as variables, loops, and functions, while delving into data structures and algorithms.",
        "Gained practical insights into writing clean and efficient code.",
      ],
      source_code_link: "https://drive.google.com/file/d/11s9O-k07asblMdoGf6P6mZQejyc1TxwF/view?usp=sharing"
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "B.Tech - Computer Science and Engineering (with spec. in IoT)",
      name: "Vellore Institute of Technology, Vellore, Tamil Nadu, India",
      designation: "CGPA:",
      company: "9.01",
      image: "July 2024 (expected)",
    },
    {
      testimonial:
        "Higher Secondary Certificate (12th), MSBSHSE",
      name: "Jijau Dnyanteerth Junior College, Parbhani, Maharashtra, India",
      designation: "Percentage:",
      company: "77.38%",
      image: "July 2020",
    },
    {
      testimonial:
        "Secondary School Certificate (10th), CBSE",
      name: "Podar International School, Parbhani, Maharashtra, India",
      designation: "CGPA:",
      company: "10.00",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Expense Management System",
      description:
        "A Full-Stack MERN web app designed to help expense tracking. Users can log their expenditures by inputting details such as expense amount, description, and date. The system records these entries, creating a repository of financial activities. One of its standout features is the dashboard that provides a visual representation of expenses over time, allowing users to identify trends, areas of high expenditure, and potential cost-cutting opportunities.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML & CSS",
          color: "orange-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/NIRANJAN-K-DESHMUKH/Expense-Management-System",
    },
    {
      name: "Smart Weather Station",
      description:
        "An IoT based Smart Weather Station created using NodeMCU with WiFi Module ESP8266 -12E, Temperature and Humidity sensor DHT11, Atmospheric pressure sensor BMP180, Digital Light Sensor BH1750FVI, Mini Breadboards. The detected parameter values are updated to a channel server created on thingspeak (a matlab tool) to visualize the graphs of the collected data. The Web Page created for the simulation of the results, which fetches the data back from thingspeak server API.",
      tags: [
        {
          name: "Arduino",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JS",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/NIRANJAN-K-DESHMUKH/Smart-Weather-Station",
    },
    {
      name: "FaceLock App",
      description:
        "Developed an Artificial Intelligence based Facial Recognition Solution for Vulnerabilities in Smart Home Systems that stores the registered users’ images as database, compares them with the webcam video frames, identifies and recognises the face, records the user details in csv format, which acts as an authentication and access control mechanism.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "face-recognition",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/NIRANJAN-K-DESHMUKH/Facelock-App",
    },
    ,
    {
      name: "Externship",
      description:
        "Analysis of Amazon Cell Phone Reviews (Data Analytics Project): Connected Dataset to Tableau using MySQL Workbench. Created insightful Data Visualizations (Dashboards and Stories) using Tableau. Integrated the visualizations with web interface using Bootstrap for frontend and Flask in the backend.",
      tags: [
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "orange-text-gradient",
        },
      ],
      image: dataAnalytics,
      source_code_link: "https://github.com/NIRANJAN-K-DESHMUKH/Amazon-Cell-Phone-Reviews",
    }
  ];
  


  const extracurriculars = [
    {
      title: "IEEE EMBS student chapter - Certificate of Appreciation for volunteering in International Student Conference (ISC)",
      icon: volunteer,
      desc: "March 2021",
      source_code_link: "https://drive.google.com/file/d/10aS6ugksxgdPSxTLRrqRxD6IDAts0RGE/view?usp=drive_link"
    },
    {
      title: "Certificate for the Best Poster on Personal & Social Responsibility During the Pandemic, SSL - VIT",
      icon: responsibility,
      desc: "January 2021",
      source_code_link: "https://drive.google.com/file/d/10bJ_iZADKMdiomKLEXDt8t-vJOjnYwsa/view?usp=drive_link"
    },
    {
      title: "Been the Vice School Captain at Podar International School, Parbhani, Maharashtra",
      icon: captain,
      desc: "2016",
      source_code_link: ""
    },
    {
      title: "National Level Archery Competition participation certificate, cleared the Division Level Archery Competition",
      icon: archery,
      desc: "December 2016",
      source_code_link: ""
    },
    {
      title: "Intermediate Drawing Grade Examination (by Govt. of Maharashtra)",
      icon: inter,
      desc: "Secured Grade-B",
      source_code_link: ""
    },
    {
      title: "Elementary Drawing Grade Examination (by Govt. of Maharashtra)",
      icon: element,
      desc: "Secured Grade-A",
      source_code_link: ""
    }
  ];



  export { services, technologies, experiences, testimonials, projects, extracurriculars };