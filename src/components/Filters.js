import React from 'react';

const Filters = ({setCurrentFilter}) => {

  return (
    <div style={{ marginTop: 20 }}>
      <button  value="All" onClick={() => setCurrentFilter()} className="">
        All
      </button>
      <button  value="Active" onClick={() => setCurrentFilter("isActive") } className="">
        Active
      </button>
      <button  value="Completed" onClick={() => setCurrentFilter("completed") } className="">
        Completed
      </button>
    </div>
  );
};

export { Filters };
