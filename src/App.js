import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Phrase from "./component/Phrase";

const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const ContainerButton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [phrases, setPhrases] = useState({});

  const askApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const phrase = await api.json();
    setPhrases(phrase[0]);
  };

  //charge the phrase
  useEffect(() => {
    askApi();
  }, []);
  return (
    <ContainerMain>
      <Phrase phrases={phrases} />
      <ContainerButton onClick={askApi}>Get Phrases</ContainerButton>
    </ContainerMain>
  );
}

export default App;
