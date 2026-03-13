import { useState } from "react"
export default function Counter(){
    const [count,setCount]=useState(0);
    
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handledecrement=()=>{
        setCount(count-1);
    }
    const handleReset=()=>{
        setCount(0);
    }
    
    return(
        <div>
            <h3>Count: {count}</h3>
            <div>
                <button className="btn" onClick={handleIncrement}>+</button>
                <button className="btn" onClick={handledecrement}>-</button>
                <button className="btn" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}