// store.js
import { configureStore } from '@reduxjs/toolkit';
import likeSlice from './likeSlice';
import cartSlice from './ShopSlice';

export const store = configureStore({
  reducer: {
    like: likeSlice,
    cart: cartSlice,
  },
});

export default store;