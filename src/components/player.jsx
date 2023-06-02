import React from 'react'
import './css/player.css'

function Player(props){
    let cn = props.postion
    if(props.status === 'player-active'){
        cn += ' player-active'
    }
    else if(props.status === 'fold'){
        cn += ' player-fold'
    }
    return(
        <div className={cn}>
            <div className='container'>
                <button className='add-butttoon'>+</button>
                <p className='username'>{props.username}</p>
                <p className='chip'>{props.chip}</p>
                <p className='role'>{props.role}</p>
            </div>
        </div>
    )
}

export default Player