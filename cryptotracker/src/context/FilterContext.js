import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [filter, setFilter] = useState({ perPage: 20, pageNumber: 1 });

  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      {props.children}
    </FilterContext.Provider>
  );
};
