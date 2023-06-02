import React from 'react'
import './css/actionButton.css'

function ActionButton(props){
    return(
        <button className={props.ac}>{props.ac}</button>
    )
}

export default ActionButton