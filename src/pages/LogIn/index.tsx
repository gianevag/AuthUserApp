import React, { useContext, useState } from 'react'
import styles from "./index.module.css"

import {AuthorizationContext} from "../../context";
import { useNavigate } from 'react-router';

interface LoginFor {
    email: string,
    password: string,
}

export const LogIn = () => {

    const authUser = useContext(AuthorizationContext)
    const navigate =  useNavigate();

    const [loginFormData, setLoginFormData] = useState<LoginFor>({email: "test-email@gmail.com", password: ""})


    const emailHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        // add email validations 
        setLoginFormData((cur) => {
            cur.email = e.target.value
            return cur;
        })
    }

    const passwordHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        // add validations 
        setLoginFormData((cur) => {
            cur.password = e.target.value
            return cur;
        })
    }

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        authUser?.signInUser()
        
        if(authUser?.isAuthorized()) {
            navigate("/privatepage", {replace: true})
        }

        console.log('email: ', loginFormData.email, 'password: ', loginFormData.password)
    };

    return (
        <div className={styles.logIn}>
            <div className={styles.logIn_view}>
                <div className={styles.logIn_form}>
                    <form onSubmit={formHandler}>
                        <div className={styles.logIn_form_fields}>
                            <div className={styles.logIn_form_fields_email}>
                                <label htmlFor="email"> 
                                    Email 
                                    <input type="text" placeholder={loginFormData.email} onChange={emailHandler}/>
                                </label>
                            </div>
                            <div className={styles.logIn_form_fields_password}>
                                <label htmlFor="password"> 
                                    Password 
                                    <input type="password" onChange={passwordHandler}/>
                                </label>
                            </div>
                            <div className={styles.logIn_form_submit_button}>
                                <input type="submit" value="Submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
