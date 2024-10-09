import  { useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

const PickImages = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  // Handle the file input change
  const handleFileChange = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files).map(file => URL.createObjectURL(file));

    // Set the state with the selected image URLs
    setSelectedImages((prevImages) => prevImages.concat(imagesArray));

    // Free memory when component unmounts
    Array.from(files).forEach(file => URL.revokeObjectURL(file));
  };

  return (
    <Box sx={{mb:2}}>
      <Button variant="contained" component="label">
        Upload Image
        <input
          type="file"
          hidden
          multiple
          accept="image/*" // Accept only image files
          onChange={handleFileChange}
        />
      </Button>
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Upload Preview ${index}`}
            style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
          />
        ))}
      </div>
    </Box>
  );
};
export default PickImages;
