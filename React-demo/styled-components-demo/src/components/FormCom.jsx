import { useState } from "react";
import { styled } from "styled-components";

const Label = styled.label`
    color: ${({nameValid}) => (nameValid ? 'blue' : 'red')};
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

function FormCom() {
  const [inputData, setInputData] = useState({
    nameD: "",
    ageD: "",
  });


  function inputNameHandler(e) {
    setInputData((prev) => {
      return {
        ...prev,
        nameD: e.target.value,
      };
    });
  }

  function inputAgeHandler(e) {
    setInputData((prev) => {
      return {
        ...prev,
        ageD: e.target.value,
      };
    });
  }

  const nameValid = inputData.nameD.length ? true : false



  return (
    <>
      <form>
        <SubContainer>
          <Label nameValid={nameValid} htmlFor="username">Name</Label>
          <input
            id="username"
            value={inputData.nameD}
            onChange={(e) => inputNameHandler(e)}
            type="text"
          ></input>
        </SubContainer>
        <SubContainer>
          <Label nameValid={nameValid} htmlFor="age">Age</Label>
          <input
            id="age"
            value={inputData.ageD}
            onChange={(e) => inputAgeHandler(e)}
            type="number"
          ></input>
        </SubContainer>
      </form>
    </>
  );
}

export default FormCom;
