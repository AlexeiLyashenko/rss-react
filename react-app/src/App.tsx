import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import Layout from 'pages/Layout/Layout';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'utils/ColorTheme';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
