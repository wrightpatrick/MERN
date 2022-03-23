import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

const Planets = (props) =>{
    const [responseData, setResponseData] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/'+id)
        .then(response=>{setResponseData(response.data)})
        .catch(err=>console.log(err))
        
    }, [id]);

    const Render = () =>{
        if(!responseData){
            return(<div></div>);
        }
        return(
            <div>
            <h1>{responseData.name}</h1>
            <p>{responseData.climate}</p>
            <p>{responseData.orbital_period}</p>
            <p>{responseData.population}</p>
        </div>
    )
}
    return Render();
}

export default Planets;