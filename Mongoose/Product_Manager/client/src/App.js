import React from 'react';
import Main from './views/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './views/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/api/people'>
              <Main />
            </Route>

            <Route exact path='/api/person/:_id'>
              <Detail />
            </Route>
            
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
