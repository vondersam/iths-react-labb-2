import { useState } from 'react';
import { ACTION } from '../App';

const Sort = ({ dispatchWebsite }) => {
  const handleChange = (e) => {
    const action = e.target.value;
    dispatchWebsite({ type: action });
  };

  return (
    <select onChange={(e) => handleChange(e)}>
      <option value={ACTION.sort_alphabetically}>Alphabetical</option>
      <option value={ACTION.sort_by_energy}>Energy</option>
      <option value={ACTION.sort_by_co2}>CO2</option>
    </select>
  );
};

export default Sort;
