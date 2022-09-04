import React from "react";
const HookUseState = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        if (count < 10) {
            setCount((prev) => prev + 1)
            setCount((prev) => prev + 1)
        }

    }
    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1)
            setCount((prev) => prev - 1)
        }

    }
    const [value, setValue] = React.useState('');
    const arr = [];
    const [arrData, setArrData] = React.useState(arr);
    const add = (newVal) => {
        setArrData((prev) => [...prev, newVal])
        setValue('');
    }
    const object1={
        fname:"su",
        lname:"de"
    };
    const [obj,setObj]=React.useState(object1);
    return (
        <div>
            <div>useState Single element</div>
            <div>{count}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <div>useState array</div>
            <div>
                <input
                    type='text'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button onClick={(e) => add(value)}>Add</button>
            </div>
            <div>{arrData}</div>
            <div>
                <div>useState Object</div>
                <button
                onClick={
                    (e)=>
                    setObj(
                        (prev)=>
                        ({...prev,fname:'suvro'})
                    )
                }
                >Click</button>
                <div>{JSON.stringify(obj)}</div>
            </div>
        </div>
    );
}
export default HookUseState;
