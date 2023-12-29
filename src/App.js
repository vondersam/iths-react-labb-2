import './App.css';
import { useState } from 'react';
import Menu from './components/menu';
import CardList from './components/cardList';

function App() {
  const [websiteList, setWebsiteList] = useState([]);
  return (
    <div className="App">
      <h2>Website Carbon Comparator</h2>
      <Menu websiteList={websiteList} setWebsiteList={setWebsiteList} />
      <CardList websiteList={websiteList} />
    </div>
  );
}

export default App;
