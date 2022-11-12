import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    
    const Reset = () => {
        setCount(0);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1 className='counterNum'> {count} </h1>
            <div className='btns'>
             <button onClick={Increment}> + </button>
             <button onClick={Reset}> Reset </button>
             <button onClick={Decrement}> - </button>
            </div>
        </>
    )
}

export default App; 