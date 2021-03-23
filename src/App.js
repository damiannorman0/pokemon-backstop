import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import styled from 'styled-components/macro';
import {getCard, getCards, getRandomCard} from "./api";


const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  background-color: lightblue;
  color: white;
  margin-bottom: 10px;
  padding: 10px;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  text-align: left;
  position: fixed;
  z-index: 1000;
  box-shadow: -1px 5px 20px 5px rgba(0,0,0,0.3);

  h1 {
    color: red;
    font-family: "myFont", "Bitstream Vera Serif", serif;
    margin: 0;
    margin-bottom: -4px;
    padding: 0;
    font-size: xxx-large;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCards = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 200px;
`;

const StyledButton = styled.button`
  padding: 10px;
  padding-left: 20px;
  padding-right: 25px;
  border-radius: 10px;
  border: none;
  background-color: olive;
  font-size: xx-large;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
`;

function App() {
  const [name, setname] = useState('');
  const [cards, setCards] = useState([]);
  const [randomCard, setRandomCard] = useState('');


  useEffect(() => {
    const get = async () => {
      const cards = await getCards();
      setCards(cards);
    };

    get();

  }, [name]);

  const cardElements = cards.map((item, index) => {
    return (
      <Card key={`card_${index}`} {...item} />
    );
  });

  let randomElement;
  if (randomCard){
    randomElement = (<Card {...randomCard} />);
  }

  const getRandom = async (e) => {
    const result = await getRandomCard();
    setRandomCard(result);
  };

  return (
    <div className="App">
      <StyledHeader>
        <h1>Available Pokemon!</h1>
        <StyledButton onClick={getRandom}>
          <span>Get random!</span>
        </StyledButton>
      </StyledHeader>
      <StyledMain>
        <StyledCards>
            {cardElements}
            {randomElement}
        </StyledCards>
      </StyledMain>
    </div>
  );
}

export default App;
