import React, { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

const Menu = () => {
  
    const routes = useMemo(() => (
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/fonts" element={<FontPage />} />
      </Routes>
    ), []);
  
    return (
      // <BrowserRouter>
        <Layout>{routes}</Layout>
      // </BrowserRouter>
    );
  
}

export default Menu
