import { useContext } from 'react';
import { ThemeContext } from '../App';

const ThemeToggler = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <label>
      {darkTheme ? 'Dark ' : 'Light '} theme
      <input type="checkbox" onClick={() => setDarkTheme(!darkTheme)} />
      {/* <span className="slider"></span> */}
    </label>
  );
};

export default ThemeToggler;

