import { Box, Drawer, List, ListItem, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HomeIcon from '@mui/icons-material/Home';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import theme from '@/styles/theme';
import style from './index.module.css';

const generalLinks = [
  { route: '/', title: 'LOGO', icon: <HomeIcon /> },
  { route: '/game', title: 'GAME', icon: <VideogameAssetRoundedIcon /> },
  { route: '/news', title: 'NEWS', icon: <FeedRoundedIcon /> },
  { route: '/review', title: 'REVIEW', icon: <RateReviewRoundedIcon /> },
  { route: '/#', title: 'MORE', icon: <MoreHorizRoundedIcon /> },
];

const conditionalLinks = [
  { route: '/settings', title: 'SETTINGS', icon: <SettingsRoundedIcon /> },
  { route: '/#', title: 'LOGOUT', icon: <ExitToAppRoundedIcon /> },
  { route: '/#', title: 'USER', icon: <AccountCircleRoundedIcon /> },
];
const NavBar = () => (
  <Drawer
    sx={{
      width: 100,
      boxSizing: 'border-box',
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        bgcolor: theme.color.bg_light,
        width: 100,
        boxSizing: 'border-box',
        borderRight: '1px dashed white',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <List
      className={style.navBar}
      sx={{ color: '#5D5D5D' }}
    >
      <Box className={style.navBarTopGroup}>
        {generalLinks.map(({ route, title, icon }) => (
          <ListItem
            key={uuid()}
            disablePadding
          >
            <Link
              className={style.navItemContainer}
              to={route}
            >
              <IconButton sx={{ color: 'inherit' }}>{icon}</IconButton>

              <Typography sx={{ fontSize: '0.5rem', textAlign: 'center' }}>{title}</Typography>
            </Link>
          </ListItem>
        ))}
      </Box>
      <Box className={style.navBarBottomGroup}>
        {conditionalLinks.map(({ route, title, icon }) => (
          <ListItem
            key={uuid()}
            disablePadding
          >
            <Link
              className={style.navItemContainer}
              to={route}
            >
              <IconButton sx={{ color: 'inherit' }}>{icon}</IconButton>

              <Typography sx={{ fontSize: '0.5rem', textAlign: 'center' }}>{title}</Typography>
            </Link>
          </ListItem>
        ))}
      </Box>
    </List>
  </Drawer>
);

export default NavBar;
