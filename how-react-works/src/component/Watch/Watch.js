import React, { useEffect, useState } from 'react';

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseCount = () => {
    setSteps(steps + 1);

  };
  useEffect(() => { 
    console.log(steps);
  },[steps])
  return (
    <div>
      <h2>This is my Smartwastch</h2>
      <h3>My current Steps: {steps}</h3>
      <button onClick={increaseCount} >De Dour</button>
    </div>
  );
};

export default Watch;