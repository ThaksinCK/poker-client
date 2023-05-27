import React from 'react'
import './actionButton.css'

function ActionButton(props){
    return(
        <button className={props.ac}>{props.ac}</button>
    )
}

export default ActionButton