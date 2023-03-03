import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
// import ReviewPage from '@/components/ReviewPage';    // review page v1
import ReviewPageV2 from '@/components/ReviewPageV2'; // review page v2 (using reusable component ArticlesShowCase)
import NewsPageV2 from '@/components/NewsPageV2';

// this component is only for routing
const Review = () => {
  const theme = useTheme();
  // return <ReviewPage />;
  return <ReviewPageV2 />;
  // return <NewsPageV2 />; // just for test
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
