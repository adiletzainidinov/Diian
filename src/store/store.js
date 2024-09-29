import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './slices/catalogSlice/catalogSlice';

const store = configureStore({
  reducer: {
    [catalogSlice.name]: catalogSlice.reducer,
  },
});

export default store;
