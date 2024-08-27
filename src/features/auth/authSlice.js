import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },

    updateUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { loginUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
