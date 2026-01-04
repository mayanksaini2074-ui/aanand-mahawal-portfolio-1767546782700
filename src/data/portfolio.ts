import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Aanand Mahawal",
    "title": "Software Developer",
    "email": "aanandmahawal048@gmail.com",
    "phone": "+91-8396091712",
    "linkedin": "",
    "github": "",
    "location": "",
    "summary": "Passionate Software Developer with hands-on experience in backend and frontend development using Node.js and React.js. Adept at designing and implementing scalable solutions and skilled in data analysis and AI with projects in chat analysis, food delivery platforms, and AI virtual assistants. Demonstrates problem-solving excellence and leadership in peer-learning initiatives."
  },
  "experience": [
    {
      "title": "Software Development Engineer Intern",
      "company": "skillRAace",
      "dates": "Dec 2024 – May 2025",
      "description": "Contributed to feature development and improved UI responsiveness.",
      "highlights": [
        "Contributed to backend modules using Node.js and Express.js, supporting feature development and request–response workflows.",
        "Built reusable React.js components and improved UI responsiveness to enhance overall user experience.",
        "Supported end-to-end feature delivery, including frontend–backend integration, state management, and error handling.",
        "Improved application stability through debugging, defect resolution, and adherence to clean coding practices."
      ]
    }
  ],
  "education": [
    {
      "degree": "B.Tech in Electronics and Communication Engineering",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "Aug 2022 – May 2026",
      "gpa": "8.55/10"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "WhatsStat – WhatsApp Chat Analyzer",
      "description": "Designed and developed a Python-based data processing application to parse and analyze 50K+ WhatsApp messages from raw .txt exports.",
      "technologies": [
        "Python",
        "Matplotlib",
        "Seaborn",
        "regex",
        "string manipulation"
      ],
      "link": "Live",
      "github": "GitHub"
    },
    {
      "name": "Hungryy – MERN Stack Food Delivery Platform",
      "description": "Engineered a full-stack MERN web application with frontend, backend services, and admin workflows.",
      "technologies": [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Stripe"
      ],
      "link": "Live",
      "github": "GitHub"
    },
    {
      "name": "Assisto – AI Virtual Assistant",
      "description": "Developed a full-stack AI virtual assistant supporting voice and text interactions in Hindi and English.",
      "technologies": [
        "MERN stack",
        "Google Gemini API",
        "JWT"
      ],
      "link": "Live",
      "github": "GitHub"
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
