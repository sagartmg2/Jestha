import React, { useReducer } from 'react'

export default function ReducerCounter() {

    const reducer = (state, action) => {

        console.log({ action })
        switch (action.type) {
            case "ADD":
                return state + 1;
                break;
            case "SUBTRACT":
                return state - 1;
                break;
            case "ADDAMOUNT":
                return state + action.payload;
                break;

            default:
                break;
        }

        console.log("inside", state);
        return state + 1;

    }

    const [state, dispatch] = useReducer(reducer, 0)


    return (
        <>
            <div>{state}</div>
            <button onClick={() => { dispatch({ type: "ADD" }) }}>+add</button>
            <button onClick={() => { dispatch({ type: "ADDAMOUNT", payload: 100 }) }}>+addAmount</button>
            <button onClick={() => { dispatch({ type: "SUBTRACT" }) }}>-decrement</button>
        </>

    )
}
