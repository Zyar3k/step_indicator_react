import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup/step1'>Sign Up</NavLink>
      </nav>
      <Route exact path='/'>
        <h2 className='homeTitle'>Home</h2>
      </Route>
      <Route exact to='/signup/:step' component={Signup} />
    </Router>
  );
}

export default App;
