import { useState } from 'react'
import data from '../data'
import '../App.css'
function UnitType ({ activeUnitType, setActiveUnitType }) {
    // const [activeUnitType, setActiveUnitType] = useState('Length')
    const unitTypes = ['Length', 'Mass', 'Volume', 'Time', 'Temp']

    function changeUnit (unit) {
        setActiveUnitType(unit)
        console.log(`The unit type has been changed to ${unit}`)
    }

    return (
        <div className='unitType-container'>
            {unitTypes.map(item => {
                return (
                    <h2 key={item} onClick={activeUnitType === item ? null : () => changeUnit(item)}
                    className={activeUnitType === item ? 'active-unitType' : 'unitType'}
                    >{item}</h2>
                )
            })}
        </div>
    )
}

export default UnitType;