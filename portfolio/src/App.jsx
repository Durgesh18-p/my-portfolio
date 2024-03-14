import { useEffect } from "react";
import styled from "styled-components";
import reactlogo from "./assets/reactlogo.svg";
import Navigation from "./Components/Navigation";
import Homepage from "./Components/HomePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success(" Welcome to my portfolio! Use links to navigate.", {
        position: "top-center",
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Container>
        <Navigation react={reactlogo} />
        <Homepage></Homepage>
        <ToastContainer />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    margin: 0;
    color: white;
    letter-spacing: 0.1rem;
  }
`;
