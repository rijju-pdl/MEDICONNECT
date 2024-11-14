import { configureStore } from "@reduxjs/toolkit";
  import doctorsReducer from "./doctorSlice";
  import hospitalsReducer from "./hospitalsSlice";
  import providersSearchReducer from "./providerSearchSlice";
  import doctors2Reducer from "./doctors2slice";
  import authReducer from "./authSlice";

  export const store = configureStore({
    reducer: {
      doctors: doctorsReducer,
      hospitals: hospitalsReducer,
      providersSearch: providersSearchReducer,
      doctors2: doctors2Reducer,
      auth : authReducer,
    },
  });

  export default store;