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
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Quick Learner",
      icon: web,
    },
    {
      title: "Exploring Generative AI",
      icon: creator,
    },
    {
      title: "Follows Mclaren F1",
      icon: backend,
    },
    {
      title: "Still a beginner",
      icon: mobile,
    },
  ];
  
  const technologies = [
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Typescript",
      icon: typescript,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "10th Standard ICSE",
      company_name: "Cambridge School, KR Puram",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2011 - June 2019",
      points: [
        
        "Scored a healthy percentage of 92.3% in ICSE Boards.",
        "Captained Leeds House and developed team building skills.",
        "Participated in several activities and made valuable friends.",
      ],
    },
    {
      title: "12th Standard CBSE",
      company_name: "Narayana E-Techno School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2019 - June 2021",
      points: [
        "Developed and encouraged myself for competitive exams such as JEE, KCET and Advanced.",
        "Scored a percentage of 93.2% and got through KCET (GM:986).",
        "Upskilled myself in communication and collective problem solving skills.",
      ],
    },
    {
      title: "CSE (AI & ML) Engineering Student",
      company_name: "Ramaiah Institute of Technology",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Maintaining my CGPA at 9.21.",
        "Collaborating with cross-functional teams of other developers to create wonderful projects.",
        "Developing and maintaining web applications using React.js and other related technologies.","Upskilling myself in foundational levels of various tech streams.",
        "Participating in hackathons and gaining constructive feedback from other developers.",
      ],
    },
    {
      title: "Core Member",
      company_name: "Mein Kraft",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Team building and communication skills.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive forum for valuable discusions and overall development.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "CentuRITon",
      name: "Hospitality Specialist",
      designation: "Volunteered for the 36 hour national level Hackathon.",
      company: "RIT",
    },
    {
      testimonial:
        "2nd Place- IEEE Ideaverse",
      name: "Pothole Detection and Traffic Monitoring",
      designation: "Idea",
      company: "Team - Circuit Breakers",
    },
  ];
  
  const projects = [
    {
      name: "Automated Summarization and Translation",
      description:
        "Immediate solution to summarisation huge text and also providing various translation options.",
      tags: [
        {
          name: "streamlit",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio website",
      description:
        "The website you are looking at right now.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };