import React, { useState } from 'react';
import { Box, Button, InputLabel, TextField, useTheme } from '@mui/material';
let initialState = {
  name: '',
  slug: '',
  category: '',
  images: [],
  price: null,
  rating: null,
  numReviews: null,
  countInStock: null,
  description: '',
};
const Form = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState(initialState);
  const [images, setImages] = useState([]);
  const {
    name,
    slug,
    category,
    price,
    rating,
    numReview,
    countInStock,
    description,
  } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const onAddFiles = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldArray) => [...oldArray, reader.results]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <form onSubmit={handleSubmit} style={{ height: 'fit-content' }}>
      <Box display="flex">
        <InputLabel sx={{ flex: 1 }}>Product Name</InputLabel>
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          sx={{
            flex: 2,
            mb: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Box display="flex">
        <InputLabel sx={{ flex: 1 }}>Product Price</InputLabel>
        <TextField
          type="number"
          name="price"
          value={price}
          onChange={handleInputChange}
          sx={{
            flex: 2,
            mb: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Box display="flex">
        <InputLabel sx={{ flex: 1 }}>Product Slug</InputLabel>
        <TextField
          type="text"
          name="slug"
          value={slug}
          onChange={handleInputChange}
          sx={{
            flex: 2,
            mb: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Box display="flex">
        <InputLabel sx={{ flex: 1 }}>Product Category</InputLabel>
        <TextField
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
          sx={{
            flex: 2,
            mb: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Box display="flex">
        <InputLabel sx={{ flex: 1 }}>Product Ratings</InputLabel>
        <TextField
          name="rating"
          type="number"
          value={rating}
          onChange={handleInputChange}
          sx={{
            flex: 2,
            mb: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Box display="flex">
        <InputLabel
          sx={{
            flex: 1,
          }}
        >
          Product Numer of Reviews
        </InputLabel>
        <TextField
          name="numReviews"
          type="number"
          value={numReview}
          onChange={handleInputChange}
          sx={{
            flex: 2,
            mb: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Box display="flex">
        <InputLabel
          sx={{
            flex: 1,
          }}
        >
          Count In Stock
        </InputLabel>
        <TextField
          name="countInStock"
          type="number"
          value={countInStock}
          onChange={handleInputChange}
          sx={{
            flex: 2,
            mb: '1rem',

            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Box display="flex">
        <InputLabel
          sx={{
            flex: 1,
          }}
        >
          Product Description
        </InputLabel>
        <textarea
          type="message"
          name="description"
          value={description}
          rows={5}
          onChange={handleInputChange}
          style={{
            flex: 2,
            marginBottom: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        ></textarea>
      </Box>
      <Box display="flex">
        <InputLabel
          sx={{
            flex: 1,
          }}
        >
          Product Images
        </InputLabel>
        <input
          type="file"
          name="images"
          value={images}
          onChange={onAddFiles}
          multiple
          sx={{
            flex: 2,
            mt: '1rem',
            backgroundColor: theme.palette.background.alt,
          }}
        />
      </Box>
      <Button
        type="submit"
        sx={{
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.alt,
          fontSize: '14px',
          fontWeight: 'bold',
          width: '50%',
          mx: 'auto',
          my: '2rem',
          padding: '10px 20px',
        }}
      >
        Post Products
      </Button>
    </form>
  );
};

export default Form;
