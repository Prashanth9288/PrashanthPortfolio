// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideIn = keyframes`
//   from { transform: translateX(100%); }
//   to { transform: translateX(0); }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0rem 1.5rem;
//   background-color: transparent;
//   animation: ${fadeIn} 0.5s ease-out;

//   @media (max-width: 768px) {
//     padding: 1.5rem 1rem;
//   }
// `;

// const Heading = styled.h2`
//   font-size: 3rem;
//   font-weight: 800;
//   text-align: center;
//   color: #64ffda;
//   margin-bottom: 3rem;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -12px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 120px;
//     height: 4px;
//     background: linear-gradient(90deg, transparent, #64ffda, transparent);
//   }

//   @media (max-width: 768px) {
//     font-size: 2rem;
//     margin-bottom: 2rem;
//   }
// `;

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   background-color: rgba(30, 41, 59, 0.5);
//   border: 1px solid rgba(100, 255, 218, 0.1);
//   border-radius: 1rem;
//   overflow: hidden;
//   backdrop-filter: blur(10px);

//   @media (min-width: 769px) {
//     flex-direction: row;
//     margin-right:20px;
//   }
// `;

// const Form = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   padding: 2rem;

//   @media (min-width: 769px) {
//     width: 60%;
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//     gap: 1rem;
//   }
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const Label = styled.label`
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: #64ffda;
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   padding: 0.875rem;
//   border-radius: 0.375rem;
//   background-color: rgba(45, 55, 72, 0.5);
//   color: #fff;
//   border: 1px solid rgba(100, 255, 218, 0.2);
//   outline: none;
//   transition: all 0.3s ease;
//   width: 100%;
//   font-size: 1rem;

//   &:focus {
//     border-color: #64ffda;
//     box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 0.875rem;
//   border-radius: 0.375rem;
//   background-color: rgba(45, 55, 72, 0.5);
//   color: #fff;
//   border: 1px solid rgba(100, 255, 218, 0.2);
//   outline: none;
//   transition: all 0.3s ease;
//   resize: vertical;
//   min-height: 150px;
//   width: 100%;
//   font-size: 1rem;

//   &:focus {
//     border-color: #64ffda;
//     box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
//   }

//   @media (max-width: 768px) {
//     min-height: 120px;
//   }
// `;

// const Button = styled.button`
//   padding: 1rem;
//   border-radius: 0.375rem;
//   background-color: transparent;
//   color: #64ffda;
//   font-weight: bold;
//   border: 1px solid #64ffda;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   cursor: pointer;
//   width: 100%;
//   font-size: 1rem;

//   &:hover {
//     background-color: rgba(100, 255, 218, 0.1);
//     transform: translateY(-2px);
//   }

//   &:disabled {
//     opacity: 0.7;
//     cursor: not-allowed;
//     transform: none;
//   }
// `;

// const InfoSection = styled.div`
//   width: 100%;
//   padding: 2rem;
//   background-color: rgba(45, 55, 72, 0.3);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (min-width: 769px) {
//     width: 40%;
//     border-left: 1px solid rgba(100, 255, 218, 0.1);
//   }

//   @media (max-width: 768px) {
//     padding: 1.5rem;
//     border-top: 1px solid rgba(100, 255, 218, 0.1);
//   }
// `;

// const InfoHeading = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #64ffda;
//   margin-bottom: 1.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.25rem;
//     margin-bottom: 1.25rem;
//   }
// `;

// const InfoList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;

//   @media (max-width: 768px) {
//     gap: 1.25rem;
//   }
// `;

// const InfoItem = styled.p`
//   display: flex;
//   align-items: center;
//   font-size: 1rem;
//   color: #d1d5db;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateX(10px);
//   }

//   svg {
//     margin-right: 1rem;
//     font-size: 1.25rem;
//     color: #64ffda;
//     flex-shrink: 0;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//     transition: color 0.3s ease;
//     word-break: break-word;

