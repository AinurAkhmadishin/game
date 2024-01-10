import React from "react";
import {useAppSelector} from '../../hooks/useAppSelector';
import Level from "./Level";
import Timer from "./Timer";
import {STARGAZER} from "../../const";
import {secondsToMmSs} from "../../utils";
import './infoBlock.scss';

export default () => {
    const {score} = useAppSelector((store) => store.rootReducer.scoreSlice);
    const {level} = useAppSelector((store) => store.rootReducer.levelSlice);
    const bestTimes = localStorage.getItem(STARGAZER) ?? '';
    const time = JSON.parse(bestTimes)[`level_${level}`] ? secondsToMmSs(JSON.parse(bestTimes)[`level_${level}`]) : '—'

    return(
        <div className="infoBlock">
            <div className="block">
                <div className="blockPlayerIcon"/>
               Ваш рекорд: {time}
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
