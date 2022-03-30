import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";

    
const Detail = (props) => {
    const [person, setPerson] = useState({});
    const { _id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/person/${_id}`)
            .then(res => setPerson(res.data.person))
            .catch(err => console.error(err));
    },[_id])

    const onDeleteHandler = (_id) => {
        console.log('Deleting ' + _id)
        axios.delete(`http://localhost:8000/api/person/${_id}/delete`)
            .then(res=>{console.log(res);
            })
            .catch(err=>console.log(err.response))
            history.push('/api/people');
    }
    
    return (
        <div className='container w-200'>
            <h1 className='display-2'>Details</h1>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <Link to='/api/people'><button className='btn btn-outline-info m-2'>Back</button></Link>
            <button className='btn btn-outline-success m-2'>Update</button>
            <button onClick={()=>onDeleteHandler(person._id)} className='btn btn-outline-danger m-2'>Delete</button>
        </div>
    )
}
    
export default Detail;

