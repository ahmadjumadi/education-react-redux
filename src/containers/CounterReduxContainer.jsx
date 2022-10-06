import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
} from '@mui/material';

import { useDispatch,useSelector } from 'react-redux';

import { selectUser, selectCounter, userAsync} from "../feature/counter/sliceCounter.js";
import {
  increment,
  decrement,
  incrementSpec,
  decrementSpec,
  reset,
} from "../feature/counter/sliceCounter.js";

const CounterReduxContainer = () => {
  
  const user = useSelector(selectUser);
  const counter = useSelector(selectCounter);
  const [userId, setUserId] = useState(0);

  const [currAmount, setCurrAmount] = useState(0);

  //ambil dispacherna
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // ingkin melakukan suattu aksi dengan nama decrement
    dispatcher(decrement());
  };
  const buttonIncrementOnClickHandler = () => {
    dispatcher(increment());
  };

  const buttonResetOnClickHandler = () => {
    dispatcher(reset());
  };

  const textFieldAmountOnChangeHandler = (e) => {
    const amountFromField = isNaN(parseInt(e.target.value))
    ? 0
    : parseInt(e.target.value);

    setCurrAmount(amountFromField);
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    dispatcher(incrementSpec(currAmount));
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    dispatcher(decrementSpec(currAmount));
  };
  const buttonUserOnClickHandler = () => {
    dispatcher(userAsync(userId));
  };

  

  const textFieldUserIdOnChangeHandler = (e) => {
    const valueUserId = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);

    setUserId(valueUserId);
  };

  useEffect(
    () => {
      dispatcher(userAsync(1));
    },
    [dispatcher]
  );
  
  return (
    <>
      <Box
          sx={{
            border: "1px dashed grey",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
        <Typography variant="body1" component="div">
          Use Redux
        </Typography>

        <Avatar 
          src={user.avatar}
          alt={user.first_name}
          sx={{width: 64, height: 64}}
        />
        <Typography variant="body1" component="div">
          Nama Orang : {user.first_name}
        </Typography>

        
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="User ID"
            size="small"
            value={userId}
            onChange={textFieldUserIdOnChangeHandler}
          />
          <Button
            variant="contained"
            color="info"
            onClick={buttonUserOnClickHandler}
            size="small"
          >
            Get Data User
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="error"
            onClick={buttonDecrementOnClickHandler}
          >
            -1
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={buttonResetOnClickHandler}
          >
            0
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={buttonIncrementOnClickHandler}
          >
            +1
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="amount"
            size="small"
            value={currAmount}
            onChange={textFieldAmountOnChangeHandler}
          />
          <Button
            variant="contained"
            color="error"
            onClick={buttonDecrementByAmountOnClickHandler}
            size="small"
          >
            - Amount
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={buttonIncrementByAmountOnClickHandler}
            size="small"
          >
            + Amount
          </Button>
        </Box>
      </Box>
    </>

  );
};

export default CounterReduxContainer;
