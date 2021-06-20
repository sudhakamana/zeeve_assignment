import React, { Fragment } from 'react';

const InputComponent = ({label, placeholder, id, type}) => {
    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor={label}>{label}</label>
                <input type={type} className="form-control" placeholder={placeholder} id={id} />
            </div>
        </Fragment>
    )
}

export default InputComponent;