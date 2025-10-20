// import React from "react";
// import styled, { keyframes } from "styled-components";
// import {
//   FaBriefcase,
//   FaCalendarAlt,
//   FaCertificate,
//   FaCheckCircle,
// } from "react-icons/fa";

// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(15px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const ExperienceSection = styled.section`
//   padding: 0.8rem 1rem 1.5rem 1rem;
//   min-height: 60vh;
//   position: relative;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     padding: 0.6rem 0.8rem 1.2rem 0.8rem;
//     min-height: auto;
//   }
// `;

// const Container = styled.div`
//   max-width: 900px;
//   margin: 0 auto;
//   position: relative;
//   z-index: 2;

//   @media (max-width: 768px) {
//     padding: 0 0.5rem;
//   }
// `;

// const SectionTitle = styled.h2`
//   text-align: center;
//   color: #64ffda;
//   font-size: 2rem;
//   margin-bottom: 1.5rem;
//   position: relative;
//   margin-top: 0;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: -6px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 90px;
//     height: 2px;
//     background: linear-gradient(90deg, transparent, #64ffda, transparent);
//   }

//   @media (max-width: 768px) {
//     font-size: 1.7rem;
//     margin-bottom: 1.2rem;

//     &::after {
//       width: 70px;
//     }
//   }
// `;

// const ExperienceGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     gap: 0.8rem;
//   }
// `;

// const ExperienceCard = styled.div`
//   background: rgba(23, 34, 52, 0.7);
//   border-radius: 10px;
//   padding: 1.2rem;
//   position: relative;
//   transition: all 0.3s ease;
//   border: 1px solid rgba(100, 255, 218, 0.1);
//   backdrop-filter: blur(8px);
//   animation: ${fadeInUp} 0.5s ease forwards;

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//     border-radius: 8px;
//   }
// `;

// const CompanyHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 0.8rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 0.5rem;
//   }
// `;

// const CompanyInfo = styled.div`
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const Company = styled.h3`
//   color: #64ffda;
//   font-size: 1.4rem;
//   margin-bottom: 0.3rem;
//   display: flex;
//   align-items: center;
//   gap: 0.4rem;

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `;

// const Position = styled.h4`
//   color: #fff;
//   font-size: 1rem;
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }
// `;

// const Timeline = styled.div`
//   display: flex;
//   align-items: center;
//   color: #8892b0;
//   margin-bottom: 0.8rem;
//   font-size: 0.85rem;

//   @media (max-width: 768px) {
//     font-size: 0.8rem;
//     margin-bottom: 0.6rem;
//   }
// `;

// const Description = styled.p`
//   color: #a8b2d1;
//   line-height: 1.4;
//   margin-bottom: 0.8rem;
//   font-size: 0.9rem;

//   @media (max-width: 768px) {
//     font-size: 0.85rem;
//   }
// `;

// const AchievementList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const AchievementItem = styled.li`
//   display: flex;
//   align-items: center;
//   color: #a8b2d1;
//   margin-bottom: 0.5rem;
//   font-size: 0.85rem;

//   svg {
//     color: #64ffda;
//     margin-right: 0.4rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 0.8rem;
//   }
// `;

// const CertificateLink = styled.a`
//   display: inline-flex;
//   align-items: center;
//   color: #64ffda;
//   text-decoration: none;
//   font-weight: 600;
//   font-size: 0.85rem;
//   transition: all 0.3s ease;

//   svg {
//     margin-right: 0.3rem;
//   }

//   &:hover {
//     color: #fff;
//     transform: scale(1.05);
//   }
// `;

