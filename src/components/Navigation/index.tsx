import React from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
    children: React.ReactNode | React.ReactNode[]
}

export const Navigation = ({children}: NavigationProps) => {
    return (
        <div>
            <Link to="/publicpage" style={{display:"block"}}> Public Page </Link>
            <Link to="/privatepage" style={{display:"block"}}> Private Page </Link>
            {children}
        </div>
    )
}
