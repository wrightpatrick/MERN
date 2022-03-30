import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Update = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { _id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/person/'+ _id)
            .then(res => {
                setFirstName(res.data.person.firstName);
                setLastName(res.data.person.lastName);
            })
            .catch(err=> console.log(err))
    },[_id]);
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.patch(`http://localhost:8000/api/person/${_id}/update`,{
                firstName,
                lastName
            })
            .catch(err => console.log(err.response.data.err.errors));
            history.push('/api/people')
    }

    return(
        <div>
            <h1 className='display-2'>Edit Person</h1>
            <form className='w-75 mx-auto' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input value={firstName} onChange={(event)=>{setFirstName(event.target.value)}} type='text' name='firstName' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input value={lastName} type='text' name='lastName' onChange={(event)=>{setLastName(event.target.value)}} className='form-control'/>
                </div>
                <input type='submit' className='btn btn-outline-success mt-2'/>
            </form>
        </div>
)
}

export default Update;