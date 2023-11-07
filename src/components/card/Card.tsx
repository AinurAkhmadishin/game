import React, { useMemo, useState } from "react";
import {useAppSelector} from '../../hooks/useAppSelector'
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {setScore} from '../../store/scoreSlice';
import {setStopTimer} from '../../store/startReducer';
import clsx from "clsx";
import './card.scss';

interface Props {
    num: number;
    len: number;
}

enum Color{
    '#ffdf76',
    '#2957e3',
    '#bc5ffa',
    '#fe6b88',
    '#61c8ff',
    '#ff9d00',
}

export default ({num, len}: Props) => {
    const dispatch = useAppDispatch()
    const {score} = useAppSelector((store) => store.rootReduser.scoreSlice);
    const color = useMemo(() => Math.floor(Math.random() * 6), []) 

    return (
        <div 
        style={{backgroundColor:`${Color[color]}`}}
            className={clsx("card", "cardBorder")}
            onClick={() => {
                if((num === score) && (num !== len)) {
                    dispatch(setScore())
                }
                if((score === len)) {
                    dispatch(setStopTimer(true));
                }
            }}
        >
            {num}
        </div>
    )
}