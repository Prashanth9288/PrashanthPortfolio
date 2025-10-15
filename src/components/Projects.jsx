import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";

const projectCategories = {
  fullStack: [
    {
      name: "StudyGenie AI-Powered Study Companion",
      deployedLink: "https://study-genie-nine.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/StudyGenAI-project",
      image:
        "http://res.cloudinary.com/dwlahv9mv/image/upload/v1760106358/st2_bcba2s.jpg",
      description:
        "Study Genie — A responsive web app built with Vite + React, designed to help students master subjects through interactive tools and personalized plans.",
      technologies: [
        "Next.js + React",
        "Next.js API Routes",
        "AI SDK (OpenAI / Anthropic / Cohere / Gemini)",
        "MongoDB",
        "JWT",
        "WebSocket",
      ],
    },
    {
      name: "Event-Management-System",
      deployedLink: "https://event-management-azure-two.vercel.app/",
      githubLink:
        "https://github.com/Prashanth9288/EventManagement_fullstackProject",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760106556/Screenshot_2025-10-10_195853_yij6pb.png",
      description:
        "Event Management Platform is a full-stack web app for planning and managing events seamlessly.",
      technologies: ["React JS", "Node.js", "Express", "TailwindCSS", "MongoDB", "JWT"],
    },
    {
      name: "ResumeBuilder Application",
      deployedLink: "https://resume-builder-krvx.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/ResumeBuilder",
      image:
        "https://img.freepik.com/premium-vector/job-profile-logo-resume-logo-template_658057-20.jpg",
      description:
        "Create, manage, and share resumes efficiently. Includes PDF download, email sharing, and Razorpay integration.",
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
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
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760106807/r1_cbmzy3.png",
      description:
        "A web app that helps users find recipes based on available ingredients using React and Vite.",
      technologies: ["React", "Vite", "TailwindCSS", "Vercel"],
    },
    {
      name: "Health-Habbit-tracker",
      deployedLink: "https://fst-practise-srgk.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/Health_Habit_Tracker",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760106976/h2_eemmxg.jpg",
      description:
        "Health Habits Tracker — A personal wellness web app for building healthy daily routines.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Firebase"],
    },
    {
      name: "Weather App",
      deployedLink: "https://react-weather-app-jet-ten.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/ReactWeatherApp",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760107207/c1_qpa45d.png",
      description:
        "A React Weather App providing real-time weather information and clean responsive design.",
      technologies: ["React", "Vite", "Tailwind CSS", "Vercel"],
    },
    {
      name: "Rick-And-Morty",
      deployedLink: "https://rick-livid.vercel.app/",
      githubLink: "https://github.com/Prashanth9288/pokemon",
      image:
        "https://res.cloudinary.com/dwlahv9mv/image/upload/v1760108150/rick1_orqdje.jpg",
      description:
        "Explore characters, episodes, and locations from the Rick and Morty universe using official API.",
      technologies: ["React", "Vite", "Tailwind CSS", "Redux", "Rick & Morty API"],
    },
  ],
  backend: [],
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.section`
  padding: 0.5rem 1rem; /* Reduced padding */
  background: transparent;
  min-height: 80vh; /* Reduced height */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 2.5rem; /* Reduced space below title */
  margin-top: 0; /* Removed extra space above */
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

const ProjectNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem; /* Slightly compact */
`;

const NavButton = styled.button`
  background: ${(props) =>
    props.$active ? "rgba(100, 255, 218, 0.1)" : "transparent"};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);
  padding: 0.4rem 0.8rem;
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
  gap: 1.2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const ProjectCard = styled.article`
  background: rgba(17, 34, 64, 0.85);
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.$index * 0.15}s;
  opacity: 0;
  height: 360px; /* Reduced card height */
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 120px; /* Reduced image height */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.08);
  }
`;

const ProjectContent = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: #e6f1ff;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 0.75rem;
  line-height: 1.4;
  margin-bottom: 0.8rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.6rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.2rem 0.4rem;
  border-radius: 99px;
  font-size: 0.6rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
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

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("fullStack");

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

      <ProjectsGrid>
        {(projectCategories[activeCategory] || []).map((project, index) => (
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
              <ProjectLinks>
                <LinkButton
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  $primary
                >
                  <FaExternalLinkAlt /> Live
                </LinkButton>
                <LinkButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </LinkButton>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;
