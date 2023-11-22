import { configureStore } from "@reduxjs/toolkit";
// import chanelReducer from "./slices/chanel/ChanelSlice";
import { channelsApi } from "./api/channelsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // channels: chanelReducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(channelsApi.middleware),
});

setupListeners(store.dispatch);
