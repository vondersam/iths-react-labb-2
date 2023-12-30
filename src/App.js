import './App.css';
import { useReducer } from 'react';
import Menu from './components/menu';
import CardList from './components/cardList';

export const ACTION = {
  add: 'add',
  sort_alphabetically: 'sort_alphabetically',
  sort_by_energy: 'sort_by_energy',
  sort_by_co2: 'sort_by_co2'
};

const websitesReducer = (state, action) => {
  switch (action.type) {
    case ACTION.add: {
      return { websiteList: [...state.websiteList, action.data] };
    }
    case ACTION.sort_alphabetically: {
      return {
        websiteList: state.websiteList.toSorted((a, b) => b.url - a.url)
      };
    }
    case ACTION.sort_by_energy: {
      return {
        websiteList: state.websiteList.toSorted(
          (a, b) => a.statistics.energy - b.statistics.energy
        )
      };
    }
    case ACTION.sort_by_co2: {
      return {
        websiteList: state.websiteList.toSorted(
          (a, b) => a.statistics.co2.grid.grams - b.statistics.co2.grid.grams
        )
      };
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
