import React from 'react';

const OperatorButton = ({ update, operator }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => update(operator.value)}>{operator.value}</button>
    </>
  );
};

export default OperatorButton;
