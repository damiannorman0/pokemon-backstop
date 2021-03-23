import React, {useEffect, useState} from "react";
import {bindActionCreators} from 'redux';
import {cardsAction} from "./actions/cardsAction";
import {cardRandomAction} from "./actions/cardRandomAction";

import './App.css';
import Card from "./components/Card";
import styled from 'styled-components/macro';

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

function App(props) {
  const {
    cards = [],
    cardRandom = {},
  } = props;

  useEffect(() => {
    const get = async () => {
      cardsAction();
    };

    get();
  }, []);

  const cardElements = cards.map((item, index) => {
    return (
      <Card key={`card_${index}`} {...item} />
    );
  });

  let randomElement;
  if (cardRandom){
    randomElement = (<Card {...cardRandom} />);
  }

  const getRandom = () => {
    cardRandomAction();
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

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.cards,
    cardRandom: state.cards.cardRandom,
    loading: state.cards.loading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      cardsAction,
      cardRandomAction,
    },
    dispatch
  );

export default App;
