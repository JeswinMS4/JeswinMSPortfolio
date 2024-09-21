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
    gans,
    signplan
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
      title: "Final Year CSE (AI & ML) Engineering Student",
      company_name: "Ramaiah Institute of Technology",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2021 - Present",
      points: [
        "Maintaining my CGPA at 9.07.",
        "Collaborating with cross-functional teams of other developers to create wonderful projects.",
        "Developing and maintaining web applications using React.js and other related technologies.","Upskilling myself in foundational levels of various tech streams.",
        "Participating in hackathons and gaining constructive feedback from other developers.",
      ],
    },
    {
      title: "ML Research Intern ",
      company_name: "Yubi Fintech",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2023 - Oct 2023",
      points: [
          "Developed a ChatBot focusing on Extractive and Generative models, measured by successful utilization of RAG and Vector database.",
          "Designed a system aimed at answering questions based on a given document using LLMs such as Llama-2, Flan T5, and other models with Haystack and LangChain.",
"Highlights: Benchmarked the Extractive model with an Indian context dataset achieving an F1 score of 92.16% and Experimented on Fine Tuning Llama2 using Ludwig and PEFT for daily news dataset."
      ],
    },
  ];
  
const testimonials = [
  {
    testimonial: "1st Runners-Up - BOB Hackathon 2024",
    name: "SevaAI",
    designation: "End-to-End AI-Powered Customer Care Solution",
    company: "Team Wisteria",
  },
  {
    testimonial: "2nd Runners-Up - Tally Codebrewers",
    name: "File Distribution Tool",
    designation: "Workflow Optimization Tool",
    company: "Team System Callers",
  },
  {
    testimonial: "CentuRITon",
    name: "Hospitality Specialist",
    designation: "Volunteered for the 36-hour National Level Hackathon",
    company: "RIT",
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
      name: "420 GANs : Automating Sketch-to-Image Transformation Using CycleGANs",
      description:
        "A clean, simple and readable implementation of CycleGAN in PyTorch for the task of Sketch to Photo and vice versa.",
      tags: [
        {
          name: "PyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "Cycle GANs",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: gans,
      source_code_link: "https://github.com/JeswinMS4/TRIAL_CycleGAN",
    },
          {
      name: "AI-Enabled-Sign-Language-Communication-System",
      description:
        "An AI-enabled system for recognizing Indian Sign Language (ISL) using advanced deep learning models. This project integrates sign detection, classification, text translation, and text-to-speech functionalities.",
      tags: [
        {
          name: "PyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "MediaPipe",
          color: "pink-text-gradient",
        },
      ],
      image: signplan,
      source_code_link: "https://github.com/ItsNotRohit02/AI-Enabled-Sign-Language-Communication-System",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
