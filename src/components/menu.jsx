import { useRef } from 'react';

const Menu = ({ foodList, setFoodList }) => {
  const foodItem = useRef('');
  const addToFoodList = () => {
    if (!foodList.find((element) => element === foodItem.current)) {
      const newFoodList = [...foodList, foodItem.current];
      setFoodList(newFoodList);
    } else {
      alert(`${foodItem.current} is already on your list!`);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => (foodItem.current = e.target.value)}
      />
      <button type="button" onClick={() => addToFoodList()}>
        Add
      </button>
    </div>
  );
};

export default Menu;
