import { Box, Drawer, List, ListItem, Button, Typography, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import theme from '@/styles/theme';
import style from './index.module.scss';
import logo from './assets/logo.png';
import useAuth from '@/context/auth';
import NavListItem from './components/NavListItem';

export const navItemStyle = {
  fontWeight: 'regular',
  fontSize: '0.5rem',
  textAlign: 'center',
  fontFamily: 'Russo One',
};

const NavBar = ({ setIsMore, expendBtnRef }: unknown) => {
  const {
    auth: { isLogin },
    logout,
  } = useAuth();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [navBtnSelected, setNavBtnSelected] = React.useState<string | null>();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const isEditor = true;
  const handleMoreClick = () => {
    setIsMore((prev: boolean) => !prev);
  };

  const generalLinks = [
    { route: '/games', title: 'GAME', icon: <VideogameAssetRoundedIcon /> },
    { route: '/news', title: 'NEWS', icon: <FeedRoundedIcon /> },
    { route: '/reviews', title: 'REVIEW', icon: <RateReviewRoundedIcon /> },
  ];

  return (
    <>
      <Drawer
        sx={{
          width: '101px',
          '& .MuiDrawer-paper': {
            bgcolor: theme.color.bg_nav,
            minHeight: '340px',
            width: '101px',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List
          className={style.navBar}
          sx={{ color: '#5D5D5D' }}
        >
          <>
            <Box className={style.navBarTopGroup}>
              <ListItem
                sx={{ pb: '0.5rem' }}
                disablePadding
              >
                <Link
                  onClick={() => setNavBtnSelected('')}
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
                <NavListItem
                  navBtnSelected={navBtnSelected}
                  setNavBtnSelected={setNavBtnSelected}
                  route={route}
                  title={title}
                  icon={icon}
                  key={title}
                />
              ))}
              <NavListItem
                navBtnSelected={navBtnSelected}
                setNavBtnSelected={() => {
                  handleMoreClick();
                  setNavBtnSelected('MORE');
                }}
                route=""
                title="MORE"
                icon={<MoreHorizRoundedIcon />}
                key="MORE"
              >
                <Button
                  className={style.navBtn}
                  sx={{ color: 'inherit' }}
                  ref={expendBtnRef}
                >
                  <MoreHorizRoundedIcon />
                  <Typography sx={navItemStyle}>MORE</Typography>
                </Button>
              </NavListItem>
            </Box>
            {isLogin && (
              <Box className={style.navBarBottomGroup}>
                <NavListItem
                  navBtnSelected={navBtnSelected}
                  setNavBtnSelected={setNavBtnSelected}
                  route="/settings"
                  title="SETTINGS"
                  icon={<SettingsRoundedIcon />}
                />
                <NavListItem
                  title="LOGOUT"
                  navBtnSelected={navBtnSelected}
                  setNavBtnSelected={setNavBtnSelected}
                >
                  <Button
                    className={style.navBtn}
                    sx={{ color: 'inherit' }}
                    onClick={handleLogout}
                  >
                    <ExitToAppRoundedIcon />
                    <Typography sx={navItemStyle}>LOGOUT</Typography>
                  </Button>
                </NavListItem>
                <NavListItem
                  title="USER"
                  navBtnSelected={navBtnSelected}
                  setNavBtnSelected={setNavBtnSelected}
                >
                  <Button
                    className={style.navBtn}
                    sx={{ color: 'inherit' }}
                    aria-controls="editor-user-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <AccountCircleRoundedIcon />
                    <Typography sx={navItemStyle}>USER</Typography>
                  </Button>
                </NavListItem>
              </Box>
            )}
          </>
        </List>
      </Drawer>
      <Menu
        id="editor-user-menu"
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
          LIKED
        </MenuItem>
        <MenuItem
          className={style.menuItem}
          onClick={handleClose}
        >
          COMMENTED
        </MenuItem>
        {isEditor && (
          <MenuItem
            className={style.menuItem}
            onClick={handleClose}
          >
            MY POSTS
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default NavBar;