// const experiences = [
//   {
//     company: "Sattva Infotech",
//     position: "Full-Stack Developer Intern",
//     period: "01/2024 – 05/2024",
//     description:
//       "Worked on sample projects gaining hands-on experience with backend development and various web technologies.",
//     achievements: [
//       "Developed sample projects including a To-Do Application, Notes Management Platform, and contributed to a Food Booking Application.",
//       "Gained practical experience with backend development and integration.",
//       "Enhanced understanding of teamwork and version control using Git.",
//     ],
//     certification:
//       "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995152/python_full_stack_sattva_r9jvrc.jpg",
//   },
//   {
//     company: "Sattva Infotech",
//     position: "Frontend Web Developer Intern",
//     period: "08/2023 – 10/2023",
//     description:
//       "Developed responsive user interfaces and interactive front-end functionality for e-commerce and corporate website projects.",
//     achievements: [
//       "Implemented responsive interfaces using HTML, CSS, JavaScript, and React.",
//       "Collaborated with cross-functional teams to translate business requirements into digital solutions.",
//       "Gained comprehensive experience in front-end web development project lifecycle.",
//     ],
//     certification:
//       "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995395/front_end__sattva_eegj6h.jpg",
//   },
//   {
//     company: "Python FullStack",
//     position: "Python Developer",
//     period: "Jul 2024 - Dec 2024",
//     description:
//       "Built and deployed full-stack web applications using Python, Django/Flask, and modern front-end technologies.",
//     achievements: [
//       "Completed Python Full-Stack Development, covering back-end and front-end technologies.",
//       "Developed dynamic web applications with CRUD functionality and RESTful APIs.",
//       "Implemented database solutions using MySQL/PostgreSQL and optimized queries.",
//       "Deployed full-stack apps on cloud platforms with CI/CD pipelines.",
//     ],
//     certification:
//       "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995935/MF_INTERNSHIP_CERTIFICATE_-_1-116_page-0001_zonxua.jpg",
//   },
// ];

// const Experience = () => (
//   <ExperienceSection id="experience">
//     <Container>
//       <SectionTitle>Experience</SectionTitle>
//       <ExperienceGrid>
//         {experiences.map((exp, index) => (
//           <ExperienceCard key={index}>
//             <CompanyHeader>
//               <CompanyInfo>
//                 <Company>
//                   <FaBriefcase />
//                   {exp.company}
//                 </Company>
//                 <Position>{exp.position}</Position>
//               </CompanyInfo>
//               {exp.certification && (
//                 <CertificateLink
//                   href={exp.certification}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaCertificate />
//                   Certificate
//                 </CertificateLink>
//               )}
//             </CompanyHeader>

//             <Timeline>
//               <FaCalendarAlt style={{ marginRight: "0.3rem" }} />
//               {exp.period}
//             </Timeline>

//             <Description>{exp.description}</Description>

//             <AchievementList>
//               {exp.achievements.map((achievement, idx) => (
//                 <AchievementItem key={idx}>
//                   <FaCheckCircle />
//                   {achievement}
//                 </AchievementItem>
//               ))}
//             </AchievementList>
//           </ExperienceCard>
//         ))}
//       </ExperienceGrid>
//     </Container>
//   </ExperienceSection>
// );

// export default Experience;
import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaCheckCircle,
} from "react-icons/fa";

// Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Base Section Style
const Section = styled.section`
  padding: 1rem;
  min-height: 60vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.8rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #64ffda;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  margin-top: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 1.2rem;

    &::after {
      width: 70px;
    }
  }
`;

// Shared Card Styles (used for both Experience and Certificates)
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const Card = styled.div`
  background: rgba(23, 34, 52, 0.7);
  border-radius: 10px;
  padding: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(8px);
  animation: ${fadeInUp} 0.5s ease forwards;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const Title = styled.h3`
  color: #64ffda;
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.h4`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #8892b0;
  margin-bottom: 0.8rem;
  font-size: 0.85rem;
`;

const Description = styled.p`
  color: #a8b2d1;
  line-height: 1.4;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: center;
  color: #a8b2d1;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;

  svg {
    color: #64ffda;
    margin-right: 0.4rem;
  }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #64ffda;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;

  svg {
    margin-right: 0.3rem;
  }

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }
`;

