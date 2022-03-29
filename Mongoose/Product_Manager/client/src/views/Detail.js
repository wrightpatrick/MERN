import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [person, setPerson] = useState({});
    const { _id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/person/${_id}`)
            .then(res => setPerson(res.data.person))
            .catch(err => console.error(err));
    },[_id])
    
    return (
        <div className='container w-200'>
            <h1 className='display-2'>Details</h1>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    )
}
    
export default Detail;

