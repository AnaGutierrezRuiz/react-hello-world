import React, { useState } from "react";

function Counter({ min, max }) {

  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount((prev) => {
      if (prev < max) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  }

  const handleCountDown = () => {
    setCount((prev) => {
      if (prev > min) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  }

  let countColor;
  switch (count) {
    case max:
      countColor = 'text-success';
      break;
    case min:
      countColor = 'text-danger';
      break;
    default:
      countColor = '';
  }

  return (
    <div className="border bg-light p-3 align-items-center d-flex flex-column">
      <p className={countColor}>{count}</p>
      <div className="d-flex gap-1">
        <button className="btn btn-sm btn-secondary" onClick={handleCountDown} disabled={count === min}><i className="fa fa-minus"></i></button>
        <button className="btn btn-sm btn-primary" onClick={handleCountUp} disabled={count === max}><i className="fa fa-plus"></i></button>
      </div>
    </div>
  )
}

Counter.defaultProps = {
  min: 0,
  max: 100
};

export default Counter;
