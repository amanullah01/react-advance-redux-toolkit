import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { isVisibleCart: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
