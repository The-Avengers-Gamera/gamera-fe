import { Divider, Box, Grid } from '@mui/material';
import React from 'react';
import style from './index.module.css';

interface Props {
  divider: boolean | null | undefined;
  header: React.ReactNode;
  children: Array<React.ReactNode>;
  mobile: number;
  laptop: number;
  sx: object;
}

const GeneralContainer = ({ divider = false, header, children, mobile, laptop, sx }: Props) => (
  <Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {header}
      <Box
        className={style.container}
        sx={sx}
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            mobile={12}
            laptop={12}
            item
          >
            {divider ? <Divider /> : ''}
          </Grid>

          {children.map((child: any) => (
            <Grid
              key={child.key}
              mobile={mobile}
              laptop={laptop}
              item
            >
              {child}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </Box>
);
export default GeneralContainer;
