import { createSlice } from '@reduxjs/toolkit';

const mealItemSlice = createSlice({
  name: 'meal-item',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.length === 1;
      if (state.items.length == 0) state.items = [...newItem];
      else if (state.items.length >= 1) {
        state.items = [];
        state.items.push(newItem);
      }
    },
    emptyItem(state, action) {
      state.items = [];
    },
  },
});

export const mealItemActions = mealItemSlice.actions;

export default mealItemSlice;
