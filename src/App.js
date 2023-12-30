import './App.css';
import { useReducer } from 'react';
import Menu from './components/menu';
import CardList from './components/cardList';

const websitesReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return { websiteList: [...state.websiteList, action.data] };
    }
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatchWebsite] = useReducer(websitesReducer, {
    websiteList: [],
    url: ''
  });
  return (
    <div className="App">
      <h2>Website Carbon Comparator</h2>
      <Menu state={state} dispatchWebsite={dispatchWebsite} />
      <CardList state={state} />
    </div>
  );
}

export default App;
