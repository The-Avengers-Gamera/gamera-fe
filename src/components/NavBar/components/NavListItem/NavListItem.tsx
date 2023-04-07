import React from 'react';
import { Box, ListItem, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './NavListItem.module.scss';
import { navItemStyle } from '../../NavBar';

type NavListItemProps = {
  route?: string;
  title: string;
  icon?: JSX.Element;
  children?: JSX.Element;
  setNavBtnSelected: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  navBtnSelected: string | null | undefined;
  ref?: undefined;
};

const NavListItem = ({
  route,
  title,
  icon,
  children,
  setNavBtnSelected,
  navBtnSelected,
  ref,
}: NavListItemProps) => {
  const handleNavBtnClick = () => {
    setNavBtnSelected(title);
  };

  return (
    <ListItem
      key={title}
      disablePadding
      className={navBtnSelected === title ? style.listItemSelected : style.listItem}
      onClick={handleNavBtnClick}
    >
      <Box
        className={style.navItemContainer}
        ref={ref || null}
      >
        {children || (
          <Link
            style={{ width: 100 }}
            to={route || ''}
          >
            <Button
              className={style.navBtn}
              sx={{ color: 'inherit' }}
            >
              {icon}
              <Typography sx={navItemStyle}>{title}</Typography>
            </Button>
          </Link>
        )}
      </Box>
    </ListItem>
  );
};

export default NavListItem;
