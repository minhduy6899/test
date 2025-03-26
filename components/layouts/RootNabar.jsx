'use client';

import Images from '@/constants/Images';
import {
  Apartment,
  ArrowDropDown,
  Business,
  CameraAlt,
  Check,
  House,
  KeyboardArrowDown,
  KeyboardArrowRight,
  VideoCameraBack,
} from '@mui/icons-material';
import { Avatar, Box, Button, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HomeDrawer from './components/HomeDrawer';
import { NestedDropdown } from 'mui-nested-menu';

const menuItemsData = {
  label: 'Tìm kiếm',
  items: [
    {
      label: 'Hoạt động',
      rightIcon: <KeyboardArrowRight />,
      callback: (event, item) => console.log('New clicked', event, item),
      items: [
        {
          label: 'Chụp ảnh',
          leftIcon: <CameraAlt />,
          callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        },
        {
          label: 'Quay phim',
          leftIcon: <VideoCameraBack />,
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
          // disabled: true,
        },
      ],
    },
    {
      label: 'Thể loại',
      rightIcon: <KeyboardArrowRight />,
      callback: (event, item) => console.log('Save clicked', event, item),
      items: [
        {
          label: 'Nhà',
          leftIcon: <House />,
          callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        },
        {
          label: 'Văn phòng',
          leftIcon: <Business />,
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
          // disabled: true,
        },
        {
          label: 'Căn hộ',
          leftIcon: <Apartment />,
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
          // disabled: true,
        },
        {
          label: 'Phim trường',
          leftIcon: <VideoCameraBack />,
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
          // disabled: true,
        },
      ],
    },
    {
      label: 'Địa điểm',
      rightIcon: <KeyboardArrowRight />,
      delay: 300,
      items: [
        {
          label: 'Hồ Chí Minh',
          leftIcon: <Check />,
          callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        },
      ],
    },
  ],
};
const RootNabar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const smScreen = useMediaQuery('(max-width: 640px)');

  // scroll to change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Box
      className={`flex justify-between items-center px-4 lg:px-[100px] bg-transparent w-full z-50 h-[80px] max-w-[1920px] ${
        isScrolled ? 'fixed' : 'absolute'
      }`}
      style={{
        transition: 'background-color 1s ease',
        backgroundColor: isScrolled ? 'rgba(255,255,255, 0.9)' : 'transparent',
      }}
    >
      <Image src={Images.logo} width={60} height='auto' alt='logo' />
      <Box className='flex items-center'>
        {!smScreen && (
          <NestedDropdown
            menuItemsData={menuItemsData}
            MenuProps={{
              elevation: 3,
              sx: {
                '& .MuiPaper-root': {
                  minWidth: '180px !important',
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  top: '70px !important',
                },

                // Hover effect for all menu items
                '& .MuiButtonBase-root:hover': {
                  backgroundColor: 'var(--beige)',
                  color: 'var(--white)',
                },
              },
            }}
            ButtonProps={{
              variant: 'standard',
              sx: {
                color: isScrolled ? 'black' : 'white',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                '&:hover': {
                  color: 'var(--accent_green)',
                },
              },
            }}
            onClick={() => console.log('Clicked')}
          />
        )}

        {/* sidebar */}
        <Box
          className='flex items-center cursor-pointer ml-5'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Avatar />
          <KeyboardArrowDown sx={{ color: isScrolled ? 'black' : 'white' }} />
        </Box>
        <HomeDrawer open={openMenu} setOpen={setOpenMenu} />
      </Box>
    </Box>
  );
};

export default RootNabar;
