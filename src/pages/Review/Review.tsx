import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import ReviewPage from '@/components/ReviewPage';

// this component is only for routing
const Review = () => {
  const theme = useTheme();
  return <ReviewPage />;
  console.log('a', theme.palette);

  return (
    <div>
      {' '}
      <Button variant="contained">Click</Button>;
      <br />
      <p>This is atcilesfs </p>
    </div>
  );
};

export default Review;
