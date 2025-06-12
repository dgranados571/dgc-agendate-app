import { useState } from "react"


export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setState] = useState( initialState )

    const incremet = ( factor ) => {
        setState( counter + factor );
    }

    const decrement = ( factor ) => {
        setState( counter - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    return {
        counter,
        incremet,
        decrement,
        reset
    }
}
