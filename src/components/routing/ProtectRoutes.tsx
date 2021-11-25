import React, { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthorizationContext } from "../../context"

export const ProtectRouters = () => {
    const authUser = useContext(AuthorizationContext)
   
    if(!authUser?.isAuthorized()) {
        return <Navigate to="/login"/>
    }
  
    return (<><Outlet/></>)
  }
  