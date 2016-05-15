import React from 'react';

//This is an example of a 'dumb' component
//It is a function that returns JSX and takes props from the parent calling it.
export default function GreeterMessage(props) {
    return (
        <div>
            <h2>{props.name} are you ready for this?</h2>
            <h3>{props.message}</h3>
        </div>
    );
}