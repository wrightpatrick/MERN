import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
	
	return (
		<div className="App">
		<h1>Hey, you're pretty good!</h1>
		<PersonCard firstName="Iriqois" lastName="Pliskin" age={35} hairColor="Brown"/>
		<PersonCard firstName="Revolver" lastName="Ocelot" age={52} hairColor="Brown"/>
		<PersonCard firstName="Grey" lastName="Fox" age={42} hairColor="Grey"/>
		<PersonCard firstName="Hal" lastName="Otacon" age={33} hairColor="Brown"/>
	</div>
	);
}

export default App;
