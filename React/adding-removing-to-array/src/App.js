import React, { useState } from "react";
import ItemList from "./ItemList"

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"]


export default function App() {
  // declare and initialize state
  const [addedItems, setAddedItems] = useState([]);

  const addItem = (item) => {
    setAddedItems((prevArr) => [...prevArr, item]);
  };

  const removeItem = (targetIndex) => {
    setAddedItems((prevArr) =>
      prevArr.filter((whatever, idx) => idx !== targetIndex)
    );
  };

  const removeItemBySlicing = (targetIndex) => {
    console.log(targetIndex)
    setAddedItems(prevArr => {
      return [...prevArr.slice(0, targetIndex),
      ...prevArr.slice(targetIndex + 1)];
    });
  }


  return (
    <div>
      {addedItems.length > 0 && <div>
        <h1>Click dot to remove</h1>
        <ul>
          {addedItems.map((item, index) => (
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

      <h2>Remove item by slicing results</h2>
      <select>
        {addedItems.map((item, index) => {
          return (
            <option
              value={index}
              onClick={() => removeItemBySlicing(index)}>
              at index {index}&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;{item}
            </option>)
        })}
      </select>

    </div>
  );
}

