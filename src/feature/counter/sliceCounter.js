import { createSlice } from "@reduxjs/toolkit";

const initialStateForCounter = {
  user : "Jumadi",
  counter: 10000,
};

const counterRTKSlice = createSlice({
  name: "counterRTK",
  initialState: initialStateForCounter,

  // definisikan action nya bisa apa aja
  reducers: {
    increment(state) {
      // state harus immutable.. tapi itu menggunakan reducers standar
      // jadi kalo pake redux toolkit dibalik layar semua state itu sudah dibungkus oleh sesuatu yang bernama "imer"
      // sehingga kita bisa menuliskan perubahan state, seolah olah state itu "nutable", seingga kita bisa meng assign atau plus 1
      state.counter += 1;
    },
    decrement(state){
      state.counter -= 1;
    },
    reset(state) {
      state.counter = 0;
    },
    incrementSpec(state, action) {
      state.counter += action.payload;
    },
    decrementSpec(state, action) {
      state.counter -= action.payload;
    }
  },
});

// kita export recuders dulu
// action
export const {incrementSpec, decrementSpec, reset, increment, decrement } = counterRTKSlice.actions;

// --- selector ---
export const selectUser = (state) => state.counterRTK.user;
export const selectCounter = (state) => state.counterRTK.counter;

// -- reducer ---
export default counterRTKSlice.reducer;
