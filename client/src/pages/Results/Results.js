import React, { Component } from "react";

const Results = props => (
    <li className="list-group-item">
        <a href={props.url}>{props.title}</a>
        <span>
            <button className="save-btn btn btn-success">Save</button>
        </span>
    </li>
)

export default Results;