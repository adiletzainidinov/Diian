import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCatalog: false,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    isCatalogTrue(state) {
      state.isCatalog = true;
    },
    isCatalogFalse(state) {
      state.isCatalog = false;
    },
  },
});

export const { isCatalogFalse, isCatalogTrue } = catalogSlice.actions;
export default catalogSlice;
