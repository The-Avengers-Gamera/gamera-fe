import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.color.bg_light};
  height: 100%;
  border-right: 1px solid white;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavBar = () => (
  <Aside>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/game">Game</Link>
      <Link to="/news">News</Link>
      <Link to="/review">Review</Link>
      <Link to="/settings">Settings</Link>
    </Nav>
  </Aside>
);

export default NavBar;
