import "./App.css";
import { styled } from "styled-components";
import FormCom from "./components/FormCom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ChildEle = styled.div`
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`

function App() {
  return (
    <>
      <Container>
        <ChildEle>Hello-World</ChildEle>
        <ChildEle>Hello-World</ChildEle>
      </Container>

      <FormCom></FormCom>
    </>
  );
}

export default App;
