import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, ButtonBase, IconButton, useMediaQuery } from '@mui/material';
import { Close, Home, Search } from '@mui/icons-material';

export default function HomeDrawer({ open, setOpen }) {
  const smScreen = useMediaQuery('(max-width: 640px)');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className='w-full p-2' role='presentation' onClick={toggleDrawer(false)}>
      <Box className='flex justify-between items-center w-full p-3'>
        <Avatar />
        <IconButton onClick={toggleDrawer(false)}>
          <Close />
        </IconButton>
      </Box>
      <ListItem>
        <button className='bg-(--beige) text-white w-full p-2 rounded-[6px] cursor-pointer'>
          Login
        </button>
      </ListItem>
      <ListItem>
        <button className='border border-solid border-(--beige) text-(--beige) w-full p-2 rounded-[6px] cursor-pointer'>
          Register
        </button>
      </ListItem>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={'dgdfgdfg'} />
          </ListItemButton>
        </ListItem>
        {smScreen && (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary={'Tìm kiếm'} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor='right'
        sx={{
          '.MuiPaper-root': {
            width: smScreen ? '100%' : '350px',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
