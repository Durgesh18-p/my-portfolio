import styled from "styled-components";

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sequi quisquam corporis distinctio iste minima fugiat dolore,
            voluptas obcaecati laborum officia, inventore aliquid consectetur
            incidunt voluptatem praesentium at expedita nisi aspernatur officiis
            sunt! Voluptas quam, magnam saepe ex officia laudantium.
          </p>
        </KnowMe>
        <Skills>
          <li>React JS</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>SQL</li>
          <li>Python</li>
        </Skills>
      </AboutMe>
    </HomePage>
  );
};

export default Homepage;

const HomePage = styled.section`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  height: 10%;
  padding: 5rem;
  text-align: center;
  font-size: 3rem;

  span {
    margin: 0 0.1rem;
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

  p {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: white;
    font-weight: 400;
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
    font-size: 2rem;
    margin-left: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
  }

  li:hover {
    color: skyblue;
    border-radius: 5px;
  }
`;
