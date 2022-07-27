import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,delayIncrement} from './redux/reducer/counter'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    console.log("RENDER - Counter");
    return (
        <>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(delayIncrement())}>dealy increment</button>
        </>
    )
}
