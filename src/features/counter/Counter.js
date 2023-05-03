import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(3);

    return (
        <div>
            Counter
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            count: {count}
            <div>
                increment by: <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
                <button onClick={()=> dispatch(incrementByAmount(Number(incrementAmount)|| 0))}>Add</button>
            </div>

        </div>
    )
}