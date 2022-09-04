import React from "react";
import "./HookUseRef.css"
const HookUseRef = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const divstyle = React.useRef();
    const show = () => {
        if (count % 2 === 0) {
            divstyle.current.id = "green";
        }
        else {
            divstyle.current.id = "red";
        }
    }
    React.useEffect(() => {
        show()
    }, [count])

    return (
        <div>
            <div>UseRef</div>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <div style={{ border: '1px solid ' }} ref={divstyle}></div>
        </div>
    );
}
export default HookUseRef;