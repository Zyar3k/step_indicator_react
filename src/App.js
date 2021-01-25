import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup/step1'>Sign Up</NavLink>
      </nav>
      <Route>
        <h2 className='homeTitle'>Home</h2>
      </Route>
    </Router>
  );
}

export default App;
