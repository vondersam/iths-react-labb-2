import './App.css';
import { useReducer } from 'react';
import Menu from './components/menu';
import CardList from './components/cardList';
import websitesReducer from './reducers/websiteReducer';

function App() {
  const initialState = {
    websiteList: [],
    url: ''
  };
  const [state, dispatchWebsite] = useReducer(websitesReducer, initialState);
  return (
    <div className="App">
      <h2>Website Carbon Comparator</h2>
      <Menu state={state} dispatchWebsite={dispatchWebsite} />
      <CardList state={state} />
    </div>
  );
}

export default App;
