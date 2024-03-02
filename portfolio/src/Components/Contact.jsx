import styled from "styled-components";
import space from "../assets/rocket.jpg";

const Contact = () => {
  const handleWhatsappContact = () => {
    let number = "9405807468";
    window.open(`https://api.whatsapp.com/send?phone=${number}`);
  };

  const handleLinkedInContact = () => {
    window.open("https://www.linkedin.com/in/durgesh-suryawanshi-056a58230/");
  };

  return (
    <Container>
      <LinkedIn>
        <i className="fa-brands fa-linkedin"></i>
        <Button onClick={handleLinkedInContact}>LinkedIn</Button>
      </LinkedIn>
      <WhatsApp>
        <i className="fa-brands fa-square-whatsapp"></i>
        <Button onClick={handleWhatsappContact}>WhatsApp</Button>
      </WhatsApp>
    </Container>
  );
};
export default Contact;

const Container = styled.div`
  background: url(${space});
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkedIn = styled.div`
  height: 85%;
  width: 50%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 20rem;
    color: #0096ff;
  }
`;

const WhatsApp = styled.div`
  height: 85%;
  width: 50%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 20rem;
    color: #25d366;
  }
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  width: 10rem;
  background-color: transparent;
  color: #fc039c;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all ease-in 0.5s;

  &:hover {
    box-shadow: 0 5px 12px rgba(251, 250, 252, 0.2),
      0 5px 10px rgba(254, 254, 255, 0.2);
    letter-spacing: 0.2rem;
  }
`;
