import { Box, ListItem, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './NavListItem.module.scss';
import { navItemStyle } from '../../NavBar';
import ConditionalWrapper from '@/components/Shares/ConditionalWrapper/ConditionalWrapper';

type NavListItemProps = {
  route?: string;
  title: string;
  icon?: JSX.Element;
  isLink?: boolean;
  children?: JSX.Element;
  onNavBtnSelected: (title: string) => void;
  navBtnSelected: string | null | undefined;
  ref?: undefined;
};

const NavListItem = ({
  route,
  title,
  icon,
  isLink,
  children,
  onNavBtnSelected,
  navBtnSelected,
  ref,
}: NavListItemProps) => {
  const handleNavBtnClick = () => {
    onNavBtnSelected(title);
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
          <ConditionalWrapper
            condition={isLink || true}
            renderWrapper={(wrapperChildren) => (
              <Link
                style={{ width: 100 }}
                to={route || ''}
              >
                {wrapperChildren}
              </Link>
            )}
          >
            <Button
              className={style.navBtn}
              sx={{ color: 'inherit' }}
            >
              {icon}
              <Typography sx={navItemStyle}>{title}</Typography>
            </Button>
          </ConditionalWrapper>
        )}
      </Box>
    </ListItem>
  );
};

export default NavListItem;
