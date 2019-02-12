import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div>
        <div className='main-Container'>
          <CalculatorDisplay />
          <ActionButton actionStyle='act-style' actionText='clear'/>
          <NumberButton buttonStyle='act-style' text='/'/>
          <NumberButton buttonStyle='btn-Color' text='7'/>
          <NumberButton buttonStyle='btn-Color' text='8'/>
          <NumberButton buttonStyle='btn-Color' text='9'/>
          <NumberButton buttonStyle='act-style' text='x'/>
          <NumberButton buttonStyle='btn-Color' text='4'/>
          <NumberButton buttonStyle='btn-Color' text='5'/>
          <NumberButton buttonStyle='btn-Color' text='6'/>
          <NumberButton buttonStyle='act-style' text='-'/>
          <NumberButton buttonStyle='btn-Color' text='1'/>
          <NumberButton buttonStyle='btn-Color' text='2'/>
          <NumberButton buttonStyle='btn-Color' text='3'/>
          <NumberButton buttonStyle='act-style' text='+'/>
          <ActionButton  actionStyle='act-style' actionText='0'/>
          <NumberButton buttonStyle='act-style' text='='/>
       </div>
    </div>

    
  );
};

export default App;
