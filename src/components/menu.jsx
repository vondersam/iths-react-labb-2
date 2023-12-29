import { useRef, useEffect, useState } from 'react';

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
      console.error(e);
    }
  };

  const addToWebsiteList = () => {
    if (!URL.canParse(url.current)) {
      alert(`You need to use a well-formatted URL, including its protocol`);
    } else if (!websiteList.find((element) => element.url === url.current)) {
      getData();
    } else {
      alert(`${url.current} is already on your list!`);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => (url.current = e.target.value)}
        placeholder={loading ? 'Loading' : 'Add a URL with protocol'}
      />
      <button type="button" onClick={() => addToWebsiteList()}>
        Add
      </button>
    </div>
  );
};

export default Menu;
