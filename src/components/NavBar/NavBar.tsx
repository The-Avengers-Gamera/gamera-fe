import { Box, Drawer, List, ListItem, Button, Typography, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import theme from '@/styles/theme';
import style from './index.module.css';
import logo from './assets/logo.png';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const generalLinks = [
    { route: '/game', title: 'GAME', icon: <VideogameAssetRoundedIcon /> },
    { route: '/news', title: 'NEWS', icon: <FeedRoundedIcon /> },
    { route: '/review', title: 'REVIEW', icon: <RateReviewRoundedIcon /> },
    { route: '/#', title: 'MORE', icon: <MoreHorizRoundedIcon /> },
  ];
  const conditionalLinks = [
    { route: '/settings', title: 'SETTINGS', icon: <SettingsRoundedIcon /> },
    { route: '/#', title: 'LOGOUT', icon: <ExitToAppRoundedIcon /> },
  ];

  return (
    <Drawer
      sx={{
        width: 100,
        boxSizing: 'border-box',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          bgcolor: theme.color.bg_light,
          width: 100,
          boxSizing: 'border-box',
          borderRight: '2px dashed rgba(255,255,255,0.5)',
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
          <ListItem
            sx={{ pb: '0.5rem' }}
            disablePadding
          >
            <Link
              className={style.navItemContainer}
              to="/"
            >
              <img
                alt="logo"
                src={logo}
              />
            </Link>
          </ListItem>
          {generalLinks.map(({ route, title, icon }) => (
            <ListItem
              key={title}
              disablePadding
            >
              <Link
                className={style.navItemContainer}
                to={route}
              >
                <Button
                  className={style.navBtn}
                  sx={{ color: 'inherit' }}
                >
                  {icon}
                  <Typography sx={{ fontSize: '0.5rem', textAlign: 'center' }}>{title}</Typography>
                </Button>
              </Link>
            </ListItem>
          ))}
        </Box>
        <Box className={style.navBarBottomGroup}>
          {conditionalLinks.map(({ route, title, icon }) => (
            <ListItem
              key={title}
              disablePadding
            >
              <Link
                className={style.navItemContainer}
                to={route}
              >
                <Button
                  className={style.navBtn}
                  sx={{ color: 'inherit' }}
                >
                  {icon}

                  <Typography sx={{ fontSize: '0.5rem', textAlign: 'center' }}>{title}</Typography>
                </Button>
              </Link>
            </ListItem>
          ))}
          <ListItem
            sx={{ pb: '0.5rem' }}
            disablePadding
          >
            <Link
              className={style.navItemContainer}
              to="/"
            >
              <Button
                className={style.navBtn}
                sx={{ color: 'inherit' }}
                aria-controls="normal-user-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <AccountCircleRoundedIcon />
                USER
              </Button>
              <Menu
                id="normal-user-menu"
                className={style.menu}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                PaperProps={{
                  style: {
                    backgroundColor: '#13141f',
                  },
                }}
              >
                <MenuItem
                  className={style.menuItem}
                  onClick={handleClose}
                >
                  MY PROFILE
                </MenuItem>
                <MenuItem
                  className={style.menuItem}
                  onClick={handleClose}
                >
                  LIKES
                </MenuItem>
                <MenuItem
                  className={style.menuItem}
                  onClick={handleClose}
                >
                  COMMENTS
                </MenuItem>
              </Menu>
            </Link>
          </ListItem>
        </Box>
      </List>
    </Drawer>
  );
};

export default NavBar;
