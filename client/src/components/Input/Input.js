import React from "react";

const Input = props => (
    <div className="form-group text-center">
    <label {...props}>{props.label}</label>
        <input className="form-control" {...props} />
    </div>
);

export default Input;