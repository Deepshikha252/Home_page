import React from 'react';
import Grid from '@mui/material/Grid';
import ZoomCard from './ZoomCard'; // Adjust the import path as needed
 // Replace with the correct image path
import Soafa from "./assets/Soafa.png";
const ZoomCardContainer = () => {
  const images = [Soafa, Soafa, Soafa, Soafa]; // Replace with your images

  return (
    <div className="wrapper">
      <Grid container spacing={3} className="flex p-4 space-x-4 overflow-x-auto">
        {images.map((image, index) => (
          <Grid item key={index}>
            <ZoomCard image={image} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ZoomCardContainer;
