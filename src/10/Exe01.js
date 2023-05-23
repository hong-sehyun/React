import React from 'react'
import { useState } from 'react';


function Exe01() {

    const havyWork = () => {
        return ['홍길동', '이순신'];
    }
    
    const [names, setNames] = useState(() => {
        return havyWork();
    });


    const [input, setInput] = useState('');


    const handleInputChange = (e) => {
        setInput(e.target.value);
        console.log(input)
    }

    const handleUpload = () => {
        setNames((prevState) => {
            return [input, ...prevState]
        })
    }

    return (
        <main>
            <input type='text' value={input} onChange={handleInputChange}/>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, idx) => <p key={idx}>{name}</p> )}
        </main>
    );
}

export default Exe01