import React from 'react';
import './App.css';

import {AuthorizationContext} from "./context"
import {AuthUser} from "./context/authorization"
import { HandleRouters } from './components/routing/HandleRouters';

const authUser = new AuthUser()

function App() {
  return (
    // should to create a context provider component
    <AuthorizationContext.Provider value={authUser}>
      <HandleRouters />
    </AuthorizationContext.Provider>
  );
}

export default App;
