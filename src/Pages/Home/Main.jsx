import React, { useMemo } from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import TitlePage from './TitlePage'
import FontPage from './FontPage'
import HomePage from './HomePage'
import ColorsPage from './ColorsPage'
import PagesPage from './PagesPage'

const Main = () => {
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

export default Main
