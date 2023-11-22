import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tvChannels: [],
};

export const chanelSlice = createSlice({
  name: "chanelSlice",
  initialState,
  reducers: {
    startLoadingChannels: (state /*action*/) => {
      state.isLoading = true;
    },
    setChannels: (state, action) => {
      state.isLoading = true;
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingChannels, setChannels } = chanelSlice.actions;

export default chanelSlice.reducer;
