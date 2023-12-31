import styled from "styled-components";
import resume from "../assets/resume.png";

const Resume = () => {
  return (
    <MyResume>
      <ResumeContainer>
        <img src={resume} alt="Resume" />
      </ResumeContainer>
    </MyResume>
  );
};

export default Resume;

const MyResume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResumeContainer = styled.div`
  margin: auto;

  img {
    transition: transform 2s ease-in-out;
  }

  img:hover {
    transform: rotate(-5deg);
  }
`;
