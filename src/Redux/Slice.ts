import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
};

const userSlice = createSlice({
  name: "userDetailsSlice",
  initialState,
  reducers: {
    userInfo: (state, action) => {console.log(action.payload,"slice")
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
  },
});

export const { userInfo } = userSlice.actions;
export const userDetailReducer = userSlice.reducer;
