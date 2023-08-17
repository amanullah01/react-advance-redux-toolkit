import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { isVisibleCart: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
