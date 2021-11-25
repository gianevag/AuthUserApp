import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LogIn } from '../../pages/LogIn';
import { PrivatePage } from '../../pages/PrivatePage';
import { PublicPage } from '../../pages/PublicPage';
import { ProtectRouters } from './ProtectRoutes';

export const HandleRouters = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicPage/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/publicpage" element={<PublicPage/>} />
          <Route element={<ProtectRouters />}>
            <Route path="/privatepage" element={<PrivatePage/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    )
  
  }