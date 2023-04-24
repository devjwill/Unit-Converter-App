import { useEffect, useState } from 'react';
import data from '../data'
import '../App.css'
function UnitConversion ({ activeUnitType, setActiveUnitType }) {
    const [firstUnitType, setFirstUnitType] = useState(Object.keys(data.unitTypes[activeUnitType])[0])
    const [firstUnitValue, setFirstUnitValue] = useState('')
    const [secondUnitType, setSecondUnitType] = useState(Object.keys(data.unitTypes[activeUnitType])[0])
    const [secondUnitValue, setSecondUnitValue] = useState('')
    const [answer, setAnswer] = useState()

    function firstTypeChange (event) {
        setFirstUnitType(event.target.value)
        console.log(`The first unit has been changed to ${event.target.value}`)
        }
    function secondTypeChange (event) {
        setSecondUnitType(event.target.value)
        console.log(`The second unit has been changed to ${event.target.value}`)
    }

    function firstValueChange (event) {
        setFirstUnitValue(event.target.value)
        console.log(`The first value has been changed to ${event.target.value}`)
        if(data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === 'x') {
            setAnswer(firstUnitValue * data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
        } else if (data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === '/') {
            setAnswer(firstUnitValue / data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
        } else if (firstUnitType === secondUnitType) {
            setAnswer(firstUnitValue)
        }
        console.log(answer)
    }

    function secondValueChange (event) {
        setSecondUnitValue(event.target.value)
        console.log(`The second value has been changed to ${event.target.value}`)     
    }

    function formatUnitType (word) {
        let wordArray = word.match(/[A-Z][a-z]*/g)
        let wordString = wordArray.join(' ')
        return wordString
    }

    useEffect(() => {
        if(firstUnitValue === '') {
            console.log('no answer')
        } else {
            if(data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === 'x') {
                setAnswer(firstUnitValue * data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
            } else if (data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === '/') {
                setAnswer(firstUnitValue / data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
            } else if (firstUnitType === secondUnitType) {
                setAnswer(firstUnitValue)
            }
        }
    }, [firstUnitValue])

    return (
        <div>
            <form className='form-container'>
                <div>
                <label>From: </label>
                <select name='from' onChange={firstTypeChange} value={firstUnitType}>
                    {Object.keys(data.unitTypes[activeUnitType]).map(item => {
                        return (
                            <option key={item} id={item} value={item}>{formatUnitType(item)}</option>
                        )
                    })}
                </select><br/>
                <input type='text' onChange={firstValueChange} value={firstUnitValue}></input>
                </div>
                <div>
                <label>To: </label>
                <select name='to' onChange={secondTypeChange} value={secondUnitType}>
                    {Object.keys(data.unitTypes[activeUnitType]).map(item => {
                        return (
                            <option key={item} id={item} value={item}>{formatUnitType(item)}</option>
                        )
                    })}
                </select><br/>
                <input type='text' onChange={secondValueChange} value={secondUnitValue}></input>
                </div>
            </form>
            <div>
                {/* {firstUnitValue || secondUnitValue ? <h3>Result: {firstUnitValue} {firstUnitType} =  </h3> : null} */}
                <h3>Result: {answer}</h3>
                {/* <button onClick={console.log(data)}>Log Data</button> */}
            </div>
        </div>
    )
}

export default UnitConversion;

