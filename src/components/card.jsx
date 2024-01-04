import styled from 'styled-components';

const Wrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  text-align: left;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  overflow-wrap: break-word;
  /* Range of red depending on how clean the website is */
  background-color: ${(props) => `hsl(6, 59%, ${props.cleanerpercent * 100}%)`};
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: black;
`;

const Description = styled.p`
  color: black;
`;

const Card = ({ url, green, bytes, cleanerThan, statistics }) => {
  const urlObj = new URL(url);
  const kwg = Number.parseFloat(statistics.energy).toFixed(5);
  const co2Grams = Number.parseFloat(statistics.co2.grid.grams).toFixed(3);
  const cleanerPercentage = Number.parseFloat(cleanerThan * 100).toFixed(2);
  return (
    <Wrapper cleanerpercent={cleanerThan}>
      <Title>{urlObj.hostname}</Title>
      <Description>{`This website is ${
        !green ? 'not ' : ''
      }green`}</Description>
      <Description>{`Cleaner than ${cleanerPercentage}% of tested websites`}</Description>
      <Description>{`${kwg} KWg of energy per page load.`}</Description>
      <Description>{`${co2Grams} CO2 gr. from the grid per page load`}</Description>
    </Wrapper>
  );
};

export default Card;
