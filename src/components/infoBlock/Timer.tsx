import React, {useState, useEffect, useCallback} from "react";
import {useAppSelector} from '../../hooks/useAppSelector'
import {setSeconds} from '../../store/timerSlice';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {secondsToMmSs} from "../../utils";
import './infoBlock.scss';

export default () => {
    //const [seconds, setSeconds] = useState(0);
    const dispatch = useAppDispatch();
    const {seconds} = useAppSelector((store) => store.rootReducer.timerSlice);
    const {isStopTimer} = useAppSelector((store) => store.rootReducer.startReducer);

    const secondsToMmSs = (seconds: number) => new Date(seconds * 1000)
    .toISOString()
    .slice(14, 19);

    useEffect(() => {
        const id = setInterval(() => {
            !isStopTimer && dispatch(setSeconds())
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
