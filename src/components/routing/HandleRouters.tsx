import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LogIn } from '../../pages/LogIn';
import { PrivatePage } from '../../pages/PrivatePage';
import { PublicPage } from '../../pages/PublicPage';
import { ProtectRouters } from './ProtectRoutes';

export const HandleRouters = () => {
    return (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route element={<ProtectRouters />}>
            <Route path="/" element={<PublicPage/>} />
            <Route path="/privatepage" element={<PrivatePage/>} />
            <Route path="/publicpage" element={<PublicPage/>} />
          </Route>
        </Routes>
    )
  
  }