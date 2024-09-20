import React, { useMemo } from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import TitlePage from './TitlePage'
import FontPage from './FontPage'

const Main = () => {
    const routes = useMemo(() => (
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/font" element={<FontPage />} />
        </Routes>
      ), []);
    
      return (
        // <BrowserRouter>
          <Layout>{routes}</Layout>
        // </BrowserRouter>
      );
}

export default Main
