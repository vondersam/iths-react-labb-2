import './App.css';
import { useState } from 'react';
import Menu from './components/menu';

function App() {
  const [foodList, setFoodList] = useState([]);
  return (
    <div className="App">
      <h2>My Food Print</h2>
      <Menu foodList={foodList} setFoodList={setFoodList} />
      <ul>
        {foodList.map((foodItem, i) => (
          <li key={i}>{foodItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
