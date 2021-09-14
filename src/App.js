import React from 'react'
import Dashbord from './components/dashbord/Dashbord';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SubmitSuccess from './components/applicationSubmit/SubmitSuccess';
function App() {
  return (
    <div>
      <Router>
      <div><ul><li><Link to="/dashbord">Dashbord</Link></li></ul></div>
      <div><ul><li><Link to="/submit">Submit</Link></li></ul></div>
      <Switch>
          <Route path="/dashbord">
          <Dashbord/>
          </Route>
          <Route path="/submit">
          <SubmitSuccess/>
          </Route>
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
