import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <aside>
    <Link to="/">Home</Link>
    <Link to="/game">Game</Link>
    <Link to="/news">News</Link>
    <Link to="/review">Review</Link>
    <Link to="/settings">Settings</Link>
  </aside>
);

export default NavBar;
