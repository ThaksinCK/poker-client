import React from 'react'
import './css/table.css'
import Player from './player'
import CardContainer from './cardContainer'

function Table(){
    return(
        <div className='table'>
            <div className='white-line'>
                <div className='infrom-container'>
                    <CardContainer />
                    <p className='pot'>250</p>
                    <p className='logo'>CS Poker</p>
                    <p className='game-id'>Game ID: 956EB</p>
                </div>
            </div>
            
            <Player username='player01' chip='500' role='2-bet 200'postion='none-player p0' status=''/>
            <Player username='player02' chip='200' role='fold'postion='none-player p1' status=''/>
            <Player username='player03' chip='350' role='call'postion='none-player p2' status=''/>
            <Player username='player04' chip='800' role='call'postion='none-player p3' status=''/>
            <Player username='player05' chip='100' role=''postion='none-player p4' status=''/>
            <Player username='player06' chip='890' role=''postion='none-player p5' status=''/>
            <Player username='player07' chip='220' role=''postion='none-player p6' status=''/>
            <Player username='player08' chip='540' role='fold'postion='none-player p7' status=''/>
            <Player username='player09' chip='370' role='fold'postion='none-player p8' status=''/>
            <Player username='player10' chip='560' role='bet 100'postion='none-player p9' status=''/>
        </div>
    )
}

export default Table