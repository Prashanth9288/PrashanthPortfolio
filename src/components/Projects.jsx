import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
const projectCategories = {
  fullStack: [
    {
      name: "StudyGenie AI-Powered Study Companion",
      deployedLink:
        " https://study-genie-nine.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/StudyGenAI-project",
      image:
        "http://res.cloudinary.com/dwlahv9mv/image/upload/v1760106358/st2_bcba2s.jpg",
      description:
        "Study Genie — A responsive web app built with Vite + React, designed to help students master subjects through interactive tools, personalized study plans, and resources.",
      features: [
        "Subject-wise Study Resources – Organized content for easy access",
        "Interactive Learning Tools – Flashcards, quizzes, and practice modules",
        "Personalized Study Plans – Helps students track progress and stay consistent",
        "Progress Tracking Dashboard – Visual insights on study habits & completion",
      ],
      technologies: [
        "Next.js + React",
        "Next.js API Routes ",
        "AI SDK (OpenAI / Anthropic / Cohere / Gemini)",
        "MongoDB",
        "JWT",
        "WebSocket",
      ],
    },

    {
      name: "Event-Management-System",
      deployedLink: "https://event-management-azure-two.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/EventManagement_fullstackProject",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760106556/Screenshot_2025-10-10_195853_yij6pb.png",
      description:
        "Event Management Platform is a full-stack web application for planning, organizing, and managing events seamlessly. Built using modern web technologies.",
      features: [
        "Event Creation & Management – Hosts can create events, set dates/times, venues, descriptions, and ticketing options",
        "Attendee Registration – Users can browse events, register, purchase tickets, and manage their bookings",
        "Notifications & Reminders – Email or in-app alerts for upcoming events, ticket confirmations, and changes",
        "User Profiles – Hosts and attendees have profiles to manage their events, preferences, and past history",
        "Role-Based Access Control – Differentiated permissions for admins, hosts, and users"
      ],
      technologies: ["React JS", "Node.js", "Express","TailwindCSS", "MongoDB", "JWT"],
    },
    {
      name: "ResumeBuilder Application",
      deployedLink: "https://resume-builder-krvx.vercel.app/",
      githubLink: "",
      image:
        "https://img.freepik.com/premium-vector/job-profile-logo-resume-logo-template_658057-20.jpg", // Professional recruitment image
      description:
        "A comprehensive web application for users to create, manage, and share resumes efficiently.Create, update, and download resumes as PDF.Send resumes via email to recruiters",
      features: [
        "Create, update, and download resumes as PDF",
        "Send resumes via email to recruiters",
        "Mobile-responsive resume editor",
        "Integrate payment using Razorpay for premium features",
        "Secure storage of user resumes and data",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
        "Toast notifications",
        "Tailwind CSS",
      ],
    },
  ],
  frontend: [
    {
      name: "Recipe Finder App",
      deployedLink: "https://recipe-find-app-psi.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/Recipe-Find-App",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760106807/r1_cbmzy3.png", // Professional recruitment image
      description:
        "Recipe Find App is a user-friendly web application designed to help users discover and explore a wide variety of recipes based on available ingredients. Built with React and Vite, it offers a seamless and responsive experience for cooking enthusiasts.",
      features: [
        "Ingredient-Based Recipe Search: Users can input available ingredients to find matching recipes.",
        "Recipe Details: Each recipe includes a list of ingredients, preparation steps, and cooking time.",
        "Responsive Design: Optimized for both desktop and mobile devices, ensuring accessibility on various screen sizes.",
        "User-Friendly Interface: Clean and intuitive design for easy navigation and interaction.",
        "Save favorite meals for quick access",
      ],
      technologies: ["React, Vite", "TailwindCSS", "Vercel"],
    },
    {
      name: "Health-Habbit-tracker",
      deployedLink: "fst-practise-srgk.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/Health_Habit_Tracker",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760106976/h2_eemmxg.jpg", // Professional recruitment image
      description:
        "Health Habits Tracker — A personal wellness web app that helps users build and maintain healthy daily routines through goal setting and progress tracking with a clean, intuitive interface.",
      features: [
        "User Authentication: Secure login and sign-up functionality to personalize user experience.",
        "Habit Creation: Users can create custom habits with specific goals and frequencies.",
        "Progress Tracking: Visual indicators to track daily and cumulative progress of each habit.",
        "Reminders: Set up daily reminders to stay on track with habit goals.",
        "Responsive Design: Optimized for both desktop and mobile devices, ensuring accessibility on various screen sizes.",
        "User-Friendly Interface: Clean and intuitive design for easy navigation and interaction."
      ],
      technologies: ["HTML", "Tailwind CSS", "JavaScript","firebase"],
    },
    {
      name: "Weather App",
      deployedLink: "https://react-weather-app-jet-ten.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/ReactWeatherApp",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760107207/c1_qpa45d.png", // Professional recruitment image
      description:
        "React Weather App is a user-friendly web application that provides real-time weather information based on user input. Built with React and Vite.",
      features: [
        "Real-Time Weather Data: Fetches current weather information based on user-entered city names.",
        "Temperature Display: Shows temperature in Celsius and Fahrenheit.",
        "Weather Conditions: Displays weather conditions such as clear, cloudy, rainy, etc.",
        "Responsive Design: Optimized for both desktop and mobile devices, ensuring accessibility on various screen sizes.",
        "User-Friendly Interface: Clean and intuitive design for easy navigation and interaction."
      ],
      technologies: ["React, Vite", "Tailwind CSS", "Vercel"],
    },
     {
      name: "Rick-And-Morty",
      deployedLink: "https://rick-livid.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/pokemon",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760108150/rick1_orqdje.jpg",
      description:
        "An interactive web application that allows users to explore characters, episodes, and locations from the Rick and Morty universe. Built using React and integrated with the official Rick and Morty API, the app offers a dynamic and engaging experience for fans and developers alike.",
      features: [
        "Character Exploration: Browse detailed profiles of various characters, including their names, species, and origins.",
        "Episode Listings: View episodes by season, complete with titles and summaries.",
        "Location Discovery: Explore different locations within the Rick and Morty multiverse",
        "Pagination Controls: Navigate through extensive data sets using intuitive pagination.",
        "Random Data Fetching: Access random entries from characters, episodes, or locations for a fun, surprise experience.",
      ],
      technologies: ["React-Vite", "Tailwind CSS", "Redux · Rick & Morty API"],
    },
  ],
  backend: [],
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  padding: 1rem 2rem;
  background: transparent;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

const ProjectNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NavButton = styled.button`
  background: ${(props) =>
    props.$active ? "rgba(100, 255, 218, 0.1)" : "transparent"};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  position: relative;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 0.8rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.4s ease-in-out;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.$index * 0.2}s;
  opacity: 0;
  height: 420px; // Reduced height
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 8px 25px -12px rgba(100, 255, 218, 0.2);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 150px; // Reduced height
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #e6f1ff;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.25rem 0.5rem;
  border-radius: 99px;
  font-size: 0.6rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 99px;
  font-size: 0.7rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$primary ? "rgba(100, 255, 218, 0.1)" : "transparent"};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);

  svg {
    font-size: 0.7rem;
  }
`;

const Credentials = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 0.4rem;
  font-size: 0.7rem;

  p {
    color: #8892b0;
    margin: 0;

    span {
      color: #64ffda;
      font-weight: 500;
    }
  }
`;
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("fullStack");

  const renderProjects = (category) => {
    const categoryProjects = projectCategories[category] || [];

    return (
      <ProjectsGrid>
        {categoryProjects.map((project, index) => (
          <ProjectCard key={index} $index={index}>
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>

              {project.credentials && (
                <Credentials>
                  <p>
                    Demo Credentials: <br />
                    <span>Username:</span> {project.credentials.username} <br />
                    <span>Password:</span> {project.credentials.password}
                  </p>
                </Credentials>
              )}

              <ProjectLinks>
                <LinkButton
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  $primary
                >
                  <FaExternalLinkAlt /> Live Demo
                </LinkButton>
                <LinkButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </LinkButton>
                {project.certificate && (
                  <LinkButton
                    href={project.certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.certificate.icon} {project.certificate.label}
                  </LinkButton>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    );
  };

  return (
    <Container>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectNavigation>
        <NavButton
          $active={activeCategory === "fullStack"}
          onClick={() => setActiveCategory("fullStack")}
        >
          Full Stack
        </NavButton>
        <NavButton
          $active={activeCategory === "frontend"}
          onClick={() => setActiveCategory("frontend")}
        >
          Frontend
        </NavButton>
        <NavButton
          $active={activeCategory === "backend"}
          onClick={() => setActiveCategory("backend")}
        >
          Backend
        </NavButton>
      </ProjectNavigation>
      {renderProjects(activeCategory)}
    </Container>
  );
};

export default Projects;
