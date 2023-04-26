import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'info-contact',
  initialState: { details: [] },
  reducers: {
    addDetails(state, action) {
      const newItem = action.payload;
      state.details.push(newItem);
    },
    emptyDetails(state, action) {
      state.details = [];
    },
  },
});

export const infoSliceActions = infoSlice.actions;

export default infoSlice;
