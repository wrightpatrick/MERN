import React, { useEffect } from 'react';
import axios from 'axios';

const Search = (props) => {
    // const [search, setSearch] = useState([]);
    // const [searchId, setSearchId] = useState('');

    useEffect(() => {
      axios.get('https://swapi.dev/api/people/1')
        // .then(response=>response.json())
        .then(response=> {
            console.log(response);
            // setSearch(response.data.people);
            // setSearchId(response.data.people);
        })
        .catch(err=>console.log(err))
    }, []);

    return (
        <div>
            <h1>{props.search}</h1>
        </div>
    )
    
}

export default Search;