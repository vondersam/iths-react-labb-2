import { ACTION } from '../interfaces/action';

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

export default websitesReducer;
