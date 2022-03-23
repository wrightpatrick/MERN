import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { BrowswerRouter } from 'react-router-dom';
import Planets from './components/planets';
import People from './components/people';

function App() {
  const [input, setInput] = useState('');
  const [inputId, setInputId] = useState('');

  const history = useHistory();

   const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(input, inputId);
    
    history.push(`/${input}/${inputId}`);
    
    setInputId('');
     
   }

  return (
    <div className="App">
      <h1>Star Wars Search</h1>
      <form onSubmit={onSubmitHandler} className='form'>
        <div className='row'>
          <div className='col'>

            <label htmlFor='input'>Search for:</label>
            <select name='input' className='form-select w-600' value={input} onChange={(event)=>setInput(event.target.value)}>
              <option value='people'>People</option>
              <option value='planets'>Planets</option>
            </select>
          </div>
          <div className='col'>
            <label htmlFor='number'>ID:</label>
            <input type='number' name='number' className='form-control w-600' value={inputId} onChange={(event)=>setInputId(event.target.value)}></input>
          </div>
        </div>
            <input type='submit' className='btn btn-primary'></input>
      </form>
      <Switch>
        <Route exact path="/planets/:id">
          <Planets />
        </Route>
        <Route exact path="/people/:id">
          <People />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
