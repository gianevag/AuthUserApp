import React from 'react';
import './App.css';

import {AuthorizationContext} from "./context"
import {AuthUser} from "./context/authorization"
import { HandleRouters } from './components/routing/HandleRouters';
import { Navigation } from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';

const authUser = new AuthUser()

function App() {
  return (
    <AuthorizationContext.Provider value={authUser}>
      <BrowserRouter>
        <HandleRouters />
      </BrowserRouter>
    </AuthorizationContext.Provider>
  );
}

export default App;
