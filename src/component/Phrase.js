import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContainerPhrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #ffff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Phrase = ({ phrases }) => {
  return (
    <ContainerPhrase>
      <h1>{phrases.quote}</h1>
      <p>{phrases.author}</p>
    </ContainerPhrase>
  );
};

Phrase.propTypes = {
  phrases: PropTypes.object.isRequired,
};

export default Phrase;
