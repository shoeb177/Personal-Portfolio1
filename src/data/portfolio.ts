import { Code2, Globe, Database, Brain, Layout, Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Shoeb Shanto",
  title: "Data Scientist & Web Developer",
  bio: "Motivated computer science and engineering student at AIUB with a strong interest in data science, artificial intelligence and web development.",
  aboutMe: "Motivated computer science and engineering student at AIUB with a strong interest in data science, artificial intelligence and web development. Skilled in Python, SQL, and data-driven problem solving, with programming experience in C++, Java, Javascript, PHP, C#, R, and Python, and a passion for practical implementation and continuous learning.",
  email: "shoebshanto376@gmail.com",
  phone: "01606094039",
  github: "https://github.com/shoeb177",
  linkedin: "https://www.linkedin.com/in/shoeb-shanto",
  profilePic: "https://github.com/shoeb177.png", // GitHub profile picture
  resumeUrl: "#", // Add your resume link here
};

export const skillCategories = [
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: ["PHP", "Python", "JavaScript", "C++", "C#"],
  },
  {
    title: "Web & Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript (JS)", "AJAX"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["PHP", "MySQL"],
  },
  {
    title: "Data Science & AI",
    icon: Brain,
    skills: ["Python", "TensorFlow", "Computer Vision"],
  },
  {
    title: "Others",
    icon: Layout,
    skills: ["JSON", "OpenGL"],
  },
];

export const projects = [
  {
    name: "Real-Time MNIST Digit Recognition",
    description: "A real-time handwritten digit recognition system using deep learning and computer vision to identify digits from live video feeds.",
    techStack: "Python, TensorFlow, OpenCV, Keras",
    githubUrl: "https://github.com/shoeb177/Real-Time-MNIST-Digit-Recognition",
  },
  {
    name: "AI vs Non-AI Data Classifier",
    description: "A machine learning project focused on distinguishing between AI-generated and human-generated data patterns.",
    techStack: "Python, Scikit-Learn, Pandas, NumPy",
    githubUrl: "https://github.com/shoeb177/AI-Non-AI-Data",
  },
  {
    name: "Real-Time Face Recognition",
    description: "An automated face recognition system capable of identifying and verifying individuals in real-time video streams.",
    techStack: "Python, OpenCV, Face-Recognition, Dlib",
    githubUrl: "https://github.com/shoeb177/Real-Time-FACE-Recognition",
  },
  {
    name: "Hotel Management System",
    description: "A comprehensive management application for handling hotel bookings, room availability, and guest records efficiently.",
    techStack: "PHP, MySQL, HTML, CSS, JavaScript",
    githubUrl: "https://github.com/shoeb177/Hotel-Management-System",
  },
  {
    name: "Car Rental System Web",
    description: "A full-stack web application for car rentals, featuring user authentication, booking management, and a responsive UI.",
    techStack: "PHP, MySQL, HTML, CSS, JavaScript",
    githubUrl: "https://github.com/shoeb177/Car-rental-system-web-",
  },
  {
    name: "CVPR Projects",
    description: "A collection of computer vision and pattern recognition projects exploring advanced image processing and feature extraction.",
    techStack: "Python, OpenCV, PyTorch, NumPy",
    githubUrl: "https://github.com/shoeb177/CVPR",
  },
];
