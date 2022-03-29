import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const history = useHistory();
    // //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/person/new', {
            firstName,
            lastName
        })
        .then(res=>{console.log(res);
            history.push('/api/person/'+ res.data.person._id);
        })
        .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div className='form'>
            <form onSubmit={onSubmitHandler}>
                <div className='form-label'>
                    <label className='form-control' htmlFor='firstName'>First Name</label>
                    <input className='form-control' name='firstName' type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div className='form-label'>
                    <label className='form-control' htmlFor='lastName'>Last Name</label>
                    <input className='form-control' name='lastName' type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                </div>
                <input className='btn btn-outline-primary mt-2' type="submit"/>
            </form>
        </div>
    )
}

export default PersonForm;

