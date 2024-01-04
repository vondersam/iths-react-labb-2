import { useRef, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ACTION } from '../interfaces/action';
import Sort from './sort';
import ThemeToggler from './themeToggler';

const Input = styled.input`
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

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

const Menu = ({ state, dispatchWebsite, setCombinedStats }) => {
  const url = useRef('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const encodedUrl = encodeURIComponent(url.current);
      const request = `site?url=${encodedUrl}`;
      const response = await fetch(request);
      const data = await response.json();
      dispatchWebsite({ type: ACTION.add, data: data });
      setLoading(false);
    } catch (e) {
      alert(e);
    }
  }, [dispatchWebsite]);

  useEffect(() => {
    if (submitting) {
      if (!URL.canParse(url.current)) {
        alert(`You need to use a well-formatted URL, including its protocol`);
      } else if (
        !state.websiteList.find((element) => element.url === url.current)
      ) {
        getData().then(() => setSubmitting(false));
      } else {
        alert(`${url.current} is already on your list!`);
      }
    }
  }, [submitting, getData, state]);

  return (
    <>
      <label>
        Add a URL with protocol
        <Input type="text" onChange={(e) => (url.current = e.target.value)} />
      </label>
      <Button type="button" onClick={() => setSubmitting(true)}>
        Add
      </Button>
      {loading && 'Loading...'}
      <label>
        <Sort dispatchWebsite={dispatchWebsite} />
      </label>
      <ThemeToggler />
    </>
  );
};

export default Menu;
