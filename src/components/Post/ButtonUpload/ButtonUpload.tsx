import Button from '@mui/material/Button';

const ButtonUpload = () => {
  return (
    <Button
      variant="contained"
      component="label"
      sx={{
        '&:hover': {
          opacity: 0.8,
        },
      }}
    >
      Add a cover image
      <input
        hidden
        accept="image/*"
        multiple
        type="file"
      />
    </Button>
  );
};

export default ButtonUpload;
