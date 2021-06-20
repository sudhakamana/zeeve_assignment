import React, { Fragment } from 'react';
import DashBoardComponent from './DashBoardComponent';
import { HashRouter as  Route, Switch, Redirect } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import SideNav from './SideNav';
import ProfileComponent from './ProfileComponent';
import LoginComponent from './LoginComponent';
import AccountComponent from './AccountComponent';

const Home = () => {
    return (
        <Fragment>
            <NavbarComponent />
            <div className="container-fluid home bg-light">
                <div className="row">
                    <SideNav />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
                        <Switch>
                            <Route exact path="/home">
                                <Redirect to="/home" />
                            </Route>
                            <Route path="/home/dashboard">
                                <DashBoardComponent />
                            </Route>
                            <Route path="/home/profile">
                                <ProfileComponent />
                            </Route>
                            <Route path="/home/account">
                                <AccountComponent />
                            </Route>
                            <Route path="/logout">
                                <LoginComponent />
                            </Route>
                        </Switch>
                    </main>
                </div>

            </div>
        </Fragment>
    )
}

export default Home;