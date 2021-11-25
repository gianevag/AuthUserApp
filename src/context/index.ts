import React from 'react'
import { AuthorizeUser } from '../interfaces';

export const AuthorizationContext = React.createContext<AuthorizeUser | null>(null);