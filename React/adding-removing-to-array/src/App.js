import React, { useState } from "react";
import ItemList from "./ItemList"

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"]


export default function App() {
  // declare and initialize state
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prevArr) => [...prevArr, item]);
  };

  const removeItem = (targetIndex) => {
    setCart((prevArr) =>
      prevArr.filter((whatever, idx) => idx !== targetIndex)
    );
  };

  return (
    <div>
      {cart.length > 0 && <div>
        <h1>Click dot to remove</h1>
        <ul>
          {cart.map((item, index) => (
            <li onClick={() => removeItem(index)} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>}
      <h2>LowerCase</h2>
      <ItemList items={lowerCase} onItemClick={addItem} />
      <h2>UpperCase</h2>
      <ItemList items={upperCase} onItemClick={addItem} />
    </div>
  );
}

