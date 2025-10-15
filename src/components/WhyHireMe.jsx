import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaCode,
  FaBrain,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaDatabase,
  FaPuzzlePiece,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaCode,
    title: "Full-Stack Expertise",
    text: "Proficient in MERN Stack with a track record of delivering robust, scalable applications",
  },
  {
    icon: FaLightbulb,
    title: "Core Skills",
    text: "Data Structures & Algorithms, OOPs Concepts, Analytical Skills, Problem-Solving, System Design Basics, Debugging & Optimization",
  },
  {
    icon: FaUsers,
    title: "Collaborative Team Player",
    text: "Excellent communication skills with a history of successful cross-functional collaboration",
  },
  {
    icon: FaLightbulb,
    title: "Innovative Problem Solver",
    text: "Proven ability to tackle complex challenges with creative, efficient solutions",
  },
  {
    icon: FaRocket,
    title: "Rapid Learner & Adaptor",
    text: "Quick to master new technologies and methodologies, ensuring cutting-edge solutions",
  },
  {
    icon: FaPuzzlePiece,
    title: "Scalable Solution Architect",
    text: "Passionate about creating efficient, maintainable, and scalable code architectures",
  },
  {
    icon: FaChartLine,
    title: "Performance Optimizer",
    text: "Skilled at identifying and resolving bottlenecks to enhance application speed and efficiency",
  },
  {
    icon: FaShieldAlt,
    title: "Security-Conscious Developer",
    text: "Prioritize robust security practices in all stages of development to protect sensitive data",
  },
];

// Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container with reduced height
const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem 1.5rem;
  background-color: transparent;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2rem 1rem;
  }
`;

// Title styling
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 2rem;
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;

    &::after {
      width: 70px;
    }
  }
`;

// Grid styling (compact)
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.2rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Card styling with compact height
const ReasonCard = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out forwards;
  animation-delay: ${(props) => props.index * 0.15}s;
  background: rgba(100, 255, 218, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 160px;

  &:hover {
    transform: translateY(-4px);
    background: rgba(100, 255, 218, 0.06);
    box-shadow: 0 6px 18px -10px rgba(100, 255, 218, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #64ffda;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    min-height: 140px;
  }
`;

const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const ReasonTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #64ffda;
  margin-bottom: 0.6rem;
`;

const ReasonText = styled.p`
  font-size: 0.95rem;
  color: #8892b0;
  line-height: 1.6;
`;

// Main Component
const WhyHireMe = () => {
  return (
    <Container>
      <Title>Work</Title>
      <Grid>
        {reasons.map((reason, index) => (
          <ReasonCard key={index} index={index}>
            <IconWrapper>
              <reason.icon />
            </IconWrapper>
            <ReasonTitle>{reason.title}</ReasonTitle>
            <ReasonText>{reason.text}</ReasonText>
          </ReasonCard>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyHireMe;
