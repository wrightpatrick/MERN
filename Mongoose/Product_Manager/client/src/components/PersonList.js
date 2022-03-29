import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

    
const PersonList = (props) => {
    return (
        <div>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.people.map( (person, i) =>
                        <tr key={i}>
                            <td><Link to={`/api/person/${person._id}`}>{person.firstName}</Link></td>
                            <td>{person.lastName}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
    
export default PersonList;

