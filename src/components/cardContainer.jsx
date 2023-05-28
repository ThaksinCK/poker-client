import React from "react";
import Card from "./card";
import './cardContainer.css';

function CardContainer(){
    return(
        <div className="card-container">
            <Card status='active'/>
            <Card status='active'/>
            <Card status='active'/>
            <Card status=''/>
            <Card status=''/>
        </div>
    )
}

export default CardContainer