//     &:hover {
//       color: #64ffda;
//     }
//   }

//   @media (max-width: 768px) {
//     font-size: 0.9375rem;
    
//     svg {
//       font-size: 1.125rem;
//       margin-right: 0.75rem;
//     }
//   }
// `;

// const Notification = styled.div`
//   position: fixed;
//   z-index: 1000;
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   animation: ${slideIn} 0.3s ease-out;
//   backdrop-filter: blur(10px);
//   background-color: ${props => props.isError ? 'rgba(239, 68, 68, 0.9)' : 'rgba(16, 185, 129, 0.9)'};
//   color: white;
//   padding: 1rem 1.5rem;
//   border-radius: 0.5rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   @media (min-width: 769px) {
//     top: 2rem;
//     right: 2rem;
//     max-width: 400px;
//   }

//   @media (max-width: 768px) {
//     bottom: 1rem;
//     left: 1rem;
//     right: 1rem;
//     padding: 1rem;
//     font-size: 0.9375rem;
//   }

//   svg {
//     font-size: 1.25rem;
//     flex-shrink: 0;

//     @media (max-width: 768px) {
//       font-size: 1.125rem;
//     }
//   }
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   padding: 0.25rem;
//   margin-left: auto;
//   opacity: 0.8;
//   transition: opacity 0.3s ease;
//   flex-shrink: 0;

//   &:hover {
//     opacity: 1;
//   }

//   @media (max-width: 768px) {
//     padding: 0.5rem;
//   }
// `;

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');
//   const [isError, setIsError] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         formData,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       );
//       setStatus('Message sent successfully!');
//       setIsError(false);
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       setStatus('Failed to send message. Please try again.');
//       setIsError(true);
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setStatus(''), 5000);
//     }
//   };

//   return (
//     <Container>
//       <Heading>Contact Me</Heading>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <InputGroup>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your Name"
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="your.email@example.com"
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="message">Message</Label>
//             <TextArea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               placeholder="Your message here..."
//             />
//           </InputGroup>
//           <Button type="submit" disabled={isSubmitting}>
//             <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
//           </Button>
//         </Form>
//         <InfoSection>
//           <InfoHeading>Get in Touch</InfoHeading>
//           <InfoList>
//             <InfoItem>
//               <FaEnvelope />
//               <a href="mailto:shivasiddu80@gmail.com">shivasiddu80@gmail.com</a>
//             </InfoItem>
//             <InfoItem>
//               <FaPhone />
//               <a href="tel:+919398462802">+91 9398462802</a>
//             </InfoItem>
//             <InfoItem>
//               <FaLinkedin />
//               <a href="https://www.linkedin.com/in/boyashiva" target="_blank" rel="noopener noreferrer">
//                 LinkedIn Profile
//               </a>
//             </InfoItem>
//             <InfoItem>
//               <FaGithub />
//               <a href="https://github.com/ShivaBoya" target="_blank" rel="noopener noreferrer">
//                 GitHub Profile
//               </a>
//             </InfoItem>
//           </InfoList>
//         </InfoSection>
//       </FormContainer>
//       {status && (
//         <Notification isError={isError}>
//           {isError ? <FaTimesCircle /> : <FaCheckCircle />}
//           {status}
//           <CloseButton onClick={() => setStatus('')}>
//             <FaTimes />
//           </CloseButton>
//         </Notification>
//       )}
//     </Container>
//   );
// }

// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

// // Subtle shimmer background for depth
// const shimmer = keyframes`
//   0% { background-position: -1000px 0; }
//   100% { background-position: 1000px 0; }
// `;

// const Section = styled.section`
//   padding: 2.5rem 1rem 3rem 1rem;
//   background: transparent;
//   color: white;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: -10px;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: radial-gradient(
//       circle at 50% 50%,
//       rgba(100, 255, 218, 0.03) 0%,
//       transparent 80%
//     );
//     pointer-events: none;
//   }

//   @media (max-width: 768px) {
//     padding: 2rem 1rem;
//   }
// `;

// const Container = styled.div`
//   max-width: 1100px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1.5rem;
//   position: relative;
//   z-index: 1;

//   @media (min-width: 768px) {
//     grid-template-columns: 1.2fr 0.8fr; /* form left, info right */
//     gap: 1.8rem;
//   }
// `;

// const Box = styled.div`
//   background-color: #1f2937;
//   padding: 1.8rem;
//   border-radius: 0.75rem;
//   border: 1px solid #374151;
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
//   transition: 0.3s ease;

//   &:hover {
//     border-color: #14b8a6;
//     box-shadow: 0 0 12px rgba(20, 184, 166, 0.25);
//   }

//   @media (max-width: 768px) {
//     padding: 1.5rem;
//   }
// `;

// const Title = styled.h2`
//   font-size: 1.8rem;
//   font-weight: bold;
//   color: #14b8a6;
//   margin-bottom: 1.5rem;
// `;

// const Detail = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   margin-bottom: 1.2rem;

//   svg {
//     font-size: 1.3rem;
//     color: #14b8a6;
//   }

//   a,
//   p {
//     font-size: 0.95rem;
//     color: #e5e7eb;
//     text-decoration: none;
//     transition: 0.3s ease;

//     &:hover {
//       color: #14b8a6;
//     }
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Heading = styled.h2`
//   font-size: 1.6rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1.25rem;

//   span {
//     color: #14b8a6;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.4rem;
//   }
// `;

// const Input = styled.input`
//   padding: 0.8rem;
//   border-radius: 0.4rem;
//   background-color: #374151;
//   border: 1px solid #4b5563;
//   color: white;
//   outline: none;
//   font-size: 0.95rem;
//   transition: 0.3s ease;

//   &:focus {
//     border-color: #14b8a6;
//     box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.25);
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 0.8rem;
//   border-radius: 0.4rem;
//   background-color: #374151;
//   border: 1px solid #4b5563;
//   color: white;
//   outline: none;
//   min-height: 120px;
//   resize: vertical;
//   font-size: 0.95rem;
//   transition: 0.3s ease;

//   &:focus {
//     border-color: #14b8a6;
//     box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.25);
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem 1.2rem;
//   border-radius: 0.4rem;
//   background-color: #14b8a6;
//   color: white;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.6rem;
//   font-size: 0.95rem;

//   &:hover {
//     background-color: #2dd4bf;
//     transform: translateY(-2px);
//     box-shadow: 0 5px 15px rgba(20, 184, 166, 0.25);
//   }

//   svg {
//     font-size: 1rem;
//   }
// `;

// const Contact = () => {
//   return (
//     <Section>
//       <Container>
//         {/* Left: Contact Form */}
//         <Box>
//           <Form>
//             <Heading>
//               Contact <span>Me</span>
//             </Heading>

//             <Input type="text" placeholder="Name" required />
//             <Input type="email" placeholder="Email" required />
//             <TextArea placeholder="Message" required />

//             <Button type="submit">
//               <FaPaperPlane /> Send Message
//             </Button>
//           </Form>
//         </Box>

//         {/* Right: Contact Info */}
//         <Box>
//           <Title>Get in Touch</Title>

//           <Detail>
//             <FaEnvelope />
//             <a href="mailto:prashanth939288@gmail.com">
//               prashanth939288@gmail.com
//             </a>
//           </Detail>

//           <Detail>
//             <FaLinkedin />
//             <a
//               href="https://www.linkedin.com/in/prashanth-uppara/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               LinkedIn Profile
//             </a>
//           </Detail>

//           <Detail>
//             <FaGithub />
//             <a
//               href="https://github.com/Prashanth9288"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub Profile
//             </a>
//           </Detail>
//         </Box>
//       </Container>
//     </Section>
//   );
// };

