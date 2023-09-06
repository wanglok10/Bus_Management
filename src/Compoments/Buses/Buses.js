import React from 'react';
import { Outlet } from 'react-router-dom';

export default function BusesLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}