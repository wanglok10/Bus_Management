import React from 'react';
import { Outlet } from 'react-router-dom';

export default function GarageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}