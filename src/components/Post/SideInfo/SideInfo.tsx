import { Typography } from '@mui/material';

const SideInfo = () => {
  return (
    <div>
      <Typography
        component="h4"
        variant="h4"
        sx={{ fontSize: '18px', fontWeight: 700, color: 'gamera.main', marginBottom: '0.2rem' }}
      >
        Writing a Great Post Title
      </Typography>
      <Typography
        component="p"
        variant="body1"
        sx={{ fontSize: '12px', fontWeight: 'normal', color: '#b3b3b3' }}
      >
        Think of your post title as a super short (but compelling!) description — like an overview
        of the actual post in one short sentence. Use keywords where appropriate to help ensure
        people can find your post by search.
      </Typography>
    </div>
  );
};

export default SideInfo;
