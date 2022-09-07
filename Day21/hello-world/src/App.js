import { useState } from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import TextComponent from './components/TextComponent';

const App = () => {
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
    const handleAddOne = event => {
      setValueOne(parseInt(event.target.value))
    }
    const handleAddTwo = event => {
      setValueTwo(parseInt(event.target.value))
    }
  return (
  <div className="App">
    <InputComponent values={valueOne} handleAdd={handleAddOne}/>
    <InputComponent values={valueTwo} handleAdd={handleAddTwo}/>
    <TextComponent results={valueOne + valueTwo}/>
  </div>
  );
};
    
export default App;