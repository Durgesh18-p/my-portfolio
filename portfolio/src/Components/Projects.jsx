import styled from "styled-components";
import diceGame from "../assets/Dicegame.mp4";
import AdviceApp from "../assets/AdviceApp.mp4";
import space from "../assets/rocket.jpg";
import BoughtOrNot from "../assets/boughtornot.mp4";

const Projects = () => {
  const handleAdviceAppGithubClick = () => {
    window.open("https://github.com/Durgesh18-p/Advice-App");
  };

  const handlediceGameGithubClick = () => {
    window.open("https://github.com/Durgesh18-p/Advice-App");
  };

  const handleBoughtOrNotGithubClick = () => {
    window.open("https://github.com/Durgesh18-p/E-Commerce-website");
  };

  return (
    <Project>
      <Slogan>
        My projects are <span>proof</span> of my knowledge.
      </Slogan>
      <ReactProjects>
        <Project1>
          <video src={diceGame} controls></video>
          <Button onClick={handlediceGameGithubClick}>GitHub</Button>
        </Project1>
        <Project2>
          <video src={AdviceApp} controls></video>
          <Button onClick={handleAdviceAppGithubClick}>GitHub</Button>
        </Project2>
        <Project3>
          <video src={BoughtOrNot} controls></video>
          <Button onClick={handleBoughtOrNotGithubClick}>GitHub</Button>
        </Project3>
      </ReactProjects>
    </Project>
  );
};

export default Projects;

const Project = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");
  padding: 0.5rem;
  text-align: center;
  scroll-behavior: auto;
  height: 100vh;
  background: url(${space});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #555555;
  font-family: "Roboto Condensed", sans-serif;
`;

const Slogan = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;

  span {
    color: #fc039c;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

const ReactProjects = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  margin-top: 5rem;
`;

const Project1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  video {
    height: 70%;
    width: 100%;
    transition: all ease-in 0.5s;
  }

  video:hover {
    border-radius: 2rem;
    height: 80%;
    width: 100%;
  }
`;

const Project2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  video {
    height: 70%;
    width: 100%;
    transition: all ease-in 0.5s;
  }

  video:hover {
    border-radius: 2rem;
    height: 80%;
    width: 100%;
  }
`;

const Project3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  video {
    height: 70%;
    width: 100%;
    transition: all ease-in 0.5s;
  }

  video:hover {
    border-radius: 2rem;
    height: 80%;
    width: 100%;
  }
`;

const Button = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 550;
  width: 10rem;
  background-color: transparent;
  color: #fc1aa5;
  letter-spacing: 0.1rem;
  cursor: pointer;
  margin-top: 0.8rem;
  transition: all ease-in 0.5s;
  font-family: "Roboto Condensed", sans-serif;

  &:hover {
    box-shadow: 0 5px 12px rgba(251, 250, 252, 0.2),
      0 5px 10px rgba(254, 254, 255, 0.2);
    letter-spacing: 0.2rem;
  }
`;
