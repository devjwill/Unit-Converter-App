import { useState } from 'react';
import UnitType from './components/unit-type';
import UnitConversion from './components/unit-conversion';
import './App.css';

function App() {
  const [activeUnitType, setActiveUnitType] = useState('Length')
  return (
    <div className="app-container">
      <UnitType activeUnitType={activeUnitType} setActiveUnitType={setActiveUnitType}/>
      <UnitConversion activeUnitType={activeUnitType} setActiveUnitType={setActiveUnitType}/>
    </div>
  );
}

export default App;
