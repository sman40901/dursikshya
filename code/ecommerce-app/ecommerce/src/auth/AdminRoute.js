import React from "react";
import { isAuthenticated } from ".";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute=()=>{
    isAuthenticated() && isAuthenticated().user.role === 1 ?
    <Outlet/>
    :(
        <Navigate to = 'signin' />
    )
}

export default AdminRoute