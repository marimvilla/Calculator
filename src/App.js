import './App.css';
import Logo from './components/logo'
import Button from './components/Buttons'
import Screen from './components/Screen'
import Clear from './components/Clear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult= () =>{
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores válidos para realizar los cálculos pertinentes.")
    }
  };

  return (
    <div className='App'>
    <div className='myApp'>
      <div className='logo'>
        <Logo/>
      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Clear manageClear={() => setInput('')}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
