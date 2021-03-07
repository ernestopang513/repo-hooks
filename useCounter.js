import  { useState } from 'react'

export const useCounter = (initialState = 10) => {
 

    const [state, setstate] = useState(initialState)

    const increment = () =>{
        setstate(state + 1);
    }

    const decrement = (factor = 1) =>{
        setstate(state - factor);
    }

    const reset = () => setstate(initialState);

    return {
        counter: state,
        increment,
        decrement,
        reset
    }
}
