import React from "react";
const HookUseEffect = () => {
    const [count, setCount] = React.useState(0);
    const [property, setProperty] = React.useState('');
    const increment = () => {
        if (count < 10)
            setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0)
            setCount(count - 1)
    }

    const show = () => {
        if (count % 2 === 0) {
            setProperty('Even')
        }
        else {
            setProperty('Odd')
        }
    }
    React.useEffect(() => {
        show()
    }, [count])

    return (
        <div>
            <div>HookUseEffect</div>
            <div>{count}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <div>{count} is {property}</div>
        </div>
    );
}
export default HookUseEffect;