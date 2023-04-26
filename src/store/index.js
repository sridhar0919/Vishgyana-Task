import { configureStore } from '@reduxjs/toolkit';
import mealItemSlice from './mealitem-slice';
import infoSlice from './info-slice';

const store = configureStore({
  reducer: { mealItem: mealItemSlice.reducer, info: infoSlice.reducer },
});

export default store;
