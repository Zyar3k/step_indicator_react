import { Route, NavLink } from "react-router-dom";

const StepIndicator = () => {
  const steps = [
    {
      path: "/step1",
    },
    {
      path: "/step2",
    },
    {
      path: "/step3",
    },
    {
      path: "/step4",
    },
  ];
  return (
    <div className='stepIndicator'>
      {steps.map((step, index) => (
        <>
          <NavLink
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
