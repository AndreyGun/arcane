import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import UsersPage from './pages/UsersPage/UsersPage';
import { Box } from '@mui/material';
import Header from './component/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Box p={2}>
        <Routes>
          <Route path={"/users"} element={
            <UsersPage />
          } />
          <Route path={"/users/:id"} element={
            <UserDetailsPage />
          } />
          <Route path={"/about"} element={
            <AboutPage />
          } />
          <Route path="*" element={<UsersPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
