import {configureStore} from "@reduxjs/toolkit";
// import { initialValue, rootReducer, } from "../reducers/rootReduces";

import sliceCounter from "../feature/counter/sliceCounter";

export const store = configureStore({
  // reducer: rootReducer,
  // preloadedState: initialValue,
  reducer: {
    counterRTK: sliceCounter,
  }
});

// ganti istilah di redux toolkit "reducer" => "slices"
