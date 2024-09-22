import React, { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuLayout from '../../Components/Layout/Menu/MenuLayout';
import BuildingLoaderPage from './BuildingLoaderPage';
import MenuHomePage from './MenuHomePage';
import DraggableResizableComponent from '../../Components/Dragabble';

const Menu = () => {
  
    const routes = useMemo(() => (
      <Routes>
        <Route path="/" element={<MenuHomePage />} />
        <Route path="/building" element={<BuildingLoaderPage />} />
        <Route path="/drag" element={<DraggableResizableComponent />} />
      
      </Routes>
    ), []);
  
    return (
      // <BrowserRouter>
        <MenuLayout>{routes}</MenuLayout>
      // </BrowserRouter>
    );
  
}

export default Menu
