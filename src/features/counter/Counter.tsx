import React, {useState} from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { increment, decrement, incrementByAmount } from "./counterSlice";

export const Counter = () => {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState(3);

    return (
        <div>
            Counter
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            count: {count}
            <div>
                increment by: <input value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value) || 0)}/>
                <button onClick={()=> dispatch(incrementByAmount(incrementAmount))}>Add</button>
            </div>

        </div>
    )
}