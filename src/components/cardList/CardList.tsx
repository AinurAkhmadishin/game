import React from "react";
import Card from "../card/Card";
import _ from 'lodash'
import "./cardList.scss"

export default () => {
    const size  = 40;
    const arr = Array.from(Array(size).keys())

    return (
        <div className="cardList">
            <div className="board">
            {_.shuffle(arr).map((item) => (<Card num={item + 1} len = {arr.length} key={item}/>))}
            </div>           
        </div>
    )
}