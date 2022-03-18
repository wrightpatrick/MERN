import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
	const [pokemon, setPokemon] = useState([]);
	// const [form, setForm] = useState("");
  const [responseData, setResponseData] = useState(null);

	const fetchInfo = (event) => {
		event.preventDefault();

		console.log("calling API");
		// //fetch is a promise to finish the following code before returning.
		// fetch("https://pokeapi.co/api/v2/pokemon/?limit=800")
		// 	.then(res => res.json())
		// 	.then(res => {
		// 	console.log(res);
		// 	setPokemon(res.results);
		// 	})
		// 	//promises exist in 3 states: working, resolved, or rejected. errors get caught here and logged.
		// 	.catch(err => console.log(err))
    
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=800')
          .then(response=>{setResponseData(response.data)})
    }, []); 
    return(
        <div>
            {responseData}
        </div>
    )
	}

	return (
		<div className="App">
			<h1>Get Pokemon!</h1>
			<form className="form" onSubmit={fetchInfo}>
				{/* <label className="form-label">City</label> */}
				{/* <input type="text" className="form-control" onChange={(event)=>setForm(event.target.value)}/> */}
				<button type="submit" onClick={fetchInfo} className="btn btn-primary m-2">Throw Pokeball!</button>
			</form>
			<ul className="list-group list-group-numbered">
				{
					pokemon.map((item,i)=>{
						return <li className="list-item" key={i}>Name: {item.name}</li>
					})
				}
			</ul>
		</div>
	);
}

export default App;
