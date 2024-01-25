import styled from "styled-components";
import reactlogo from "./assets/reactlogo.svg";
import Navigation from "./Components/Navigation";
import space1 from "./assets/rocket.jpg";
import Homepage from "./Components/HomePage";
// import Projects from "./Components/Projects";
// import Resume from "./Components/Resume";
// import Certificates from "./Components/Certificates";
// import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Container>
        <Navigation react={reactlogo} />
        <Homepage></Homepage>
        {/* <Projects />
        <Resume />
        <Certificates />
        <Contact /> */}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  /* background: url(${space1}); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    margin: 0;
    color: white;
    letter-spacing: 0.1rem;
  }
`;
