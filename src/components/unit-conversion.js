import { useEffect, useState } from 'react';
import data from '../data'
import '../App.css'
function UnitConversion ({ activeUnitType, setActiveUnitType }) {
    const [firstUnitType, setFirstUnitType] = useState(Object.keys(data.unitTypes[activeUnitType])[0])
    const [firstUnitValue, setFirstUnitValue] = useState(0)
    const [secondUnitType, setSecondUnitType] = useState(Object.keys(data.unitTypes[activeUnitType])[0])
    const [secondUnitValue, setSecondUnitValue] = useState(0)
    const [answer, setAnswer] = useState()
    const [result, setResult] = useState()

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
        // if(firstUnitType === secondUnitType) {
        //     console.log('same type')
        // } else if(data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === 'x') {
        //     setAnswer(firstUnitValue * data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
        // } else if (data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === '/') {
        //     setAnswer(firstUnitValue / data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
        // } else if (firstUnitType === secondUnitType) {
        //     setAnswer(firstUnitValue)
        // }
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
        if(firstUnitType === secondUnitType) {
            setAnswer('Same Type')
        } else {
            if(data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === 'x') {
                setAnswer(firstUnitValue * data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
                setSecondUnitValue(firstUnitValue * data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
            } else if (data.unitTypes[activeUnitType][firstUnitType][secondUnitType][0] === '/') {
                setAnswer(firstUnitValue / data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
                setSecondUnitValue(firstUnitValue / data.unitTypes[activeUnitType][firstUnitType][secondUnitType][1])
            } else if (firstUnitType === secondUnitType) {
                setAnswer(firstUnitValue)
            }
        }
    }, [firstUnitValue, firstUnitType, secondUnitType])

    useEffect(() => {
        setFirstUnitType(Object.keys(data.unitTypes[activeUnitType])[0])
        setSecondUnitType(Object.keys(data.unitTypes[activeUnitType])[0])
    }, [activeUnitType])

    function Result () {
        let result
        const regex = /[a-zA-Z]/;
        if(!answer) {
            // result = <h3>Type something</h3>
            result = 'Type something'
        } else if (firstUnitType === secondUnitType && answer) {
            result = 'Change units'
        } else if (answer.match(regex)) {
            // result = <h3>Revise what you typed</h3>
            result = 'Revise what you typed'
        } else if (answer) {
            // result = <h3><span style={{ color: 'red' }}>Result :</span> {firstUnitValue} {firstUnitType} = {answer} {secondUnitType}</h3>
            result = `Result : ${firstUnitValue} ${firstUnitType} = ${answer} ${secondUnitType}`
        }
        return (
            <h3>{result}</h3>
        )
    }

    // useEffect(() => {
    //     setFirstUnitValue('')
    //     setSecondUnitType('')
    // }, [activeUnitType])

    return (
        <div>
            <form className='form-container'>
                <div className='form-item'>
                    <div className='flexy'>
                        <label>From: </label>
                        <select name='from' onChange={firstTypeChange} value={firstUnitType}>
                            {Object.keys(data.unitTypes[activeUnitType]).map(item => {
                                return (
                                    <option key={item} id={item} value={item}>{formatUnitType(item)}</option>
                                )
                            })}
                        </select>
                    </div>
                    <input className='form-input' type='number' onChange={firstValueChange} value={firstUnitValue}></input>
                </div>
                <div className='form-item'>
                    <div className='flexy'>
                        <label>To: </label>
                        <select name='to' onChange={secondTypeChange} value={secondUnitType}>
                            {Object.keys(data.unitTypes[activeUnitType]).map(item => {
                                return (
                                    <option key={item} id={item} value={item}>{formatUnitType(item)}</option>
                                )
                            })}
                        </select>
                    </div>
                    <input className='form-input' type='number' onChange={secondValueChange} value={secondUnitValue}></input>
                </div>
            </form>
            <div className='answer'>
                {answer === 'Same Type' ? <h3>Please change units to convert</h3> : null}
                {answer !== 'Same Type' && answer === 0 ? null : null}
                {answer  !== 'Same Type' && answer > 0 ? <h3><span>Result: </span>{firstUnitValue} {firstUnitType} = {answer} {secondUnitType}</h3> : null}
            </div>
        </div>
    )
}

export default UnitConversion;

