/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Xiaoran's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Xiaoran Xie Portfolio",
    type: "website",
    url: "https://github.com/Makiato1999",
  },
};

//Home Page
const greeting = {
  title: "Xiaoran Xie",
  logo_name: "XiaoranXie",
  nickname: "Shawn",
  subTitle:
    "As a computer science student, I'm eager to contribute to innovative projects in an internship, utilizing my development skills to enhance technical systems and drive impactful solutions.",
  resumeLink:
    "https://docs.google.com/document/d/1JlTbxMaPQAwjFz19tYzJixgYWE9xy2m6Z4Vg7h_l7EM/edit?usp=sharing",
  portfolio_repository: "https://github.com/Makiato1999/portfolio",
  githubProfile: "https://github.com/Makiato1999",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Makiato1999",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/xiaoran-xie-3a305720a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  */
  {
    name: "Outlook",
    link: "mailto:xiaoran.xie@outlook.com",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#177fcf", // Reference https://simpleicons.org/?q=gmail
  },
  /*
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  */
];

const skills = {
  data: [
    {
      title: "Full Stack & Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website frontend using HTML, CSS, JavaScript, EJS, React, JQuery, Bootstrap",
        "⚡ Creating application backend in Java, Spring, Node.js, Express.js, Python, Django, MySQL, MongoDB",
      ],

      softwareSkills: [
        /*
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },*/
      ],
    },
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various machine learning and statistical data analysis use cases",
        "⚡ Experience of working with classification, data mining, text mining and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        /*
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },*/
      ],
    },
    /*
    {
      title: "Human-Robot & Human-Computer Interaction",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },*/
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
    */
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Manitoba",
      subtitle: "Bachelor of Science (B.S.) in Computer Science",
      logo_path: "uofm.png",
      alt_name: "UofM",
      duration: "Jan 2019 – Feb 2023",
      descriptions: [
        "⚡ I have studied basic Software Engineering, Data Science & Machine Learning, Human-Computer Interaction etc.",
        "⚡ Apart from this, I have done Minor in Economics.",
      ],
      website_link: "https://umanitoba.ca/",
    },
    {
      title: "McMaster University",
      subtitle: "Master of Engineering (M.Eng.) in Computing and Software",
      logo_path: "mac.png",
      alt_name: "Mac",
      duration: "Sep 2023 – Dec 2025",
      descriptions: [
        "⚡ I have taken varity of courses related to Software Engineering, Data Science & Machine Learning, Human-Robot Interaction etc.",
        "⚡ Apart from this, I am also doing research in Human-Robot Interaction field.",
      ],
      website_link: "https://www.mcmaster.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Master Spring 6, Spring Boot 3, REST, JPA, Hibernate",
      subtitle: "- Eazy Bytes, Madan Reddy",
      logo_path: "spring.png",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      subtitle: "- Dr.Angela Yu",
      logo_path: "mern.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-caed4945-0883-4cd8-a083-9a8dc7076204/",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning Foundations: A Case Study Approach",
      subtitle: "- University of Washington",
      logo_path: "uofw.png",
      certificate_link: "https://coursera.org/verify/YQSHGGH559G3",
      alt_name: "Washington",
      color_code: "#0000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Co-op/Intern",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experiences",
      work: true,
      experiences: [
        /*
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },*/
        {
          title: "Java Development Intern",
          company: "国泰新点软件 (Guo Tai Epoint Software Co.,Ltd)",
          company_url: "https://www.epoint.com.cn/",
          logo_path: "epoint.png",
          duration: "Apr 2023 - Aug 2023",
          location: "Nanjing, Jiangsu, China",
          description:
            "I have developed maintainable and modular web applications using Java and Spring Boot, with a focus on OOP principles and Spring MVC architecture. By designing RESTful APIs, I ensured efficient client-server communication through AJAX and structured data formats like JSON and XML. My work included optimizing MySQL and MongoDB database schemas for improved performance and managing data with DBeaver. I have significantly enhanced code reliability by implementing unit testing with JUnit and Mockito. My active engagement in Agile methodologies fostered team collaboration and project success, while my facilitation of CI/CD processes with Maven and Jenkins ensured efficient deployments to Tomcat servers.",
          color: "#fc1f20",
        },
      ],
    },
    /*
    {
      title: "Internships",
      experiences: [
        {
          title: "Java Development Intern",
          company: "国泰新点软件 (Epoint Software)",
          company_url: "https://www.epoint.com.cn/",
          logo_path: "epoint.png",
          duration: "Apr 2023 - Aug 2023",
          location: "Nanjing, Jiangsu, China",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My work integrates software engineering, machine learning, and data science within cloud-based environments, focusing on developing and deploying efficient data-driven web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "I currently enrolled in the Master of Engineering Co-op program in the department of Computing and Software at McMaster University, eligible for 4-12 month Co-op/intern from Summer 2024. I am actively seeking a Software Engineer position in the Greater Toronto Area, Canada or Shanghai, China. I would be delighted to connect with any potential opportunities in these regions.",
  },
  blogSection: {
    title: "Notes",
    subtitle:
      "When I study new technologies, I consolidate and reinforce my understanding by taking notes. This method aids me in better comprehending and applying these technologies.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "1445 Will Scarlett Drive, Oakville, Ontario, L6J6S9",
    locality: "Kanodar",
    country: "CA",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
