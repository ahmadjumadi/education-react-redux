import React from "react";
import {
  Box,
  Typography,
} from '@mui/material';

// kita ingin menerima data dari luar/component parent

const ColorItem = ({objColorItem }) => {
  return (
    <>
      <Box
        sx={{
          color: objColorItem.color,
        }}
      >
        <Typography variant="body2">{objColorItem.name}</Typography>
      </Box>
    </>
  )
}

export default ColorItem;