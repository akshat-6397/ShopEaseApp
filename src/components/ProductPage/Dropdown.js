import React, { useState } from 'react';
import './style.scss';

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('option1'); 

    const options = [
      { value: 'option1', label: 'Recommended' },
      { value: 'option2', label: 'Price Low To High' },
      { value: 'option3', label: 'Price High To Low' },
    ];

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className='dropdown'>
        <h5>Sort By:</h5>
        <select value={selectedOption} onChange={handleSelectChange}>
          {options.map((option) => (
            <option style={{padding: '20px', margin: '20px'}}key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
}

export default Dropdown