import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Navigation = ({ react }) => {
  return (
    <NavigationBar>
      <Name>Durgesh Suryawanshi</Name>
      <ReactLogo>
        <RotatingImage src={react} alt="React Logo" />
      </ReactLogo>
      <NvigationOptions>
        <li>
          <StyledLink to="/projects">PROJECTS</StyledLink>
        </li>
        <li>
          <StyledLink to="/resume">RESUME</StyledLink>
        </li>
        <li>
          <StyledLink to="/certificate">CERTIFICATES</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </li>
      </NvigationOptions>
    </NavigationBar>
  );
};

export default Navigation;

Navigation.propTypes = {
  react: PropTypes.any.isRequired,
};

const NavigationBar = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
`;

const Name = styled.h2`
  letter-spacing: 0.2rem;
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
  margin-left: 6rem;
  width: 20%;
  animation: ${rotate360} 25s linear infinite;
`;

const RotatingImage = styled.img`
  width: 100%;
  max-height: 100%;
`;

const NvigationOptions = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 30%;
  margin-right: 0.5rem;

  li {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  letter-spacing: 0.1rem;
  font-weight: 600;

  &:hover {
    color: #1ca7df;
  }
`;
