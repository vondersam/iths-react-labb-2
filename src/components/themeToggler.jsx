import { useContext } from 'react';
import { ThemeContext } from '../App';

const ThemeToggler = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <label>
      Change to {darkTheme ? 'light ' : 'dark '} theme
      <input type="checkbox" onClick={() => setDarkTheme(!darkTheme)} />
    </label>
  );
};

export default ThemeToggler;
