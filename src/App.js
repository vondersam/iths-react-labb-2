import './App.css';
import { useState } from 'react';
import Menu from './components/menu';

function App() {
  const [websiteList, setWebsiteList] = useState([]);
  return (
    <div className="App">
      <h2>Website Carbon Comparator</h2>
      <Menu websiteList={websiteList} setWebsiteList={setWebsiteList} />
      <ul>
        {websiteList.map((webside, i) => (
          <li key={i}>{webside}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
