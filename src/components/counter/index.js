import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../features/counter/counterSlice.js'

export const CounterComponent = () => {
    const count = useSelector((state) => state.counter.count)
    // console.log(count)
    const dispatch = useDispatch()
    // console.log(dispatch)
    const incrementCounter = useCallback(
        () => dispatch(increment()),
        [dispatch],
    )
    const decrementCounter = useCallback(
        () => dispatch(decrement()),
        [dispatch],
    )
    return (
        <div>
            <MyIncrementButton onIncrement={incrementCounter} />
            <span>{count}</span>
            <MyDecrementButton onDecrease={decrementCounter} />
        </div>
    )
}

export const MyIncrementButton = React.memo(({ onIncrement }) => (
    <button onClick={onIncrement}>+</button>
))
export const MyDecrementButton = React.memo(({ onDecrease }) => (
    <button onClick={onDecrease}>-</button>
))  