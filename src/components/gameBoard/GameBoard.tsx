import React,  {useEffect, useState} from "react";
import CardList from "../cardList/CardList";
import './gameBoard.scss';
import InfoBlock from "../infoBlock/InfoBlock";

export default () => {

    return(
        <section className="gameBoard">
            <InfoBlock/>
            <CardList/>
        </section>

    )
}