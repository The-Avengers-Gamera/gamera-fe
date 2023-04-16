import Button from '@mui/material/Button/Button';
import { Link } from 'react-router-dom';

const ButtonBack = () => {
  return (
    <Link to="/">
      <Button
        variant="text"
        sx={{ fontSize: '20px', fontWeight: 600, textTransform: 'capitalize' }}
      >
        &lt; Back
      </Button>
    </Link>
  );
};

export default ButtonBack;
