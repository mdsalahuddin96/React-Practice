import { useState } from "react"

export default function Message(){
    const [disable,setDisable]=useState(false)
    const handleDisable=()=>{
        disable?setDisable(false):setDisable(true);
    }
    return(
        <>
            <div className="message">
                <button className="btn" onClick={handleDisable}>{disable?'Hide Message':'Show Message'}</button>
                {disable&&<p>I love Programmin Hero</p>}
            </div>
            
        </>
    )
}