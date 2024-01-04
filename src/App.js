import './css/index.css';
import { useReducer, createContext, useState, useEffect } from 'react';
import Menu from './components/menu';
import CardList from './components/cardList';
import websitesReducer from './reducers/websiteReducer';
import GeneralStats from './components/generalStats';

export const ThemeContext = createContext(null);

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const initialState = {
    websiteList: [],
    url: ''
  };
  const [state, dispatchWebsite] = useReducer(websitesReducer, initialState);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);
  return (
    <div className={darkTheme ? 'app-dark' : 'app'}>
      <h2>Website Footprint Comparator</h2>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Menu state={state} dispatchWebsite={dispatchWebsite} />
        <GeneralStats state={state} />
      </ThemeContext.Provider>
      <CardList state={state} />
    </div>
  );
}

export default App;
