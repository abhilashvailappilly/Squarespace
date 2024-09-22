import React, { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuLayout from '../../Components/Layout/Menu/MenuLayout';
import BuildingLoaderPage from './BuildingLoaderPage';

const Menu = () => {
  
    const routes = useMemo(() => (
      <Routes>
        <Route path="/building" element={<BuildingLoaderPage />} />
      
      </Routes>
    ), []);
  
    return (
      // <BrowserRouter>
        <MenuLayout>{routes}</MenuLayout>
      // </BrowserRouter>
    );
  
}

export default Menu
