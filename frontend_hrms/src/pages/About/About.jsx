import React from 'react';
import About from './About';

const aboutData = {
  title: "About Our Team",
  img: {
    url: "path/to/company-logo.jpg",
    alt: "Company Logo"
  },
  description: [
    "Our team is dedicated to delivering the best HR solutions.",
    "We prioritize collaboration, innovation, and inclusivity."
  ],
  buttonContact: {
    class: "button-contact",
    href: "/contact",
    text: "Contact Us"
  },
  skillsTeam: ["Team Management", "Employee Engagement", "HR Strategy"],
  skillsTech: ["JavaScript", "React", "Python"]
};

function App() {
  return (
    <div className="App">
      <About aboutData={aboutData} />
    </div>
  );
}

export default App;