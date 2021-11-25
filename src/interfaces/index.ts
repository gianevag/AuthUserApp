export interface AuthorizeUser {
    isAuthorized: () => boolean;
    logInUser: () => void;
    logOutUser: () => void;
    signInUser: () => void; 
} 
