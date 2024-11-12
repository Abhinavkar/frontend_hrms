// aboutData.js
import About from "../About/About"
const aboutData = {
    title: "About Our HRMS Team",
    img: {
      url: "/path/to/team-photo.jpg",  // Replace with the path to your team image
      alt: "HRMS Team Photo"
    },
    description: [
      "Our team is dedicated to enhancing HR processes with innovative technology.",
      "We specialize in building solutions to streamline employee management, improve project tracking, and facilitate smooth onboarding processes.",
      "With a focus on usability and efficiency, our HRMS helps organizations manage their workforce with ease."
    ],
    buttonHire: {
      class: "btn btn-primary",
      href: "/contact-us",  // Link to your contact page or form
      text: "Contact Us"
    },
    skillsLeft: [
      { skill: "Employee Management", level: "Advanced" },
      { skill: "Project Tracking", level: "Advanced" },
      { skill: "Payroll Processing", level: "Intermediate" }
    ],
    skillsRight: [
      { skill: "Onboarding Automation", level: "Intermediate" },
      { skill: "Performance Review", level: "Advanced" },
      { skill: "Data Security", level: "Advanced" }
    ]
  };
  
  export default aboutData;
  