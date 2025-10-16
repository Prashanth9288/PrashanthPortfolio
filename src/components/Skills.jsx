import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaTerminal,
  FaCode,
} from "react-icons/fa";
import {
  SiRedux,
  SiJson,
  SiVite,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiVercel
} from "react-icons/si";
import styled, { keyframes } from "styled-components";

// =================== Data ===================
const devSkills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "DOM", icon: FaHtml5, color: "#D4AF37" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "JSON", icon: SiJson, color: "#F7DF1E" },
  { name: "Vite", icon: SiVite, color: "#BD34FE" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
];

const techTools = [
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Terminal", icon: FaTerminal, color: "#4EAA25" },
  { name: "VS Code", icon: FaCode, color: "#0078D7" }, // ✅ replaced missing icon
  { name: "Node JS", icon: FaNodeJs, color: "#68A063" },
  { name: "NPM", icon: FaNodeJs, color: "#CB3837" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#000000" }
];

// =================== Styled Components ===================
const Container = styled.section`
  padding: 1.5rem 1rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #64ffda;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 6px rgba(100, 255, 218, 0.2); }
  50% { box-shadow: 0 0 15px rgba(100, 255, 218, 0.5); }
  100% { box-shadow: 0 0 6px rgba(100, 255, 218, 0.2); }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.8rem;
  width: 90%;
  max-width: 1000px;
  justify-items: center;
`;

const SkillCard = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(20, 33, 61, 0.85);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(100, 255, 218, 0.15);
  box-shadow: 0 0 8px rgba(100, 255, 218, 0.1);
  transition: 0.3s ease;
  text-align: center;
  animation: ${glowPulse} 5s infinite ease-in-out;

  &:hover {
    transform: scale(1.05);
    border-color: #64ffda;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.6);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.4rem;
  color: ${(props) => props.color};
  margin-bottom: 0.3rem;
`;

const SkillName = styled.p`
  color: #e6f1ff;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #5de4c7;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
  font-weight: 700;
`;

// =================== Component ===================
export default function Skills() {
  return (
    <Container id="skills">
      <Title>Technical Expertise</Title>

      <SkillGrid>
        {devSkills.map((skill, i) => (
          <SkillCard key={i}>
            <SkillIcon color={skill.color}>
              {React.createElement(skill.icon)}
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillGrid>

      <SectionTitle>Tech Tools</SectionTitle>

      <SkillGrid>
        {techTools.map((tool, i) => (
          <SkillCard key={i}>
            <SkillIcon color={tool.color}>
              {React.createElement(tool.icon)}
            </SkillIcon>
            <SkillName>{tool.name}</SkillName>
          </SkillCard>
        ))}
      </SkillGrid>
    </Container>
  );
}