import { v4 as uuid } from 'uuid';
import { Box, Grid } from '@mui/material';
import React from 'react';
import style from './index.module.css';

const GeneralContainer = ({ header, children, mobile, laptop, sx }: any) => (
  <Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {header}
      <Box className={style.container} sx={sx}>
        <Grid container spacing={2}>
          {children.map((child: any) => (
            <Grid key={uuid()} mobile={mobile} laptop={laptop} item>
              {/* insert your card here */}
              {child}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </Box>
);
export default GeneralContainer;
