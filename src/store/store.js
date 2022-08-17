import { configureStore } from "@reduxjs/toolkit";
import birthdaydata from "./birtdaydata";

const store = configureStore({
  reducer: {
    birth: birthdaydata.reducer,
  },
});

export default store;
