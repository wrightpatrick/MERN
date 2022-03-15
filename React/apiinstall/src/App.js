import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
	const [breweries, setBreweries] = useState([]);
	const [form, setForm] = useState("");

	const fetchInfo = (event) => {
		event.preventDefault();

		console.log("calling API");
		//fetch is a promise to finish the following code before returning.
		fetch("https://api.openbrewerydb.org/breweries?by_city="+form)
			.then(res => res.json())
			.then(res => {
			console.log(res);
			setBreweries(res);
			})
			//promises exist in 3 states: working, resolved, or rejected. errors get caught here and logged.
			.catch(err => console.log(err))
	}

	return (
		<div className="App">
			<h1>Brews in your area!</h1>
			<form className="form" onSubmit={fetchInfo}>
				<label className="form-label">City</label>
				<input type="text" className="form-control" onChange={(event)=>setForm(event.target.value)}/>
				<button type="submit" onClick={fetchInfo} className="btn btn-primary m-2">Search</button>
			</form>
			<ul className="list-group list-group-numbered">
				{
					breweries.map((item,i)=>{
						return <li className="list-item" key={i}>Name: {item.name} | Website: {item.website_url}</li>
					})
				}
			</ul>
		</div>
	);
}

export default App;
