import './App.css';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
	const [task, setTask] = useState([]);
	const [completed, setCompleted] = useState('');
	const [form, setForm] = useState('');
	
	const onSubmitHandler = (event) => {
		event.preventDefault();
		const newState = [...task, form];
		setTask(newState);
		setCompleted(false);
		setForm('');
	};

	return (
	<div className="App">
		<h1 className='display-1'>To Do List</h1>
		<div className='container'>
			<p className='display-5 float-start m-3'>Create a new Task:</p>
			<form className='form-control' onSubmit={onSubmitHandler}>
				<div className='input-group'>
					<span className="input-group-text">New Task</span>
					<textarea className='form-control' onChange={(event) => setForm(event.target.value) } placeholder='Enter Task here...'/>
				</div>
				<span className="input-group-check">Task Completed?</span>
				<input  type='checkbox' className='input-group-check mx-3' onChange={(event) => setForm(event.target.value)}/>
				<input type='submit' className='btn btn-outline-success m-3'/>
			</form>
			{
				task.map((item,i)=>{
					return <ToDoList key={i} name={item}/>
				})
			}
		</div>

	</div>
	);
}

export default App;
