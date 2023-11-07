import React, {useState, useEffect} from "react";
import {useAppSelector} from '../../hooks/useAppSelector'
import { useAppDispatch } from "../../hooks/useAppDispatch";
import './infoBlock.scss';


export default () => {
    const [seconds, setSeconds] = useState(0);
    const dispatch = useAppDispatch()
    const {isStopTimer} = useAppSelector((store) => store.rootReduser.startReducer);

    const secondsToMmSs = (seconds: number) => new Date(seconds * 1000)
    .toISOString()
    .slice(14, 19);
    
    

    useEffect(() => {
        const id = setInterval(() => {
            !isStopTimer && setSeconds(seconds => seconds + 1)
         }, 1000);    

        return () => {
            clearInterval(id);
        }
    }, [isStopTimer]);

    return(
        <div className="blockTimerIcon">
            <div className="timer"/>
            <span style={{width: '50px'}}>{`${secondsToMmSs(seconds)}`}</span>
        </div>
    )
}