import authSlice from "@/features/auth/authSlice";
import findPlaceSlice from "@/features/hero/findPlaceSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authSlice,
  hero: findPlaceSlice,
  // Add other reducers here
});

export default rootReducer;
