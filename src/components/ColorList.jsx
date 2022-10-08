import React from "react";
import ColorItem from "./ColorItem";
import {
  Box,
  Typography,
} from '@mui/material';

// terima data dari API
// menggunakan hooks yang dibuatkan oleeh RTK qurtynya
import { useGetColorsQuery } from '../services/reqresinColorAPI';
const ColorList = () => {
  // terima dalam bentuk object / destructuring 
  //const { data, error, isLoading } = useGetColorsQuery();
  // 1. data -> data yang diquerikan (response data) 
  // 2. error -> error yang terjadi
  // 3. isLoading -> status loading
  const { data, error, isLoading } = useGetColorsQuery();
  return (
    <>
      <Box>
        {error ? (
          <> Ada error kayaknya</>
        ) : isLoading ? (
          <>
            <Typography variant="body2">Loading...</Typography>
          </>
        ): (
          data.data.map((objColorItem) => (
            <ColorItem objColorItem={objColorItem} />
          ))
        )}
      </Box>
    </>
  )
};

export default ColorList;