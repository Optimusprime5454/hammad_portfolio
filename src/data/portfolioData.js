import {
  FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaGithub, FaDatabase, FaServer, FaCode, FaRobot, FaBriefcase, FaGraduationCap
} from 'react-icons/fa';
import { SiPostman, SiMysql, SiApache, SiGit } from 'react-icons/si';

export const portfolioData = {
  hero: {
    name: "Hammad Khan",
    titles: ["Laravel Developer", "PHP Backend Developer", "API Developer"],
    description: "PHP/Laravel Backend Developer with 1+ year of professional experience. Passionate about building scalable web applications and clean architecture.",
    cvLink: "/assets/Hammad_Khan.pdf",
    avatar: "/assets/image.jpg",
  },
  about: {
    bio: "PHP/Laravel Backend Developer with 1+ year of professional experience at Universal Links Technologies. Passionate about building scalable web applications, RESTful APIs, database design, and clean architecture. Continuously learning and improving technical and problem-solving skills.",
    stats: [
      { label: "Years Experience", value: "1+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Technologies Mastered", value: "8+" },
    ]
  },
  skills: [
    { name: "HTML", icon: FaHtml5, percentage: 80, category: "Frontend" },
    { name: "CSS", icon: FaCss3Alt, percentage: 70, category: "Frontend" },
    { name: "JavaScript", icon: FaCss3Alt, percentage: 60, category: "Frontend" },
    { name: "PHP", icon: FaPhp, percentage: 60, category: "Backend" },
    { name: "Laravel", icon: FaLaravel, percentage: 70, category: "Backend" },
    { name: "OOP", icon: FaCode, percentage: 50, category: "Programming" },
    { name: "MVC Architecture", icon: FaServer, percentage: 90, category: "Architecture" },
    { name: "RESTful APIs", icon: SiPostman, percentage: 70, category: "Backend" },
    { name: "GitHub", icon: FaGithub, percentage: 80, category: "Tools" },
    { name: "Anti-Gravity (AI Tool)", icon: FaRobot, percentage: 95, category: "AI Tools" },
    { name: "MySQL / Database Design", icon: SiMysql, percentage: 85, category: "Backend" },
  ],
  experience: [
    {
      company: "Universal Links Technologies",
      role: "Laravel Developer",
      period: "2025 - Present",
      responsibilities: [
        "Web Application Development",
        "RESTful API Development",
        "Database Design",
        "Backend Solutions",
        "Clean Architecture",
        "Performance Optimization",
        "Authentication Systems"
      ]
    }
  ],
  education: [
    {
      degree: "BS Computer Science",
      school: "Muhammad Ali Insitute of Information Technology, Layyah",
      period: "2024 - 2026",
      gpa: "2.9/4.0"
    },
    {
      degree: "Associate Degree of Information Technology",
      school: "GC University Faisalabad, Layyah Campus",
      period: "2022 - 2024",
      gpa: "3.36/4.0"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Meta Lead CRM",
      description: "Saas based Meta Lead CRM is currently in development",
      tech: ["Laravel", "Meta OAuth", "Graph API", "Blade", "CMS"],
      image: "/assets/crm_system.png",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "User Blog Posting System",
      description: "A full-featured blog posting system built as university FYP with roles and authentication.",
      tech: ["Laravel", "Blade", "Role & Permissions", "MySQL"],
      image: "/assets/user_blog_posting_system.png",
      github: "https://github.com/Hammadkhan010/User-Blog-Posting-System",
      demo: "#"
    },
    {
      id: 3,
      title: "AI Resume Analyze",
      description: "AI-powered tool to analyze and rank resumes based on job descriptions.",
      tech: ["Laravel", "Gemini API", "Blade"],
      image: "/assets/ai_resume.png",
      github: "https://github.com/Hammadkhan010/ai_resume_analyzer",
      demo: "#"
    },
    {
      id: 4,
      title: "AshikSardar.com",
      description: "Professional freelance CMS and backend development project for a client's website.",
      tech: ["Laravel", "Blade", "CMS", "Restful API", "MySQL"],
      image: "/assets/project2.jpg",
      github: "#",
      demo: "https://ashiksardar.com/"
    },
    {
      id: 5,
      title: "Inventory Management System",
      description: "Scalable system for managing stocks, orders, and reporting.",
      tech: ["Laravel", "PHP", "Google OAuth", "Import/Export", "MySQL"],
      image: "/assets/inventory_system.png",
      github: "https://github.com/Hammadkhan010/inventory-management-system-",
      demo: "#"
    },
    {
      id: 6,
      title: "Physio Source",
      description: "Physio Source is a comprehensive platform for physiotherapy students and professionals. I worked for an Indian company as a backend developer and individualiy I developed this website Backend.",
      tech: ["Laravel", "Blade", "CMS", "Backend", "Email Integration", "MySQL"],
      image: "/assets/physio_academy.png",
      github: "https://github.com/Hammadkhan010/physio_source",
      demo: "https://physiosource.in/"
    }
  ],
  services: [
    { title: "Laravel Development", icon: FaLaravel },
    { title: "REST API Development", icon: SiPostman },
    { title: "Backend Development", icon: FaServer },
    { title: "Database Design", icon: FaDatabase },
    { title: "Bug Fixing", icon: FaCode },
    { title: "Website Maintenance", icon: FaBriefcase }
  ],
  testimonials: [
    {
      name: "John Doe",
      role: "CEO, Tech Corp",
      content: "Hammad is an exceptional backend developer. His Laravel skills are top-notch and he delivered our API ahead of schedule.",
      image: "https://i.pravatar.cc/150?u=john",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      content: "Clean code and professional attitude. Hammad's architecture designs are scalable and easy to maintain.",
      image: "https://i.pravatar.cc/150?u=jane",
    }
  ],
  contact: {
    email: "hammadkhhan010@gmail.com",
    phone: "+92 3051525313",
    location: "Layyah,Punjab, Pakistan",
    linkedin: "https://www.linkedin.com/in/hammad-khhan/",
    github: "https://github.com/Hammadkhan010?tab=repositories"
  }
};
