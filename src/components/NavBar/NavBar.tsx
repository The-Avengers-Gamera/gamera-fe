import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const drawerWidth = '110px';
const links = [
  { route: '/', title: 'Home' },
  { route: '/game', title: 'Game' },
  { route: '/news', title: 'News' },
  { route: '/review', title: 'Review' },
  { route: '/settings', title: 'Settings' },
  { route: '/post', title: 'Post' },
];
const NavBar = () => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <List>
      {links.map(({ route, title }) => (
        <ListItem
          key={uuid()}
          disablePadding
        >
          <ListItemButton>
            <Link to={route}>
              <ListItemText primary={title} />
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default NavBar;
