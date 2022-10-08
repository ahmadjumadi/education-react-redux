import {configureStore} from "@reduxjs/toolkit";
// import { initialValue, rootReducer, } from "../reducers/rootReduces";

import sliceCounter from "../feature/counter/sliceCounter";
import { reqresinColorAPI } from "../services/reqresinColorAPI";

export const store = configureStore({
  // reducer: rootReducer,
  // preloadedState: initialValue,
  reducer: {
    counterRTK: sliceCounter,
    [reqresinColorAPI.reducerPath]: reqresinColorAPI.reducer,
  }, 
  // misalkan untuk tingkat lanjut ingin mwgnggunaan caching/invalidation
  // polling 
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(reqresinColorAPI.middleware);
  },
});

// ganti istilah di redux toolkit "reducer" => "slices"
