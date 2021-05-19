import React, { useRef, useState } from 'react'

function InputStream(){

    const [inputs, setInputs] = useState({
        myName : '',
        myCom : ''
    });

    const nameInput = useRef();

    const {myName, myCom} = inputs;

    const onChange = (e) =>{
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            myName:'',
            myCom:'',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="myName" placeholder='이름' value = {myName} onChange = {onChange} ref={ nameInput }/>
            <input name="myCom" placeholder='회사' value = {myCom} onChange = {onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <span>값: { myName }({ myCom }) </span>
            </div>
        </div>
    );
}

export default InputStream;