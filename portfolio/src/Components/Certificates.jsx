import { useState } from "react";
import styled from "styled-components";
import ibm from "../assets/ibm.png";
import webEssentials from "../assets/webEssentials.jpg";
import cisco from "../assets/cisco.jpeg";
import sql from "../assets/sql.jpg";

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
  background-color: #100009;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: url(video);

  img {
    width: 560px;
    height: 400px;
    border-radius: 10px;
  }

  img:hover {
    box-shadow: 0 8px 15px rgba(188, 188, 189, 0.2),
      0 10px 22px rgba(254, 254, 255, 0.2);
  }
`;
