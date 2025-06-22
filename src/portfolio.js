/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jeff Ng'ang'a",
  title: "Hello, I'm Jeff",
  subTitle: emoji(
    "An automation professional passionate about building intelligent systems that drive digital transformation, blending RPA with AI to solve real business problems and deliver measurable impact. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_ON3SmSYk4FJfluZwYLG58EwtdakLbZM/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jeffdnganga",
  linkedin: "https://www.linkedin.com/in/jeffdnganga/",
  gmail: "jeffdnganga@gmail.com",
  gitlab: "https://gitlab.com/jeffdnganga",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AUTOMATING MANUAL TASKS TO UNLOCK BUSINESS EFFICIENCY",
  skills: [
    emoji("🤖 Design, develop and deploy Robotic Process Automation (RPA) solutions using UiPath"),
    emoji("🧠 Integrate AI capabilities like Document Understanding and Machine Learning for intelligent automation"),
    emoji("🛠️ Analyze and optimize business processes to identify automation opportunities"),
    emoji("🔗 Build and manage end-to-end automation workflows involving ERP, email, databases, and APIs"),
    emoji("📈 Promote RPA adoption and awareness across departments through demos and training")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "UiPath",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Power Automate",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Document AI",
      fontAwesomeClassname: "fas fa-file-alt"
    },
    {
      skillName: "OCR",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kenyatta University",
      logo: require("./assets/images/kenyattaUniversityLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - December 2021",
      desc: "Speicalized in Software Development, Data Structures, Algorithms, Databases, and Web Technologies",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "RPA/Automation Tools", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming & Scripting",
      progressPercentage: "85%"
    },
    {
      Stack: "AI & Intelligent Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Reporting & Analysis",
      progressPercentage: "90%"
    },
    {
      Stack: "Frameworks & Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Soft Skills",
      progressPercentage: "95%"
    }



  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior RPA Developer",
      company: "Pwani Oil",
      companylogo: require("./assets/images/pwaniOilLogo.webp"),
      date: "April 2024 – Present"
    },
    {
      role: "RPA Developer",
      company: "Jubilee Insurance",
      companylogo: require("./assets/images/jubileeInsuranceLogo.png"),
      date: "January 2023 – March 2024",
    },
    {
      role: "IT Graduate Intern",
      company: "Jubilee Insurance",
      companylogo: require("./assets/images/jubileeInsuranceLogo.png"),
      date: "September 2022 – December 2022",
    },
    {
      role: "Full Stack Software Development Apprentice",
      company: "Apprentice Cloud Limited",
      companylogo: require("./assets/images/apprenticeCloudLogo.jpeg"),
      date: "January 2022 – August 2022"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Company Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO DIGITIZE AND AUTOMATE THEIR BUSINESS PROCESSES",
  projects: [
    {
      image: require("./assets/images/pwaniOilLogo.webp"),
      projectName: "Pwani Oil Group",
      projectDesc: "Automated RMA Processing, Invoice Processing, Reconciliations, Receipt Allocations, among others",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pwani.net/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jubileeInsuranceLogo.png"),
      projectName: "Jubilee Insurance",
      projectDesc: "Automated Reconciliations, Customer Onboarding, Document Management, among others",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jubileeinsurance.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "UiPath Specialized AI Associate",
      subtitle:
        "Successfully completed the UiPath Specialized AI Associate Training",
      image: require("./assets/images/uipathLogo.png"),
      imageAlt: "UiPath",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ZWzZH2CS7_cAM6jG0gvasYW3yiuJRldx/view?usp=sharing"
        }
      ]
    },
    {
      title: "UiPath Automation Developer Associate",
      subtitle:
        "Successfully completed the UiPath Automation Developer Associate Training",
      image: require("./assets/images/uipathLogo.png"),
      imageAlt: "UiPath",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1BoqFeGpkvtFkOqmDHkyL8s5z2CYKkAWI/view?usp=sharing"
        }
      ]
    },
    {
      title: "Star Performer 2024",
      subtitle: "Was recognized and awarded for being the top performing employee across the organization in 2024",
      image: require("./assets/images/pwaniAchievement2024.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1OlW40R0dLOCfs4cdD4__JKAz2N5AQX7_/view?usp=sharing"}
      ]
    },
        {
      title: "Advanced Full Stack Software Developer",
      subtitle: "Successfully completed the Digital Apprenticeship Masterclass (DAM), Full Stack Software Development Program",
      image: require("./assets/images/apprenticeCloudLogo.jpeg"),
      imageAlt: "Apprentice Cloud Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1DlD5zJdHj2rWfY4LeydwJ2v6-UE3Uxtl/view?usp=sharing"}
      ]
    },
        {
      title: "Software Developer",
      subtitle: "Successfully completed the Digital Apprenticeship Masterclass (DAM) Foundation Bootcamp",
      image: require("./assets/images/apprenticeCloudLogo.jpeg"),
      imageAlt: "Apprentice Cloud Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1fUPH-dXxLy_Rvq9ybVUl_A426l4StsDx/view?usp=sharing"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/leveraging-uipath-object-repository-automation-jeff-ng-ang-a-vx2lf?trackingId=BSsLciXhTjiV%2Fd2BgWWp3w%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BgJBZxSMcSZ%2Bwq8BWdnICDg%3D%3D",
      title: "Boost Your Automation with UiPath’s Object Repository",
      description: "Discover a powerful feature that can streamline your workflows and improve efficiency.",
    },
    {
      url: "https://www.linkedin.com/pulse/leveraging-uipath-libraries-enhanced-automation-jeff-ng-ang-a-eytpe?trackingId=YXgIUeQ6Qfiu31dF0DFHwg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BUU%2FdGQQkR4OdBGf5If6OWA%3D%3D",
      title: "Supercharge Your Automation with UiPath Libraries",
      description: "Discover how UiPath Libraries help you build reusable, efficient workflows that save time and simplify automation."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      image: require("./assets/images/talkImage1.jpg"),
      imageAlt: "UiPath Community Africa Series 2",
      subtitle: "Presented at the Africa Series 2 UiPath Community event, highlighting UiPath Studio 2023.4 features and guiding attendees on using them to drive enterprise automation.",
      slides_url: "https://docs.google.com/presentation/d/1uPeX0_l56NyXGb1bNs3uJ47QerkQa93R/edit?usp=sharing&ouid=101152537472377108485&rtpof=true&sd=true",
      event_url: "https://www.youtube.com/watch?v=weTz7QXFVAM"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254741749451",
  email_address: "jeffdnganga@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jeffy_nganga", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
