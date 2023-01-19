import React from 'react';

import "./index.css"

export function ErrorMessage(props) {
    return(
        <span className='error-block'>{props.message}</span>
    )
}