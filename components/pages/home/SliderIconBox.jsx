import { Box, IconButton } from '@mui/material';
import { BsCameraReels } from 'react-icons/bs';
import { FaPhotoVideo } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';

const SliderIconBox = ({ activeSlide, handleClick }) => {

  return (
    <Box className='flex items-center gap-3'>
      <IconButton onClick={() => handleClick(0)}>
        <BsCameraReels
          className={`text-white hover:text-(--beige) ${activeSlide === 0 && 'scale-150'}`}
        />
      </IconButton>
      <IconButton onClick={() => handleClick(1)}>
        <FaPhotoVideo
          className={`text-white hover:text-(--beige) ${activeSlide === 1 && 'scale-150'}`}
        />
      </IconButton>
      <IconButton onClick={() => handleClick(2)}>
        <FaUsers
          className={`text-white hover:text-(--beige) ${activeSlide === 2 && 'scale-150'}`}
        />
      </IconButton>
    </Box>
  );
};

export default SliderIconBox;
