import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';

const RootLayout = () => (
  <div className="root-layout">
    <NavBar />
    <Outlet />
  </div>
);

export default RootLayout;
