import { AuthorizeUser } from '../interfaces';

export class AuthUser implements AuthorizeUser {

        logInUser () {
            window.sessionStorage.setItem("userIsAuthorized", "true")
        }

        logOutUser () {
            window.sessionStorage.removeItem("userIsAuthorized")
        }

        signInUser () {
            this.logInUser()
        }

        isAuthorized() {
            if(window.sessionStorage.getItem("userIsAuthorized")) {
                return true
            }
            return false
        }
}