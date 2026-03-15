import { useRef,useState } from "react";

const UncontrolledInput = () => {
    const nameRef=useRef();
    const emailRef=useRef();
    const [showUser,setShowUser]=useState({});
    const handleSubmit=()=>{
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        setShowUser({name,email})
    }
    return (
        <div>
            <div style={{marginTop:'20px',marginBottom:'20px'}}>
                <p>Instead of handling the inputs through the useState hook, uncontrolled inputs in HTML maintain their own internal state with the help of the DOM.Since the DOM controls the input values, what you need is to pull in the values of the input fields with ref. This approach requires less code and performs better because refs do not make React re-render.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor='name'>Name: 
                    <input id='name'  type='text' ref={nameRef} ></input>
                </label>
                <label htmlFor='email'>Email: 
                    <input id='email' type='text' ref={emailRef}></input>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <div style={{marginTop:'20px',marginBottom:'20px'}}>
                <p>{showUser.name}</p>
                <p>{showUser.email}</p>
            </div>
        </div>
    );
};

export default UncontrolledInput;