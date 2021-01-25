import { Route, NavLink } from "react-router-dom";

const StepIndicator = () => {
  const steps = [
    {
      path: "signup/step1",
    },
    {
      path: "signup/step2",
    },
    {
      path: "signup/step3",
    },
    {
      path: "signup/step4",
    },
  ];
  return (
    <div className='stepIndicator'>
      {steps.map((step, index) => (
        <>
          <NavLink key={index} to={step.path}>
            {index + 1}
          </NavLink>
          <hr />
        </>
      ))}
    </div>
  );
};

export default StepIndicator;
