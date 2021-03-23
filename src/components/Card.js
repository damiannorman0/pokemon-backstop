import styled from 'styled-components/macro';


const StyledCard = styled.div`
  background-color: yellow;
  border-radius: 10px;
  width: 300px;
  height: 400px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 5px 20px 5px rgba(0,0,0,0.3);
  font-size: larger;
  text-align: center;
  position: relative;
`;

const StyledAttr = styled.div`
  display: flex;
  flex-direction: row;
  
  &:first-child {
    font-size: xxx-large;
  }
`;

const StyledImg = styled.img`
  width: 50%;
`;

const StyledValue = styled.span`
  font-weight: bold;
`;

const Card = (props) => {
  const {
    random,
    weight,
    height,
    name,
    base_experience,
    sprites: {
      front_default,
    } = {},
  } = props;

  const style = random && {
    backgroundColor: 'pink',
  } || {};

  const StyledRandom = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    font-size: Xxx-large;
    font-weight: bolder;
    color: olive;
  `;

  return (
    <StyledCard style={style}>
      <StyledAttr>
        <StyledValue>{name}</StyledValue>
      </StyledAttr>
      <StyledAttr>
        <span>base experience:</span>
        <StyledValue>{base_experience}</StyledValue>
      </StyledAttr>
      <StyledImg src={front_default}/>
      <StyledAttr>
        <span>Weight:</span>
        <StyledValue>{weight}</StyledValue>
      </StyledAttr>
      <StyledAttr>
        <span>Height:</span>
        <StyledValue>{height}</StyledValue>
      </StyledAttr>
      {random && <StyledRandom>?</StyledRandom>}
    </StyledCard>
  );
};

export default Card;