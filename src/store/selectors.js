export const getBikes = state => state.bikes;
export  const getFilters = state => state.filter;
export const isFilterActive = (state, filter) => state => state.filter === filter;
