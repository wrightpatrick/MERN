import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
	const [pokemon, setPokemon] = useState([]);
	
	const fetchInfo = () => {
		

		console.log("calling API");
		//fetch is a promise to finish the following code before returning.
		axios.get("https://pokeapi.co/api/v2/pokemon/?limit=800")
			// .then(res => res.json())
			.then(res => {
			console.log(res);

			setPokemon(res.data.results);
			
			}).catch(err => console.log(err))
		}	
    	return(
        	<div>
				<div className="App">
					<h1>Get Pokemon!</h1>
					{/* <form className="form" onSubmit={fetchInfo}> */}
					{/* <label className="form-label">City</label> */}
					{/* <input type="text" className="form-control" onChange={(event)=>setForm(event.target.value)}/> */}
					<button type="submit" onClick={fetchInfo} className="btn btn-primary m-2">Throw Pokeball!</button>
					{/* </form> */}
					<ul className="list-group list-group-numbered">
					{
						pokemon.map((item,i)=>{
							return <li className="list-item" key={i}>Name: {item.name}</li>
						})
					}
					</ul>
				</div>
        	</div>
    		)
}


export default App;
