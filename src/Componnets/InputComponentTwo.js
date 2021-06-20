import React, { Fragment } from 'react';

const InputComponentTwo = ({ label, placeholder, id, type }) => {
    return (
        <Fragment>
            <div className="form-group row">
                <label htmlFor={label} className="col-sm-5 col-form-label">{label}</label>
                <div className="col-sm-7">
                    <input type={type}  className="form-control" id={id} placeholder={placeholder} />
                </div>
            </div>
        </Fragment>
    )
}

export default InputComponentTwo;