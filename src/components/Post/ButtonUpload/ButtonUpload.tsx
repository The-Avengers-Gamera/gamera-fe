import Button from '@mui/material/Button';
import { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  hight: 100%;
`;

const Container = styled.div`
  display: flex;
  height: 145px;
  width: 245px;
  min-width: 245px;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 65px;
  height: 15px;
  width: 15px;
  background-color: rgb(179, 179, 179);
  border: none;
`;

const ButtonUpload = () => {
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource>();

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(undefined);
  };
  return (
    <MainContainer>
      <Button
        variant="contained"
        component="label"
        sx={{
          marginBottom: 1,
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
          onChange={(e) => imageChange(e)}
        />
      </Button>
      {selectedImage && (
        <Container>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="coverImage"
          />
          <DeleteButton onClick={removeSelectedImage}>x</DeleteButton>
        </Container>
      )}
    </MainContainer>
  );
};

export default ButtonUpload;
