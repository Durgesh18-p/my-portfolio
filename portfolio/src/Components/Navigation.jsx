import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
// import Resume from "./Resume";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
// import Homepage from "./HomePage";
import { ReactTyped } from "react-typed";

const Navigation = ({ react }) => {
  return (
    <>
      <NavigationBar>
        <Container>
          <ReactLogo>
            <RotatingImage src={react} alt="React Logo" />
          </ReactLogo>
          <h1>
            <ReactTyped
              strings={["Durgesh Suryawanshi."]}
              typeSpeed={150}
              backSpeed={80}
              loop
            />
          </h1>
        </Container>

        <NvigationOptions>
          <li>
            <StyledLink to="/home">HOME</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">PROJECTS</StyledLink>
          </li>
          {/* <li>
            <StyledLink to="/resume">RESUME</StyledLink>
          </li> */}
          <li>
            <StyledLink to="/certificate">CERTIFICATES</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">CONTACT</StyledLink>
          </li>
        </NvigationOptions>
      </NavigationBar>
      <Routes>
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/certificate" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  react: PropTypes.any.isRequired,
};

const Container = styled.section`
  width: 50%;
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");
  h1 {
    margin-top: 1.6rem;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

const NavigationBar = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");
  height: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  background-color: #002855;
  font-family: "Roboto Condensed", sans-serif;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ReactLogo = styled.div`
  height: 100%;
  width: 10%;
  padding: 0.4rem;
  animation: ${rotate360} 25s linear infinite;
`;

const RotatingImage = styled.img`
  width: 100%;
  margin-top: 0.2rem;
`;

const NvigationOptions = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-right: 5rem;

  li {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");
  color: white;
  letter-spacing: 0.1rem;
  font-weight: 600;
  margin-right: 1rem;
  transition: all 0.7s ease;
  font-family: "Roboto Condensed", sans-serif;

  &:hover {
    color: #fc1aa5;
  }
`;
