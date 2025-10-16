import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Section = styled.section`
  min-height: 65vh; /* 🔹 Reduced from 80vh */
  background: transparent;
  padding: 0.5rem 1rem 1.5rem 1rem; /* 🔹 Reduced padding */
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem 1.2rem 0.8rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 900px; /* 🔹 Reduced width */
  margin: 0 auto;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Title = styled.h2`
  font-size: 2rem; /* 🔹 Smaller font */
  font-weight: 700;
  text-align: center;
  color: #64ffda;
  margin-bottom: 2rem; /* 🔹 Reduced space */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px; /* 🔹 Narrower */
    height: 2px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;

    &::after {
      width: 60px;
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;

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
  padding: 1rem 0; /* 🔹 Reduced */
  width: 100%;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.15}s;
  opacity: 0;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 15px;
    width: calc(100% - 15px);
  }

  ${fadeIn}
`;

const Card = styled.div`
  width: 45%;
  background: #141414;
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 12px;
  padding: 1rem; /* 🔹 Reduced */
  position: relative;
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(100% - 15px);
    margin-left: 15px;
    padding: 0.8rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: #64ffda;
    border-radius: 50%;
    top: 50%;
    ${props => props.isEven ? 'right: -35px' : 'left: -35px'};
    transform: translateY(-50%);
    border: 2px solid #1e293b;
    z-index: 1;

    @media (max-width: 768px) {
      left: -20px;
      width: 10px;
      height: 10px;
    }
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1rem; /* 🔹 Smaller */
  color: #fff;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Institution = styled.h4`
  font-size: 0.9rem;
  color: #64ffda;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  margin-top: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #94a3b8;
  font-size: 0.75rem;

  svg {
    color: #64ffda;
    flex-shrink: 0;
  }
`;

const StatusBadge = styled.span`
  position: absolute;
  top: -8px;
  right: 15px;
  background: linear-gradient(135deg, #64ffda, #64ffda);
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.65rem;
    top: -6px;
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