// Experience Data
const experiences = [
  {
    company: "Sattva Infotech",
    position: "Full-Stack Developer Intern",
    period: "01/2024 – 05/2024",
    description:
      "Worked on sample projects gaining hands-on experience with backend development and various web technologies.",
    achievements: [
      "Developed sample projects including a To-Do Application, Notes Management Platform, and contributed to a Food Booking Application.",
      "Gained practical experience with backend development and integration.",
      "Enhanced understanding of teamwork and version control using Git.",
    ],
    certification:
      "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995152/python_full_stack_sattva_r9jvrc.jpg",
  },
  {
    company: "Sattva Infotech",
    position: "Frontend Web Developer Intern",
    period: "08/2023 – 10/2023",
    description:
      "Developed responsive user interfaces and interactive front-end functionality for e-commerce and corporate website projects.",
    achievements: [
      "Implemented responsive interfaces using HTML, CSS, JavaScript, and React.",
      "Collaborated with cross-functional teams to translate business requirements into digital solutions.",
      "Gained comprehensive experience in front-end web development project lifecycle.",
    ],
    certification:
      "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995395/front_end__sattva_eegj6h.jpg",
  },
  {
    company: "Python FullStack",
    position: "Python Developer",
    period: "Jul 2024 - Dec 2024",
    description:
      "Built and deployed full-stack web applications using Python, Django/Flask, and modern front-end technologies.",
    achievements: [
      "Completed Python Full-Stack Development, covering back-end and front-end technologies.",
      "Developed dynamic web applications with CRUD functionality and RESTful APIs.",
      "Implemented database solutions using MySQL/PostgreSQL and optimized queries.",
      "Deployed full-stack apps on cloud platforms with CI/CD pipelines.",
    ],
    certification:
      "https://res.cloudinary.com/dwlahv9mv/image/upload/v1759995935/MF_INTERNSHIP_CERTIFICATE_-_1-116_page-0001_zonxua.jpg",
  },
];

// Certificates Data (same style as experience cards)
const certificates = [
  {
    company: "Naresh i Technologies",
    position: "HTML, CSS, and JavaScript Certification",
    period: "Apr 2024 – Jun 2024",
    description:
      "Successfully completed certification focused on building interactive and responsive web applications using core web technologies.",
    achievements: [
      "Mastered semantic HTML, modern CSS layouts (Flexbox & Grid), and DOM manipulation with JavaScript.",
      "Built several responsive UI projects and portfolio components.",
      "Learned advanced JS concepts such as ES6, event handling, and API integration.",
    ],
    certification:
      "https://drive.google.com/file/d/1d8n_lTi9NLPiwQxv3uvUYd2N26CwQOFK/view?usp=drivesdk",
  },
  {
  company: "Naresh i Technologies",
  position: "Oracle SQL Certificate",
  period: "May 2024 – Jul 2024",
  description:
    "Completed an in-depth Oracle SQL course focusing on database design, queries, and data manipulation using Oracle Database.",
  achievements: [
    "Gained strong knowledge in SQL concepts including joins, subqueries, and constraints.",
    "Designed and managed relational databases with normalization and indexing techniques.",
    "Executed complex queries and implemented stored procedures, triggers, and views.",
  ],
  certification:
    "https://drive.google.com/file/d/1v7HMZcYkLE_cEheCycSSa-7ul0m9KjWv/view?usp=drivesdk",
},
];

// Component
const Experience = () => (
  <>
    {/* EXPERIENCE SECTION */}
    <Section id="experience">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <CardGrid>
          {experiences.map((exp, index) => (
            <Card key={index}>
              <Header>
                <div>
                  <Title>
                    <FaBriefcase /> {exp.company}
                  </Title>
                  <Subtitle>{exp.position}</Subtitle>
                </div>
                {exp.certification && (
                  <CertificateLink
                    href={exp.certification}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCertificate /> Certificate
                  </CertificateLink>
                )}
              </Header>

              <Timeline>
                <FaCalendarAlt style={{ marginRight: "0.3rem" }} />
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
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>

    {/* CERTIFICATES SECTION */}
    <Section id="certificates">
      <Container>
        <SectionTitle>Certificates</SectionTitle>
        <CardGrid>
          {certificates.map((cert, index) => (
            <Card key={index}>
              <Header>
                <div>
                  <Title>
                    <FaCertificate /> {cert.company}
                  </Title>
                  <Subtitle>{cert.position}</Subtitle>
                </div>
                <CertificateLink
                  href={cert.certification}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCertificate /> View Certificate
                </CertificateLink>
              </Header>

              <Timeline>
                <FaCalendarAlt style={{ marginRight: "0.3rem" }} />
                {cert.period}
              </Timeline>

              <Description>{cert.description}</Description>

              <AchievementList>
                {cert.achievements.map((achievement, idx) => (
                  <AchievementItem key={idx}>
                    <FaCheckCircle />
                    {achievement}
                  </AchievementItem>
                ))}
              </AchievementList>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  </>
);

export default Experience;
