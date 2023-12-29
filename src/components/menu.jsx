import { useRef } from 'react';

const Menu = ({ websiteList, setWebsiteList }) => {
  const website = useRef('');
  const addToWebsiteList = () => {
    if (!websiteList.find((element) => element === website.current)) {
      const newWebsiteList = [...websiteList, website.current];
      setWebsiteList(newWebsiteList);
    } else {
      alert(`${website.current} is already on your list!`);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => (website.current = e.target.value)} />
      <button type="button" onClick={() => addToWebsiteList()}>
        Add
      </button>
    </div>
  );
};

export default Menu;
