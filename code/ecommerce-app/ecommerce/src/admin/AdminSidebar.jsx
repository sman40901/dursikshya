import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { isAuthenticated, signout } from "../auth";

const AdminSidebar = () => {
    const navigate = useNavigate();
    const { user } = isAuthenticated();
    return <>
        <div className="container-fluid">
            <div className="d-flex justify-content-end">
                <div className="col-md-1 mt-3">
                    <button className="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                        Menu
                    </button>
                    <div className="offcanvas offcanvas-end bg-dark text-white" tabindex="-1" id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel" style="width:300px;">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Admin Dashboard</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="list-unstyled">
                                <li><NavLink to="#" className="text-decoration-none text-white">Dashboard</NavLink></li>
                                <li><NavLink to="#" className="text-decoration-none text-white">Users</NavLink></li>
                                <li><NavLink to="#" className="text-decoration-none text-white">Products</NavLink></li>
                                <li><NavLink to="#" className="text-decoration-none text-white">Categories</NavLink></li>
                                <li><NavLink to="#" className="text-decoration-none text-white">Orders</NavLink></li>
                            </ul>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="list-unstyled">
                                <li><NavLink to="#" className="text-decoration-none text-white">
                                    <b>Name : </b> {user.name}
                                </NavLink></li>
                                <li><NavLink to="#" className="text-decoration-none text-white">
                                    <b>Email : </b> {user.email}
                                </NavLink></li>
                            </ul>
                            {/* <div className="img">
              <img
                src="https://thumbs.dreamstime.com/b/frontal-male-passport-photo-isolated-white-background-eu-standardization-frontal-male-passport-photo-isolated-white-149548031.jpg"
                alt="" className="img-fluid rounded-circle" width="200"/>
            </div> */}
                            <NavLink to="#" className="btn btn-danger text-decoration-none"
                                onClick={() => signout(() => {
                                    navigate('/signin')
                                })}>Logout</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default AdminSidebar;