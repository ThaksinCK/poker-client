import React from 'react'
import './player.css'

function Player(props){
    return(
        <div className={props.postion}>
            <div className='container'>
                <p className='username'>{props.username}</p>
                <p className='chip'>100K</p>
                <p className='role'>{props.role}</p>
            </div>
        </div>
    )
}

export default Player