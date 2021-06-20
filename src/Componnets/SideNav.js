import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <Fragment>
            <nav className=" col-md-3 col-lg-2 d-md-block bg-white ">
                <div className=" pt-3">

                    <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
                        
                        <nav className="small" id="toc">
                            <ul className="list-unstyled">
                                <li className="my-2">
                                    <NavLink to="/home/dashboard" className="nav-link" aria-current="page">
                                        <i className="fas fa-home mr-2"></i>
                                        DashBoard
                                    </NavLink>

                                </li>
                                <li className="my-2">
                                    <NavLink to="/home/profile" className="nav-link ">
                                        <i className="fas fa-user-alt mr-2"> </i>
                                        Profile
                                    </NavLink>

                                </li>
                                <li className="my-2">
                                    <NavLink to="/" className="ml-3 inactive">
                                        <i className="fas fa-sign-out-alt mr-2"></i>
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                </div>cisww 
            </nav>

        </Fragment>
    )
}

export default SideNav;