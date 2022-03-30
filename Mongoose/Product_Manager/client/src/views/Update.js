import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UpdatePerson = () => {
    //keep track of what is being typed via useState hook
    const [form, setForm] = useState({});
    const { _id } = useParams();

    //handler when the form is submitted
    const onUpdateHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.patch(`/api/person/${_id}/update`, {
            ...form
        })
        .then(res=>{console.log(res);
            history.push('/api/person/people');
        })
        .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div className='form'>
            <form onSubmit={onUpdateHandler}>
                <div className='form-label'>
                    <label className='form-control' htmlFor='firstName'>First Name</label>
                    <input value={form.firstName} className='form-control' name='firstName' type="text" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className='form-label'>
                    <label className='form-control' htmlFor='lastName'>Last Name</label>
                    <input value={lastName} className='form-control' name='lastName' type="text" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <input className='btn btn-outline-primary mt-2' type="submit"/>
            </form>
        </div>
    )
}

export default UpdatePerson;