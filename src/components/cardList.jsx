import styled from 'styled-components';
import Card from './card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = ({ state }) => {
  return (
    <>
      <Wrapper>
        {state.websiteList.length > 0 &&
          state.websiteList.map((website, i) => <Card key={i} {...website} />)}
      </Wrapper>
    </>
  );
};

export default CardList;
