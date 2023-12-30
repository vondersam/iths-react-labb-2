import { useRef, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #bf4f74;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
`;

const Menu = ({ websiteList, setWebsiteList }) => {
  const url = useRef('');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const encodedUrl = encodeURIComponent(url.current);
    try {
      const request = `site?url=${encodedUrl}`;
      const response = await fetch(request);
      const data = await response.json();
      const newWebsiteList = [...websiteList, data];
      setWebsiteList(newWebsiteList);
      setLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  const addToWebsiteList = () => {
    if (!URL.canParse(url.current)) {
      alert(`You need to use a well-formatted URL, including its protocol`);
    } else if (!websiteList.find((element) => element.url === url.current)) {
      getData();
      console.log(websiteList);
    } else {
      alert(`${url.current} is already on your list!`);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => (url.current = e.target.value)}
        placeholder="Add a URL with protocol"
      />
      <Button type="button" onClick={() => addToWebsiteList()}>
        Add
      </Button>
      {loading && 'Loading...'}
    </div>
  );
};

export default Menu;
