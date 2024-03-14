import { useState } from "react";
import styled from "styled-components";
import ibm from "../assets/ibm.png";
import webEssentials from "../assets/webEssentials.jpg";
import cisco from "../assets/cisco.jpeg";
import sql from "../assets/sql.jpg";
// import space from "../assets/space.jpg";
import space1 from "../assets/rocket.jpg";

const Certificates = () => {
  const certificates = [ibm, webEssentials, cisco, sql];
  const [activeImage, setActiveImage] = useState(0);

  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setDotPosition({ x: event.clientX, y: event.clientY });
  };

  // Function to reset dot position when mouse leaves the homepage
  const handleMouseLeave = () => {
    setDotPosition({ x: 0, y: 0 });
  };

  setTimeout(() => {
    handleImage();
  }, 2000);

  const handleImage = () => {
    if (activeImage === 0) {
      setActiveImage(certificates.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  return (
    <CertificateContainer
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Dot style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }} />
      <img src={certificates[activeImage]} alt="Certificate" />
    </CertificateContainer>
  );
};

export default Certificates;

const CertificateContainer = styled.div`
  height: 90%;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${space1});
  font-family: "Roboto Condensed", sans-serif;

  img {
    width: 560px;
    height: 400px;
    border-radius: 10px;
    transition: all 0.5s linear;
    margin-bottom: 4rem;
  }

  img:hover {
    box-shadow: 0 18px 25px rgba(188, 188, 189, 0.2),
      0 17px 32px rgba(254, 254, 255, 0.2);
    width: 580px;
    height: 420px;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  pointer-events: none; /* Ensures the dot doesn't interfere with mouse events */
`;
