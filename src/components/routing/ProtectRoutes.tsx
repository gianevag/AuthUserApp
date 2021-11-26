import React, { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthorizationContext } from "../../context"
import { Navigation } from "../Navigation"

export const ProtectRouters = () => {
    const authUser = useContext(AuthorizationContext)
   
    if(!authUser?.isAuthorized()) {
        return <Navigate to="/login"/>
    }
  
    return (<Navigation><Outlet/></Navigation>)
  }
  