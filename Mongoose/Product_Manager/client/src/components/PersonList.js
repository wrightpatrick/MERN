import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

    
const PersonList = (props) => {
    const { removeFromDom } = props;
    
    const deletePerson = (_id) => {
        axios.delete('http://localhost:8000/api/person/' + _id + '/delete')
            .then(res => {
                removeFromDom(_id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.people.map( (person, i) =>
                        <tr key={i}>
                            <td><Link to={`/api/person/${person._id}`}>{person.firstName}</Link></td>
                            <td>{person.lastName}</td>
                            <td><button className='btn btn-outline-danger m-2' onClick={(event)=>{deletePerson(person._id)}}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
    
export default PersonList;

