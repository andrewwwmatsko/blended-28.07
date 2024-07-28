import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange: (_, { payload }) => {
      return payload;
    },
  },
  selectors: {
    selectFilter: state => state,
  },
});

export const filterReducer = filterSlice.reducer;

export const { selectFilter } = filterSlice.selectors;

export const { filterChange } = filterSlice.actions;
