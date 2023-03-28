import { Divider, Box, Grid } from '@mui/material';

import React from 'react';
import style from './index.module.css';
import theme from '@/styles/theme';

interface Props {
  divider: boolean | null | undefined;
  header: React.ReactNode;
  children: Array<React.ReactNode>;
  mobile: number;
  laptop: number;
  sx: object;
  rowGapPx?: string;
}

const GeneralContainer = ({
  divider = false,
  header,
  children,
  mobile,
  laptop,
  sx,
  rowGapPx,
}: Props) => {
  return (
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
            spacing={rowGapPx ? 0 : 3}
            justifyContent="space-between"
          >
            <Grid
              mobile={12}
              laptop={12}
              item
            >
              {divider ? <Divider sx={{ bgcolor: theme.color.subtitle }} /> : ''}
            </Grid>
            {children &&
              children.map((child: any) => (
                <Grid
                  sx={{
                    pt: rowGapPx,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  key={child}
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
};
export default GeneralContainer;
