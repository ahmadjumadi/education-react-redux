import React, {useState} from "react";
import {
  Box,
  TextField,
  Button,
  Typography
} from '@mui/material';
import { usePostColorMutation } from "../services/reqresinColorAPI";


const ColorForm = () => {
  // state dalam bentuk object
  const [colorData, setColorData] = useState({
    name: "",
    year: "",
    color: "",
    pantone_value: "",
  });

  // Disini kita akan menggunakan hook usePostColorMutation
  // yang sudah kita buat di file reqresinColorAPI.js
  // usePostColorMutation ini akan mengembalikan 2 nilai
  // akan meliliki array (tulpel) dengan 2 nilai:
  // - trigger / dispatch (kita beri nama postColor)
  // - result / hasil dari dispatch (kita beri nama postColorResult) hasil tembakan datanya dalam bentuk object

  // result ini akan memiliki 2 properti utama bisa kita gunakan 
  // - isLoading dan data
  const [addColor, result] = usePostColorMutation();

  // kita akan membuat fungsi untuk menghandle event onChange pada textField name
  const handleOnChangeName = (e) => {
    // kita ambil nilai dari event onChange
    const value = e.target.value;
    // kita ubah state colorData
    setColorData({
      ...colorData,
      name: value,
    });
  };

  // kita akan membuat fungsi untuk menghandle event onChange pada textField year
  const handleOnChangeYear = (e) => {
    // kita ambil nilai dari event onChange
    const value = e.target.value;
    // kita ubah state colorData
    setColorData({
      ...colorData,
      year: value,
    });
  };
  // kita akan membuat fungsi untuk menghandle event onChange pada textField color
  const handleOnChangeColor = (e) => {
    // kita ambil nilai dari event onChange
    const value = e.target.value;
    // kita ubah state colorData
    setColorData({
      ...colorData,
      color: value,
    });
  };
  // kita akan membuat fungsi untuk menghandle event onChange pada textField pantone_value
  const handleOnChangePantoneValue = (e) => {
    // kita ambil nilai dari event onChange
    const value = e.target.value;
    // kita ubah state colorData
    setColorData({
      ...colorData,
      pantone_value: value,
    });
  };
  // disni kita akan membuat fungsi untuk menghandle event onClick pada button
  const handleOnClickButton = () => {
    // kita akan memanggil fungsi postColor yang sudah kita dapat dari usePostColorMutation
    // dan kita akan mengirimkan data yang kita ambil dari state colorData
    addColor(colorData);
  };

  return (
    <>
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "25vw" }}
    >
      <TextField 
        size="small"
        label="Color Name"
        variant="outlined"
        onChange={handleOnChangeName}
        value={colorData.name}
      />
      <TextField 
        size="small"
        label="Year Created"
        variant="outlined"
        onChange={handleOnChangeYear}
        value={colorData.year}
      />
      <TextField 
        size="small"
        label="Number of Color (e.g #F1F1F1)"
        variant="outlined"
        onChange={handleOnChangeColor}
        value={colorData.color}
      />
      <TextField 
        size="small"
        label="Pantone Value"
        variant="outlined"
        onChange={handleOnChangePantoneValue}
        value={colorData.pantone_value}
      />
      <Button 
        variant="contained"
        color="success"
        onClick={handleOnClickButton}
      >Add Color</Button>

      {/* kita akan menampilkan hasil dari result */}
      { result.isLoading ? (
        <Typography variant="body2">Loading...</Typography>
      ) : (
        <Typography variant="body2">{JSON.stringify(result.data)}</Typography>
      )}
    </Box>
    </>
  );
}

export default ColorForm;