import './css/index.css';
import { useReducer, createContext, useState, useEffect } from 'react';
import Menu from './components/menu';
import CardList from './components/cardList';
import websitesReducer from './reducers/websiteReducer';

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
    <div className="app">
      <h2>Website Carbon Comparator</h2>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Menu state={state} dispatchWebsite={dispatchWebsite} />
      </ThemeContext.Provider>
      <CardList state={state} />
    </div>
  );
}

export default App;
