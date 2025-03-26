import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';

const FullImageCard = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: 250,
        borderRadius: 4,
        border: '1px solid #E4E4E7',
        overflow: 'hidden',
        '&:hover': {
          border: '1px solid var(--accent_green)',
          boxShadow: 'rgba(50, 186, 85, 0.2) 0px 8px 24px',
          transform: 'scale(1.1)',
        },
        '&:hover::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          zIndex: 1,
        },
      }}
      className={`rounded-3xl animate__animated animate__fadeInUp relative `}
    >
      <CardMedia sx={{ height: '100%', width: '100%' }} image={image} title={title} />
      <Box className='absolute bottom-0 left-0 z-50 w-full flex justify-center flex-col p-3'>
        <h5 className='text-white text-center'>{title}</h5>
        <small className='text-(--grey) text-center'>{description}</small>
      </Box>
    </Card>
  );
};

export default FullImageCard;
