import React  from "react";
import './css/card.css'

function Card(props){
    return(
        <div className={props.status === 'active' ? 'card card-active' : 'card'}>
            <div className={props.status === 'active' ? 'card-white-line' : ''}></div>
        </div>
    )
}

export default Card