import { Route, NavLink } from "react-router-dom";

const StepIndicator = () => {
  const steps = [
    {
      path: "/signup/step1",
    },
    {
      path: "/signup/step2",
    },
    {
      path: "/signup/step3",
    },
    {
      path: "/signup/step4",
    },
  ];
  const handleStop = (e) => {
    e.preventDefault();
  };
  return (
    <div className='stepIndicator'>
      {steps.map((step, index) => (
        <>
          <NavLink
            onClick={handleStop}
            exact
            activeClassName='activeLink'
            key={index}
            to={step.path}
          >
            {index + 1}
          </NavLink>
          <hr />
        </>
      ))}
    </div>
  );
};

export default StepIndicator;
