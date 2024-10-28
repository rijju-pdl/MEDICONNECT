import { configureStore } from "@reduxjs/toolkit";
  import doctorsReducer from "./doctorSlice";
  import hospitalsReducer from "./hospitalsSlice";
  import providersSearchReducer from "./providerSearchSlice";

  export const store = configureStore({
    reducer: {
      doctors: doctorsReducer,
      hospitals: hospitalsReducer,
      providersSearch: providersSearchReducer,
    },
  });

  export default store;