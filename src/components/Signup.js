import { Route, Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className='signup'>
      <div className='mainContainer'>
        <div className='output'>
          <Route exact path='signup/step1'>
            First step
          </Route>
          <Route exact path='signup/step2'>
            Second step
          </Route>
          <Route exact path='signup/step3'>
            Third step
          </Route>
          <Route exact path='signup/step4'>
            Fourth step
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Signup;
