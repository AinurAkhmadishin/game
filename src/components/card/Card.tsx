import React, { useMemo } from "react";
import clsx from "clsx";
import {useAppSelector} from '../../hooks/useAppSelector'
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {setScore} from '../../store/scoreSlice';
import {setStopTimer, setIsOpenModal} from '../../store/startReducer';
import soundOk from '../../assets/action_2.mp3'
import soundFail from '../../assets/fail.mp3'
import {STARGAZER} from "../../const";
import './card.scss';

interface Props {
    num: number;
    len: number;
}

enum Color{
    '#f86106',
    '#2957e3',
    '#bc5ffa',
    '#fe6b88',
    '#61c8ff',
    '#ff9d00',
}

export default ({num, len}: Props) => {
    const dispatch = useAppDispatch();
    const {score} = useAppSelector((store) => store.rootReducer.scoreSlice);
    const {level} = useAppSelector((store) => store.rootReducer.levelSlice);
    const {seconds} = useAppSelector((store) => store.rootReducer.timerSlice);
    const color = useMemo(() => Math.floor(Math.random() * 6), [])

   const actionOk  = () => new Audio(soundOk).play();
   const actionFail  = () => new Audio(soundFail).play();

    return (
        <div
        style={{backgroundColor:`${Color[color]}`}}
            className={clsx("card", "cardBorder")}
            onClick={() => {
                if((num === score) && (num !== len)) {
                    actionOk();
                    dispatch(setScore())
                }
                if((num !== score) && (num !== len)) {
                    actionFail();
                }
                if((score === len)) {
                    dispatch(setStopTimer(true));
                    dispatch(setIsOpenModal(true));
                    const bestTimes = localStorage.getItem('stargazer') ?? '';
                    const bestTimeParse = JSON.parse(bestTimes);
                    (bestTimeParse[`level_${level}`] > seconds ||  !bestTimeParse[`level_${level}`]) &&
                    localStorage.setItem(STARGAZER, JSON.stringify({...bestTimeParse, [`level_${level}`]: seconds}))
                }
            }}
        >
            {num}
        </div>
    )
}
