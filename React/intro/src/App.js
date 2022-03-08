import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const printStuff =(phrase) => {
		console.log(phrase);
	}

return (
	<div className="App">
		<h1>Hello its Patrick's Website</h1>
		<h1>7+8</h1>
		<h1>{7+8}</h1>{/*this is tag{} for literal JavaScript*/}
		<img alt="pic"/>
		<button onClick={printStuff}>Click on me!</button>
		<button onMouseLeave={()=>{printStuff("Hey other one here!")}}>Then click me!</button>
	</div>
);
}

export default App;
