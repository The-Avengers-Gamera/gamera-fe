import { Box, Typography } from '@mui/material';
import theme from '@/styles/theme';
import style from './index.module.css';
import { titleFont, secTitleFont } from '../../utils/useFont';

interface Props {
  title: string;
  padding?: string;
}

const ContainerHeader = ({ title, padding }: Props) => (
  <Box
    className={style.containerHeader}
    sx={{ p: padding }}
  >
    <Box className={style.headerLeft}>
      <Typography sx={titleFont}>{title}</Typography>
      <Typography
        className={style.headerLeftSubtitle}
        color={theme.color.primary}
        sx={secTitleFont}
      >
        7 DAYS
      </Typography>
    </Box>
  </Box>
);
export default ContainerHeader;
