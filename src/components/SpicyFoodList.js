import React, {useState} from 'react';
import {spicyFoods, getNewRandomSpicyFood} from '../data';

function SpicyFoodList () {
  const [foods, setFoods] = useState (spicyFoods);

  function handleAddFood () {
    const newFood = getNewRandomSpicyFood ();

    const updateSpicyFood = [...foods, newFood];

    setFoods (updateSpicyFood);
  }

  function handleIncreaseHeatLevel (id) {
    const updateSpicyFood = foods.map (food => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      }
      return food;
    });

    setFoods (updateSpicyFood);
  }

  const foodList = foods.map (food => (
    <li key={food.id} onClick={() => handleIncreaseHeatLevel (food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
