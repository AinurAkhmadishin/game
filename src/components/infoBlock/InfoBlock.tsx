import React, {useState, useEffect} from "react";
import Timer from "./Timer";
import {useAppSelector} from '../../hooks/useAppSelector';
import './infoBlock.scss';
import { store } from "../../store/store";
import Level from "./Level";

export default () => {
    const {score} = useAppSelector((store) => store.rootReduser.scoreSlice);

    return(
        <div className="infoBlock">            
            <div className="block">
                <div className="blockPlayerIcon"/>
                {localStorage.getItem('name')}
            </div>
            <Level/>
            <div className="block">
                <Timer /> 
                <>
                    <div className="score"/>
                    {score}
                </>
                
            </div>
        </div>
    )
}