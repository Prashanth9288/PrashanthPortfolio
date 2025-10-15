import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Section = styled.section`
  min-height: 80vh; /* 🔹 Decreased height from 100vh */
  background: transparent;
  padding: 0rem 2rem 2rem 2rem; /* 🔹 Reduced top & bottom padding */
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0rem 1rem 2rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 2.5rem; /* 🔹 Reduced space below title */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #64ffda20, #64ffda, #64ffda20);

    @media (max-width: 768px) {
      left: 0;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.isEven ? 'flex-start' : 'flex-end'};
  padding: 1.5rem 0; /* 🔹 Reduced padding */
  width: 100%;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  opacity: 0;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
    width: calc(100% - 20px);
  }

  ${fadeIn}
`;

const Card = styled.div`
  width: 45%;
  background: #141414;
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 16px;
  padding: 1.25rem; /* 🔹 Slightly smaller padding */
  position: relative;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin-left: 20px;
    padding: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background: #64ffda;
    border-radius: 50%;
    top: 50%;
    ${props => props.isEven ? 'right: -40px' : 'left: -40px'};
    transform: translateY(-50%);
    border: 3px solid #1e293b;
    z-index: 1;

    @media (max-width: 768px) {
      left: -25px;
      width: 10px;
      height: 10px;
    }
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1.15rem;
  color: #fff;
  margin-bottom: 0.4rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Institution = styled.h4`
  font-size: 0.95rem;
  color: #64ffda;
  margin-bottom: 1rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.8rem;
  overflow: hidden;

  svg {
    color: #64ffda;
    flex-shrink: 0;
  }
`;

const StatusBadge = styled.span`
  position: absolute;
  top: -10px;
  right: 20px;
  background: linear-gradient(135deg, #64ffda, #64ffda);
  color: white;
  padding: 0.35rem 0.7rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.7rem;
    top: -8px;
    right: 10px;
  }
`;

const Education = () => {
  const educationData = [
    {
      degree: "Full-Stack Web Development",
      institution: "Masai School",
      location: "Bengaluru, India",
      duration: "03/2025 - 10/2025",
    },
    {
      degree: "BSc Computer Science (MPCs)",
      institution: "Sv Arts College Tirupathi (TTD)",
      location: "Kurnool, AP",
      duration: "12/2021 - 07/2024",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Medha Junior College",
      location: "Kurnool, AP",
      duration: "06/2019 - 03/2021",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Ravindra Vidyanikethan",
      location: "Kurnool, AP",
      duration: "05/2018 - 03/2019",
    }
  ];

  return (
    <Section id="education">
      <Container>
        <Title>Educational Background</Title>
        <Timeline>
          {educationData.map((edu, index) => (
            <TimelineItem key={index} isEven={index % 2 === 0} index={index}>
              <Card isEven={index % 2 === 0}>
                {edu.current && <StatusBadge>Current</StatusBadge>}
                <DegreeTitle>{edu.degree}</DegreeTitle>
                <Institution>{edu.institution}</Institution>
                <InfoGrid>
                  <InfoItem>
                    <FaMapMarkerAlt />
                    <span>{edu.location}</span>
                  </InfoItem>
                  <InfoItem>
                    <FaCalendarAlt />
                    <span>{edu.duration}</span>
                  </InfoItem>
                </InfoGrid>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education;
