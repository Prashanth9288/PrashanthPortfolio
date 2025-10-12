import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaCheckCircle,
} from "react-icons/fa";

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

const ExperienceSection = styled.section`
  padding: 0rem 2rem;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #64ffda;
  font-size: 3rem;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;

    &::after {
      width: 100px;
    }
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(23, 34, 52, 0.7);
  border-radius: 15px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.6s ease forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const CompanyInfo = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Company = styled.h3`
  color: #64ffda;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Position = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #8892b0;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  color: #a8b2d1;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: center;
  color: #a8b2d1;
  margin-bottom: 0.75rem;

  svg {
    color: #64ffda;
    margin-right: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #64ffda;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const experiences = [
 {
    company: "Sattva Infotech",
    position: "Full-Stack Developer Intern",
    period: "01/2024 – 05/2024",
    current: false,
    description:
      "Worked on sample projects gaining hands-on experience with backend development and various web technologies.",
    achievements: [
      "Developed sample projects including a To-Do Application, Notes Management Platform, and contributed to a Food Booking Application",
      "Gained practical experience with backend development and integration",
      "Enhanced understanding of teamwork and version control using Git",
    ],
     certification: "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995152/python_full_stack_sattva_r9jvrc.jpg",
    internId: "SIT-2023-1306"
  },
  {
    company: "Sattva Infotech",
    position: "Frontend Web Developer Intern",
    period: "08/2023 – 10/2023",
    current: false,
    description: "Developed responsive user interfaces and interactive front-end functionality for e-commerce and corporate website projects using modern web technologies.",
    achievements: [
      "Implemented responsive interfaces using HTML, CSS, JavaScript, and React",
      "Collaborated with cross-functional teams to translate business requirements into digital solutions",
      "Gained comprehensive experience in front-end web development project lifecycle"
    ],
    certification: "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995395/front_end__sattva_eegj6h.jpg",
    internId: "SIT-2023-2595"
  },
  {
    company: "Python FullStack",
    position: "Python Developer",
    period: "Jul 2024 - Dec 2024",
    current: false,
    description:
      "Built and deployed full-stack web applications using Python, Django/Flask, and modern front-end technologies, ensuring seamless integration between back-end APIs and responsive user interfaces.",
    achievements: [
      "Completed Python Full-Stack Development, covering both back-end (Django/Flask, REST APIs, authentication, database management) and front-end (HTML, CSS, JavaScript, React) technologies",
      "Developed dynamic and responsive web applications with CRUD functionality, secure authentication, and RESTful API integrations",
      "Implemented database solutions using MySQL/PostgreSQL and optimized queries for performance",
      "Deployed full-stack applications on cloud platforms (Heroku/Render) with CI/CD pipelines for automated deployment",
      "Collaborated on real-world projects demonstrating proficiency in both client-side and server-side development",
    ],
    certification:
      "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995935/MF_INTERNSHIP_CERTIFICATE_-_1-116_page-0001_zonxua.jpg",
  },
];

const Experience = () => (
  <ExperienceSection id="experience">
    <Container>
      <SectionTitle>Certificates</SectionTitle>
      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <CompanyHeader>
              <CompanyInfo>
                <Company>
                  <FaBriefcase />
                  {exp.company}
                </Company>
                <Position>{exp.position}</Position>
              </CompanyInfo>
              {exp.certification && (
                <CertificateLink
                  href={exp.certification}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCertificate />
                  Certificate
                </CertificateLink>
              )}
            </CompanyHeader>

            <Timeline>
              <FaCalendarAlt style={{ marginRight: "0.5rem" }} />
              {exp.period}
            </Timeline>

            <Description>{exp.description}</Description>

            <AchievementList>
              {exp.achievements.map((achievement, idx) => (
                <AchievementItem key={idx}>
                  <FaCheckCircle />
                  {achievement}
                </AchievementItem>
              ))}
            </AchievementList>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </Container>
  </ExperienceSection>
);

export default Experience;