// export default Contact;



// Contact.jsx — Compact Height Version
import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Section = styled.section`
  padding: 2rem 1rem; /* reduced padding */
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 70vh; /* reduced height */
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1100px; /* slightly narrower */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem; /* reduced gap */
  position: relative;
  z-index: 1;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const Box = styled.div`
  background: rgba(26, 26, 46, 0.9);
  padding: 1.5rem; /* reduced padding */
  border-radius: 16px;
  border: 2px solid rgba(51, 208, 190, 0.2);
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(51, 208, 190, 0.4);
    box-shadow: 0 10px 30px rgba(51, 208, 190, 0.2);
    transform: translateY(-3px);
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #33d0beff;
  margin-bottom: 1.2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  padding: 0.6rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(51, 208, 190, 0.05);

  &:hover {
    background: rgba(51, 208, 190, 0.1);
    transform: translateX(2px);
  }

  svg {
    font-size: 1.1rem;
    color: #33d0beff;
  }

  a,
  p {
    font-size: 0.85rem;
    color: #e5e7eb;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: #33d0beff;
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #e2e8f0;

  span {
    color: #33d0beff;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(55, 65, 81, 0.5);
  border: 2px solid rgba(75, 85, 99, 0.5);
  color: white;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #33d0beff;
    box-shadow: 0 0 0 2px rgba(51, 208, 190, 0.2);
    background: rgba(55, 65, 81, 0.7);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(55, 65, 81, 0.5);
  border: 2px solid rgba(75, 85, 99, 0.5);
  color: white;
  min-height: 100px;
  resize: vertical;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #33d0beff;
    box-shadow: 0 0 0 2px rgba(51, 208, 190, 0.2);
    background: rgba(55, 65, 81, 0.7);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.4rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #33d0beff, #20b2ca);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-top: 0.8rem;

  &:hover {
    background: linear-gradient(135deg, #20b2ca, #33d0beff);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(51, 208, 190, 0.4);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const Message = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.6rem;
  border-radius: 6px;
  background: ${(props) =>
    props.success ? "rgba(34, 197, 94, 0.1)" : "rgba(248, 113, 113, 0.1)"};
  color: ${(props) => (props.success ? "#22c55e" : "#f87171")};
  border: 1px solid
    ${(props) => (props.success ? "rgba(34, 197, 94, 0.3)" : "rgba(248, 113, 113, 0.3)")};
`;

const Contact = () => {
  const formRef = useRef();
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jii94tf",
        "template_b5wy8ni",
        formRef.current,
        "kH58J6-BhUffLq9kc"
      )
      .then(
        () => {
          setMsg("✅ Message sent successfully!");
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setMsg("❌ Failed to send message. Please try again.");
          setSuccess(false);
          console.error(error.text);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        {/* Left: Contact Form */}
        <Box>
          <Form ref={formRef} onSubmit={sendEmail}>
            <Heading>
              Contact <span>Me</span>
            </Heading>
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />
            <Button type="submit">
              <FaPaperPlane /> Send
            </Button>
            {msg && <Message success={success}>{msg}</Message>}
          </Form>
        </Box>

        {/* Right: Contact Info */}
        <Box>
          <Title>Get in Touch</Title>

          <Detail>
            <FaEnvelope />
            <a href="mailto:prashanth939288@gmail.com">prashanth939288@gmail.com</a>
          </Detail>

          <Detail>
            <FaPhoneAlt />
            <a href="tel:+919392881592">+91 9392881592</a>
          </Detail>

          <Detail>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/search/Hyderabad,+Telangana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hyderabad,Telangana
            </a>
          </Detail>

          <Detail>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/prashanth-uppara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </Detail>

          <Detail>
            <FaGithub />
            <a
              href="https://github.com/Prashanth9288"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </Detail>
        </Box>
      </Container>
    </Section>
  );
};

export default Contact;