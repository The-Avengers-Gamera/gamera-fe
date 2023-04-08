import React, { useEffect, useState } from 'react';
import { Box, Drawer, List, ListItem, Button, Typography, Menu, MenuItem } from '@mui/material';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import globalTheme from '@/styles/theme';
import style from './index.module.scss';
import logo from './assets/logo.png';
import searchIcon from '@/assets/nav-search.png';
import useAuth from '@/context/auth';
import NavListItem from './components/NavListItem';
import { moreMenuItems } from './components/DropdownItem/DropdownItem';
import SearchDialog from '../SearchDialog/SearchDialog';

const SearchIcon = styled.img`
  width: 1.5rem;
`;

const SearchModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const navItemStyle = {
  fontWeight: 'regular',
  fontSize: '0.5rem',
  textAlign: 'center',
  fontFamily: 'Russo One',
};

interface NavLink {
  route?: string;
  title: string;
  icon?: JSX.Element;
  isLink?: boolean;
  handleNavClick: (title: string) => void;
}

// TODO: user links list
const userLinks: NavLink[] = [
  {
    route: '/profile',
    title: 'MY PROFILE',
    handleNavClick: () => {
      // implement later
    },
  },
  {
    route: '/liked',
    title: 'LIKED',
    handleNavClick: () => {
      // implement later
    },
  },
  {
    route: '/commented',
    title: 'COMMENTED',
    handleNavClick: () => {
      // implement later
    },
  },
  {
    route: '/my-post',
    title: 'MY POSTS',
    handleNavClick: () => {
      // implement later
    },
  },
];

interface NavBarProps {
  setIsMore: React.Dispatch<React.SetStateAction<boolean>>;
  expendNavMoreRef: React.RefObject<HTMLButtonElement>;
}

const NavBar = ({ setIsMore, expendNavMoreRef }: NavBarProps) => {
  const {
    auth: { isLogin, isEditor },
    logout,
  } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [navBtnSelected, setNavBtnSelected] = React.useState<string | null>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const open = Boolean(anchorEl);

  const moreMenuPath = moreMenuItems.map((item) => item.url);

  const handleNavBtnSelected = (title: string) => {
    setNavBtnSelected(title);
  };

  const handleSearchClick = () => {
    setModalIsOpen(true);
  };

  const generalLinks: NavLink[] = [
    {
      route: '/games',
      title: 'GAME',
      icon: <VideogameAssetRoundedIcon />,
      handleNavClick: handleNavBtnSelected,
    },
    {
      title: 'Search',
      isLink: false,
      icon: <SearchIcon src={searchIcon} />,
      handleNavClick: handleSearchClick,
    },
    {
      route: '/news',
      title: 'NEWS',
      icon: <FeedRoundedIcon />,
      handleNavClick: handleNavBtnSelected,
    },
    {
      route: '/reviews',
      title: 'REVIEW',
      icon: <RateReviewRoundedIcon />,
      handleNavClick: handleNavBtnSelected,
    },
  ];

  useEffect(() => {
    if (generalLinks.some((item) => item.route === pathname)) {
      generalLinks.forEach((item) => {
        if (item.route === pathname) {
          setNavBtnSelected(item.title);
        }
      });
      return;
    }

    if (moreMenuPath.includes(pathname)) {
      setNavBtnSelected('MORE');
      return;
    }

    if (pathname.includes('settings')) {
      setNavBtnSelected('SETTINGS');
    }

    if (userLinks.some((item) => item.route === pathname)) {
      // TODO: handle user links
    }
  }, [pathname]);

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
  const handleMoreClick = () => {
    setIsMore((prev: boolean) => !prev);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        style={{
          overlay: {
            zIndex: 1500,
            backgroundColor: 'rgba(65, 73, 90, 0.8)',
            backdropFilter: 'blur(26px)',
          },
        }}
      >
        <SearchDialog onModalClose={handleCloseModal} />
      </SearchModal>
      <Drawer
        sx={{
          width: '101px',
          '& .MuiDrawer-paper': {
            bgcolor: globalTheme.color.bg_nav,
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
              {generalLinks.map(({ route, title, icon, handleNavClick }) => (
                <NavListItem
                  navBtnSelected={navBtnSelected}
                  onNavBtnSelected={handleNavClick}
                  route={route}
                  title={title}
                  icon={icon}
                  key={title}
                />
              ))}
              <NavListItem
                navBtnSelected={navBtnSelected}
                onNavBtnSelected={() => {
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
                  ref={expendNavMoreRef}
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
                  onNavBtnSelected={setNavBtnSelected}
                  route="/settings"
                  title="SETTINGS"
                  icon={<SettingsRoundedIcon />}
                />
                <NavListItem
                  title="LOGOUT"
                  navBtnSelected={navBtnSelected}
                  onNavBtnSelected={setNavBtnSelected}
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
                  onNavBtnSelected={setNavBtnSelected}
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
