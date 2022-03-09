import logo from './logo.svg';
import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
		<button number={34} class="btn btn-primary">Click Me!</button>
    
		<Box text="Hello how are you"/>
			<h1>Hello</h1>
		<Box isDark={true}/>
	</div>
  );
}

export default App;
