import React from 'react';

const Display = ({ update, number }) => {
  return (
    <div className='display'>{number}</div>
    //   <input
    //     type='number'
    //     className='display'
    //     defaultValue={number}
    //     pattern='[0-9]{0,5}'
    //   />
  );
};

export default Display;
