import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/person/new', {
            firstName,
            lastName
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div className='container'>
            <form className='form' onSubmit={onSubmitHandler}>
                <p className='form-control'>
                    <label>First Name</label><br/>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                </p>
                <p className='form-control'>
                    <label>Last Name</label><br/>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                </p>
                <input className='btn btn-outline-primary mt-2' type="submit"/>
            </form>
        </div>
    )
}

