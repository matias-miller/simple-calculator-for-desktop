import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" value={input} disabled />
        </div>
      </div>
      <div className="row mb-1">
        {['1', '2', '3', '+'].map((value) => (
          <div className="col-3" key={value}>
            <button className="btn btn-outline-secondary w-100" onClick={() => handleButtonClick(value)}>{value}</button>
          </div>
        ))}
      </div>
      <div className="row mb-1">
        {['4', '5', '6', '-'].map((value) => (
          <div className="col-3" key={value}>
            <button className="btn btn-outline-secondary w-100" onClick={() => handleButtonClick(value)}>{value}</button>
          </div>
        ))}
      </div>
      <div className="row mb-1">
        {['7', '8', '9', '*'].map((value) => (
          <div className="col-3" key={value}>
            <button className="btn btn-outline-secondary w-100" onClick={() => handleButtonClick(value)}>{value}</button>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-3">
          <button className="btn btn-outline-secondary w-100" onClick={() => handleButtonClick('0')}>0</button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-secondary w-100" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary w-100" onClick={() => calculateResult()}>=</button>
        </div>
        <div className="col-3">
          <button className="btn btn-danger w-100" onClick={() => clearInput()}>C</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;