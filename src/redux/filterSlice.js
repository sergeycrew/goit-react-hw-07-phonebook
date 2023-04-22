import { createSlice } from '@reduxjs/toolkit';

const filteredValue = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filteredValue,
  reducers: {
    setFilterValue(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
