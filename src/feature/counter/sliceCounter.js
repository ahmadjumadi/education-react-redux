import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateForCounter = {
  user : "Jumadi",
  counter: 10000,
};

// membuat async thunk
// nantinya variabel in akan disimpan ditemppat lain, sehinga harus di export

export const userAsync = createAsyncThunk(
  // paraameter pertamanya adalah prefix
  // nantinya prefix ini akan membuat konstanta string
  // "prefix/pending", "prefix/fulfilled", "prefix/rejected"
  "counterRTK/getUserData",
  // Payload (function handler) , sebuAH FUNGSI yang sifatnya asyncronous 
  async (id) => {
    // kita akan membuatkan fungsi untuk mengambil data dari server
    // hasilnya akan mngembalikan data
    const {data} = await axios.get(`https://reqres.in/api/users/${id}`);
    // dalam function handler ini harus ada return

    // diabawah ini adalah return untuk mengembalikan data hasil adari axios
    return data.data;
  }
);

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
  // extraReducers ini aalah sebuah fungsi yang menerima sebuah parameter namanya adalah builder
  extraReducers: (builder) => (
    builder
    // builder ini funya fngsi bernama addCase
    .addCase(
      userAsync.pending,
      () => {
        console.log("pending lagi nunggu data user");
      }
    )
    .addCase(
      userAsync.fulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    )
  )
});

// kita export recuders dulu
// action
export const {incrementSpec, decrementSpec, reset, increment, decrement } = counterRTKSlice.actions;

// --- selector ---
export const selectUser = (state) => state.counterRTK.user;
export const selectCounter = (state) => state.counterRTK.counter;

// -- reducer ---
export default counterRTKSlice.reducer;
