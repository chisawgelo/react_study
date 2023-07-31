import {useState} from "react";


const Count = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < 10) {
        setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 0) {
        setCount(count - 1)
        }
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Count;