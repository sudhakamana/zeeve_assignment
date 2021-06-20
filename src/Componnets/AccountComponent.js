import React, { Fragment } from 'react';
import InputComponentTwo from './InputComponentTwo';

const AccountComponent = () => {
    return (
        <Fragment>
            <div className="mt-5">
                <h4>Account Settings</h4>
                <div>
                    &gt; <i className="fas fa-home"></i> &gt; Account Settings
                </div>
                <div className="card shadow p-3 mb-5 bg-white rounded mt-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12 col-md-12" >
                                <form className="mt-2">
                                    <div className='card-header bg-light border-card'>
                                        <h6>log Settings</h6>
                                    </div>
                                    <div className="row  m-3">
                                        <div className="col-lg-8 col-md-8">
                                            <InputComponentTwo label="Number of day to keep logs" placeholder="Enter no.of days to keep logs" id="name" type="text" />
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <span>
                                                <button className="btn btn-success">Save</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='card-header bg-light border-card'>
                                        <h6>SMTP Settings</h6>
                                    </div>
                                    <div className="row  m-3">
                                        <div className="col-lg-6 col-md-6">
                                            <InputComponentTwo label="Host" placeholder="Enter Cost" id="host" type="text" />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <InputComponentTwo label="Port" placeholder="Please port name" id="port" type="text" />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <InputComponentTwo label="Username" placeholder="Enter User Name" id="usname" type="text" />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <InputComponentTwo label="Password" placeholder="Please enter password" id="passord" type="pasword" />
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <label>USE TLS</label>
                                            <label className="switch ml-5 mt-1">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <div className="col-lg-3 col-md-3 mt-1 ">
                                            <button className="btn btn-success">Apply</button>
                                        </div>
                                    </div>
                                    <div className='card-header bg-light border-card'>
                                        <h6>Notification Settings</h6>
                                    </div>
                                    <div className="row  m-3">
                                        <div className="col-md-6 col-lg-6">
                                            <label>Nodes Activity</label>
                                            <span className="ml-5">
                                                <input type="checkbox" className="form-check-input " id="customCheck" name="example1" />
                                                <span className="label" htmlFor="customCheck">Subscribe</span>
                                            </span>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <label>Fedaration Activity</label>
                                            <span className="ml-5">
                                                <input type="checkbox" className="form-check-input " id="customCheck" name="example1" />
                                                <span className="label" htmlFor="customCheck">Subscribe</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='card-header bg-light border-card'>
                                        <h6>2FA Settings</h6>
                                    </div>
                                    <div className='row m-3'>
                                        <div className="col-lg-6 col-md-6">
                                            <label>2FA</label>
                                            <span className="ml-3">
                                                <span> false</span>
                                                <label className="switch ml-1 mr-1 mt-1">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label> <span>true</span>
                                            </span>
                                        </div>
                                        <div className='col-lg-6 col-md-6'>
                                            <InputComponentTwo label="2FA Token" placeholder="Please enter token" id="name" type="text" />
                                        </div>
                                    </div>
                                    <div className='card-header bg-light border-card'>
                                        <h6>Account Settings</h6>
                                    </div>
                                    <div className="row m-3">
                                        <div className='col-lg-6 col-md-6'>
                                            <InputComponentTwo label="User name" placeholder="Enter user name" id="USname" type="text" />
                                        </div>
                                    </div>
                                    <div className="row m-3">
                                        <div className='col-lg-6 col-md-6'>
                                            <InputComponentTwo label="Password" placeholder="Please enter passwword" id="passordmain" type="passord" />
                                        </div>
                                    </div>
                                    <div className="row m-3">
                                        <div className='col-lg-6 col-md-6'>
                                            <InputComponentTwo label="Re-Password" placeholder="Please re-enter passwword" id="passordmain" type="passord" />
                                        </div>
                                    </div>
                                    <div className='card-header bg-light border-card'>
                                        <h6>Fedaration Settings</h6>
                                    </div>
                                    <div className="row m-3">
                                        <div className="col-lg-6 col-md-6">
                                            <label>Autopilot mode</label>
                                            <span className="ml-3">
                                                <span> Off</span>
                                                <label className="switch ml-1 mr-1 mt-1">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label> <span>On</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='row m-3'>
                                        <div className="col-lg-3 col-md-3">
                                            <button className="btn btn-success">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AccountComponent;