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
      <LinkedIn id="linkedin">
        <i className="fa-brands fa-linkedin"></i>
        <Button onClick={handleLinkedInContact}>LinkedIn</Button>
      </LinkedIn>
      <WhatsApp id="whatsapp">
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

  :hover {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'),
      auto;
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

  :hover {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>'),
      auto;
  }
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  width: 10rem;
  color: #2c2c6c;
  background-color: #4bd5ff;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: all ease-in 0.5s;
  border-radius: 10px;
  background-color: #4bd5ff;
  border: 1.8px solid #2c2c6c;

  &:hover {
    background: transparent;
    border: 1px solid #4bd5ff;
    color: #4bd5ff;
    box-shadow: 0 5px 8px rgba(251, 250, 252, 0.2),
      0 5px 7px rgba(254, 254, 255, 0.2);
    letter-spacing: 0.2rem;
  }
`;
