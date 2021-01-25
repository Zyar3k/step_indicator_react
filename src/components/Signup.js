import { Route, Link, useHistory } from "react-router-dom";
import StepIndicator from "./StepIndicator";

const Signup = () => {
  const history = useHistory();
  const handleNextStep = () => {
    history.push("/signup/step2");
  };
  return (
    <div className='signup'>
      <div className='mainContainer'>
        <StepIndicator />
        <div className='output'>
          <Route exact path='/signup/step1'>
            First step
            <div className='btnContainer'>
              <Link to='/signup/step2'>Next</Link>
              <button onClick={handleNextStep}>Next</button>
            </div>
          </Route>
          <Route exact path='/signup/step2'>
            Second step
            <div className='btnContainer'>
              <Link to='/signup/step1'>Back</Link>
              <Link to='/signup/step3'>Next</Link>
            </div>
          </Route>
          <Route exact path='/signup/step3'>
            Third step
            <div className='btnContainer'>
              <Link to='/signup/step2'>Back</Link>
              <Link to='/signup/step4'>Next</Link>
            </div>
          </Route>
          <Route exact path='/signup/step4'>
            Fourth step
            <div className='btnContainer'>
              <Link to='/signup/step3'>Back</Link>
            </div>
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Signup;
