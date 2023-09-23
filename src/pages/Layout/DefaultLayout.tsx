import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return <Outlet />;
};

export default DefaultLayout;
