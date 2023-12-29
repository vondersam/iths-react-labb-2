import styled from 'styled-components';
import Card from './card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = ({ websiteList }) => {
  return (
    <>
      <Wrapper>
        {websiteList.map((website) => (
          <Card {...website} />
        ))}
      </Wrapper>
    </>
  );
};

export default CardList;
