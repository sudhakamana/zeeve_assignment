import React, { Fragment } from 'react';
import avatar from '../images/avatar.jpg';
import InputComponent from './InputComponent';

const ProfileComponent = () => {
    return (
        <Fragment>
            <div className="mt-5">
                <h4>Profile</h4>
                <div>
                    &gt; <i className="fas fa-home"></i> &gt; Profile
                </div>
                <div className="card shadow p-3 mb-5 bg-white rounded mt-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                            <img src={avatar} className="rounded float-left avatr" alt="Cinque Terre" />
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <h1>Collaborator Console</h1>
                                <form className="mt-2">
                                    <InputComponent label="Name" placeholder ="Please enter name" id="name" type="text"/>
                                    <InputComponent label="Organization" placeholder ="Organization Name" id="organization" type="text"/>
                                    <InputComponent label="Email" placeholder ="Enter Email" id="email" type="email"/>
                                    <InputComponent label="Password" placeholder ="Enter Password" id="password" type="passord"/>
                                    <p>2FA</p>
                                    <div>
                                    <span> false</span>
                                    <label className="switch ml-1 mr-1 mt-1">
                                        <input type="checkbox"  />
                                        <span className="slider round"></span>
                                    </label> <span>true</span>
                                    </div>
                                    <button className="btn ass-btn btn-sm btn-success mt-3">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ProfileComponent;