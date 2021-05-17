import React, { useState } from 'react'

function Counter(){
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(preNum => preNum + 1);
    }
    const onDecrease = () => {
        setNumber(preNum => preNum - 1);
    }
    return(
        <div>
            <h1>{ number }</h1>
            <button onClick={ onIncrease }>+</button>
            <button onClick={ onDecrease }>-</button>
        </div>
    );
}

export default Counter;