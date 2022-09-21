import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../features/loadingSpinner/loadingSpinnerSlice";
import screenReducer from "../features/screenNavigation/screenNavigationSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    screener: screenReducer,
  },
});
