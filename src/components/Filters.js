import React from 'react';

const Filters = ({filterActive , task}) => {

  return (
    <div>
      <button  value="All" onClick={() => filterActive()} className="">
        All
      </button>
      <button  value="Active" onClick={() => {}} className="">
        Active
      </button>
      <button  value="Completed" onClick={() => {}} className="">
        Completed
      </button>
    </div>
  );
};

export { Filters };
