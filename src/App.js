import React, { useState } from 'react';
import './App.css';

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue(''); 
    }
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      {}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter item"
      />
      {}
      <button onClick={handleAddItem}>Add Item</button>
      
      {}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
