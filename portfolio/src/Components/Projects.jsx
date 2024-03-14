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
        All sourde-code is on <span>GitHub</span>.
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
  border: 1px solid #fc1aa5;
  padding: 3px;

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
  color: #2c2c6c;
  background-color: #4bd5ff;
  letter-spacing: 0.1rem;
  cursor: pointer;
  margin-top: 0.8rem;
  transition: all ease-in 0.3s;
  font-family: "Roboto Condensed", sans-serif;
  border-radius: 10px;
  border: 2px solid #2c2c6c;

  &:hover {
    background: transparent;
    border: 1px solid #4bd5ff;
    color: #4bd5ff;
    box-shadow: 0 5px 8px rgba(251, 250, 252, 0.2),
      0 5px 7px rgba(254, 254, 255, 0.2);
    letter-spacing: 0.2rem;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>'),
      auto;
  }
`;
