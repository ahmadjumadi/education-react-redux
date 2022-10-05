// data 1 - nama dari user (string)
// data 2 - counter (angka nya ada berapa) (integer)

export const initialValue = {
  user: "Jumadi",
  counter: 100000,
};

export const rootReducer = (state, action) => {
  // tipe aksinya harus "type" 
  // sehingga action wajib punya properti yang namanya "type" 
  // "increment" untuk menambahkan counter (+1)
  // "decrement" untuk mengurangi counter (-1)
  // "incrementSpec" untuk menambahkan counter sejumlah "amount" (+ amount)
  // "decrementSpec" untuk mengurangi counter sejumlah "amount" (- amount)

  if (action.type === "increment") {
    // sebelumnya counter + 1
    // state immutable atau tdak boleh di re-assign, 
    // karena initial value sebuah object , sehingga harus mengembaikan object yang beru
    return {...state, counter: state.counter + 1};
  } else if (action.type === "decrement") {
    return {...state, counter: state.counter - 1};
  } else if (action.type === "incrementSpec") {
    return {...state, counter: state.counter + action.amount};
  } else if (action.type === "decrementSpec") {
    return {...state, counter: state.counter - action.amount};
  } else if (action.type === "reset") {
    return {...state, counter: 0};
  }

  // harus punya suatu default state / action
  else {
    return state;
  }


};