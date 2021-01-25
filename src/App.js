import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup/step1'>Sign Up</Link>
      </nav>
      <Route exact path='/'>
        <h2 className='homeTitle'>Home</h2>
      </Route>
      <Route exact to='/signup/:step' component={Signup} />
    </Router>
  );
}

export default App;
