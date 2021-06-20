import React, { Fragment } from 'react';

const NavbarComponent = () => {
    return (
        <Fragment>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline navbar-form my-2 my-lg-0" role="search">
                        <div className="input-group">
                            <input type="text" className="search-box" placeholder="Search" />
                            <button type="submit" className="btn"><i className="fas fa-search"></i></button>
                        </div>
                    </form>

                    <div className="nav-item dropdown"><a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="_/"> <i className="fas fa-user-alt"></i></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/home/account">Action</a>

                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavbarComponent;