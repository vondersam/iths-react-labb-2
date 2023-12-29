import styled from 'styled-components';

const Wrapper = styled.div`
/* Adapt the colors based on primary prop */
  background: ${(props) => (props.green ? 'green' : 'red')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  // background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  // &:hover {
  //   opacity: 0.5;
  //   cursor: pointer;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  margin: 1rem;
  color: white;
`;

const Description = styled.p`
  color: white;
`;

const Card = ({ url, green, bytes, cleanerThan, statistics }) => {
  const urlObj = new URL(url);
  return (
    <Wrapper green={green}>
      <Title>{urlObj.hostname}</Title>
      <Description>{`This website is ${
        !green ? 'not ' : ''
      }green`}</Description>
      <Description>{`Cleaner than ${cleanerThan}`}</Description>
      <Description>{`Cleaner than ${cleanerThan}`}</Description>
      <Description>{`Energy ${statistics.energy} KWg.`}</Description>
      <Description>{`Co2 ${statistics.co2.grams} grams`}</Description>
    </Wrapper>
  );
};

//       {/*
//     url
// string
// The URL that has been tested.

// In some cases this may differ from the URL you've provided, e.g. in the case of a redirect, or if it contains disallowed parameters.

// greenas a
// boolen
// or
// string "unknown"
// Whether or not we could establish hosting of the website as being "green".

// We work with The Green Web Foundation to get this information.

// If the green hosting status can't be established this will return a string with a value of unknown.

// bytesas an
// integer
// The number of bytes transferred during the page load.

// cleanerThanas a
// number
// A numeric value between 0 and 1 representing the percentage of tested resources this is cleaner than.

// This is based on the CO2 value. See the co2 property of the Statistics object.

// statisticsas an
// object
// See The Statistics Object. */}

export default Card;
