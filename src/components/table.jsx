import React from 'react'
import './table.css'
import Player from './player'

function Table(){
    return(
        <div className='table'>
            <div className='infrom-container'>
                <p>CS Poker</p>
                <p>pot: 250</p>
                <Player username='player01' role='UTG'postion='player p0'/>
                <Player username='player02' role='UTG+1'postion='player p1'/>
                <Player username='player03' role='MP'postion='player p2'/>
                <Player username='player04' role='MP+1'postion='player p3'/>
                <Player username='player05' role='HJ'postion='player p4'/>
                <Player username='player06' role='HJ+1'postion='player p5'/>
                <Player username='player07' role='CT'postion='player p6'/>
                <Player username='player08' role='BTN'postion='player p7'/>
                <Player username='player09' role='SB'postion='player p8'/>
                <Player username='player10' role='BB'postion='player p9'/>
            </div>

        </div>
    )
}

export default Table