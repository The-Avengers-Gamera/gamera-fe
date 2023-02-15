import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  VideogameAssetRounded,
  ManageSearchRounded,
  FeedRounded,
  RateReviewRounded,
  MoreHorizRounded,
} from '@mui/icons-material';

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.color.bg_light};
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  justify-content: center;
  align-text: center;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-text: center;
  padding: 10%;
  margin: 5%;
  font-size: 20;
`;

const ImageItem = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-text: center;
  padding: 10%;
  margin: 5%;
`;

const NavBar = () => (
  <Aside>
    <Nav>
      <ItemContainer>
        <ImageItem src="" alt="Logo" />
      </ItemContainer>
      <ItemContainer>
        <VideogameAssetRounded />
        <Link to="/game">Games</Link>
      </ItemContainer>
      <ItemContainer>
        <ManageSearchRounded />
        <Link to="/search">Search</Link>
      </ItemContainer>
      <ItemContainer>
        <FeedRounded />
        <Link to="/news">News</Link>
      </ItemContainer>
      <ItemContainer>
        <RateReviewRounded />
        <Link to="/review">Reviews</Link>
      </ItemContainer>
      <ItemContainer>
        <MoreHorizRounded />
        <Link to="/more" className="more">
          More
        </Link>
      </ItemContainer>
    </Nav>
  </Aside>
);

export default NavBar;
