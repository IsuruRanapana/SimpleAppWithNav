import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../features/loadingSpinner/loadingSpinnerSlice";
import screenReducer from "../features/screenNavigation/screenNavigationSlice";
import authReducer from "../features/auth/authSlice";
import apiLoadingReducer from "../features/apiLoading/apiLoadingSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    screener: screenReducer,
    auther: authReducer,
    apiLoader: apiLoadingReducer,
  },
});
