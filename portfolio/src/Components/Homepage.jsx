import styled from "styled-components";
import space from "../assets/rocket.jpg";
const Homepage = () => {
  return (
    <HomePage>
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
      <AboutMe>
        <KnowMe>
          <span>About Me</span>
          <p>
            As an aspiring frontend developer, I possess robust understanding of
            React JS, JavaScript, HTML and CSS. Additionally I am familiar with
            other technologies like Python , SQL, Java. With the strong desire
            of learning new things , I am open for full-time as well internship
            opportunities.
          </p>
        </KnowMe>
        <Skills>
          <li> • React JS</li>
          <li> • JavaScript</li>
          <li> • HTML</li>
          <li> • CSS</li>
          <li> • Tailwind</li>
          <li> • SQL</li>
          <li> • Python</li>
        </Skills>
      </AboutMe>
    </HomePage>
  );
};

export default Homepage;

const HomePage = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");

  display: flex;
  height: 100vh;
  flex-direction: column;
  background: url(${space});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto Condensed", sans-serif;
`;

const Heading = styled.div`
  padding: 5rem;
  text-align: center;
  font-size: 3rem;
  /* box-shadow: 0 5px 12px rgba(251, 250, 252, 0.2),
    0 5px 10px rgba(254, 254, 255, 0.2); */

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

const AboutMe = styled.div`
  display: flex;
  width: 100%;
`;

const KnowMe = styled.div`
  width: 50%;
  padding-left: 2rem;

  span {
    color: #3860be;
    font-weight: 500;
    letter-spacing: 0.1rem;
    margin-left: 15rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.3rem;
    margin-left: 1rem;
    color: white;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }
`;

const Skills = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 3rem;

  li {
    list-style: none;
    font-size: 1.5rem;
    margin-left: 1rem;
    color: white;
  }

  li:hover {
    color: skyblue;
    border-radius: 5px;
  }
`;
