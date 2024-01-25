import { useState } from "react";
import styled from "styled-components";
import ibm from "../assets/ibm.png";
import webEssentials from "../assets/webEssentials.jpg";
import cisco from "../assets/cisco.jpeg";
import sql from "../assets/sql.jpg";
import space from "../assets/space.jpg";

const Certificates = () => {
  const certificates = [ibm, webEssentials, cisco, sql];
  const [activeImage, setActiveImage] = useState(0);

  setTimeout(() => {
    handleImage();
  }, 2200);

  const handleImage = () => {
    if (activeImage === 0) {
      setActiveImage(certificates.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  return (
    <CertificateContainer>
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
  background: url(${space});

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
