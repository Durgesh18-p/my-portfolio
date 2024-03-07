import styled from "styled-components";
import { ReactTyped } from "react-typed";
import { useState } from "react";

const Homepage = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setDotPosition({ x: event.clientX, y: event.clientY });
  };

  // Function to reset dot position when mouse leaves the homepage
  const handleMouseLeave = () => {
    setDotPosition({ x: 0, y: 0 });
  };
  return (
    <HomePage onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Dot style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }} />
      <Heading>
        <h1>
          <span>F</span>
          <span>R</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>E</span>
          <span>N</span>
          <span>D</span>
          <span> </span>
          <span>D</span>
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
        </h1>
      </Heading>
      <Skills>
        <Section>
          <h2>Skills</h2>
          <ul>
            <li>React JS</li>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <section>
            <ReactTyped
              strings={["Learning Continuously ..."]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </section>
        </Section>
        <Experiance>
          <h2>Experience</h2>
          <h3>Actnable AI</h3>
          <span>Intern</span>
          <ul>
            <li>Built an UI from scratch using React JS.</li>
            <li>Integrated python fastAPI with frontend.</li>
            <li>Worked on MinIo , a cloud based file storage.</li>
          </ul>
        </Experiance>
      </Skills>
    </HomePage>
  );
};

export default Homepage;

const HomePage = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");

  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #020617;
  font-family: "Roboto Condensed", sans-serif;
`;

const Heading = styled.div`
  padding: 5rem;
  text-align: center;
  font-size: 3rem;

  h1 {
    box-shadow: 0 5px 12px rgba(251, 250, 252, 0.2),
      0 5px 10px rgba(254, 254, 255, 0.2);
  }

  span {
    margin: 0 0.1rem;
    transition: all 0.2s linear;
  }

  span:hover {
    color: #2aafe4;
  }
`;

const Skills = styled.div`
  width: 100%;
  color: #fc1aa5;
  display: flex;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  pointer-events: none; /* Ensures the dot doesn't interfere with mouse events */
`;

const Section = styled.section`
  width: 50%;
  border: 1px solid red;
  /* padding-right: 5rem; */
  border-left: none;
  h2 {
    text-align: center;
  }

  ul {
    margin-left: 6rem;
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  section {
    margin-left: 16.5rem;
  }

  ul > section:nth-child(2) {
    margin-left: 10rem;
  }

  ul li {
    list-style: none;
    color: #f4f4f4;
  }
`;

const Experiance = styled.section`
  color: white;
  width: 50%;
  border: 1px solid red;
  border-right: none;
  /* padding: 0rem 4rem; */
  h2 {
    text-align: center;
    color: #fc1aa5;
  }

  span {
    margin-left: 3rem;
    color: #fc1aa5;
  }

  h3 {
    margin-left: 3rem;
    width: 103px;
    padding: 0.3rem;
    border: 1px solid red;
    color: #f4f4f4;
  }

  ul li {
    /* list-style: none; */
    margin-top: 0.7rem;
  }

  ul {
    margin-left: 1.5rem;
  }
`;
