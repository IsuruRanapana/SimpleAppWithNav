import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../features/loadingSpinner/loadingSpinnerSlice";
import screenReducer from "../features/screenNavigation/screenNavigationSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    screener: screenReducer,
    auther: authReducer,
  },
});
