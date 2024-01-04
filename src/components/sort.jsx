import styled from 'styled-components';
import { ACTION } from '../interfaces/action';

const Select = styled.select`
border-radius: 3px;
border: 2px solid #bf4f74;
color: black;
margin: 0.5em 1em;
padding: 0.25em 1em;
&:hover {
  opacity: 0.5;
  cursor: pointer;
`;

const Sort = ({ dispatchWebsite }) => {
  const handleChange = (e) => {
    const action = e.target.value;
    if (action) dispatchWebsite({ type: action });
  };

  return (
    <Select onChange={(e) => handleChange(e)}>
      <option value="">--Sort by--</option>
      <option value={ACTION.sort_alphabetically}>Alphabetical</option>
      <option value={ACTION.sort_by_energy}>Energy</option>
      <option value={ACTION.sort_by_co2}>CO2</option>
    </Select>
  );
};

export default Sort;
