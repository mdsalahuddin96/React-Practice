import {useState } from "react";

const ControlledInput = () => {
    const [user,setUser]=useState({
        name:"",
        email:""
    })
    const [showUser,setShowUser]=useState({})
    const handleChange=(e)=>{
        const key=e.target.name;
        const value=e.target.value;
        setUser(preUser=>{
            return{...preUser,[key]:value}
        })
    }
    const handleSubmit=()=>{
        setShowUser({...user})
    }
    return (
        <div>
            <div style={{marginTop:'20px',marginBottom:'20px'}}>
                <p>With controlled inputs, we can store the input field value in state and update it through onChange events. This gives us complete control over the form data and allows instant validation and conditional rendering.. But it is costly because for each value change component will Rerender.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor='name'>Name: 
                    <input id='name' name="name" type='text' value={user.name} onChange={handleChange}></input>
                </label>
                <label htmlFor='email'>Email: 
                    <input id='email' name="email" type='text' value={user.email} onChange={handleChange}></input>
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

export default ControlledInput;