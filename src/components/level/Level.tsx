import React from "react";
import clsx from "clsx";
import './level.scss';
import {setStart} from '../../store/startReducer';
import {setLevel} from '../../store/levelSlice';
import {useAppDispatch} from "../../hooks/useAppDispatch";

interface Props {
    level: number,
    isActivate: boolean,
}



export default ({level, isActivate}: Props) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        if(isActivate) {
            dispatch(setLevel(level));
            dispatch(setStart(true));
        }
    }

    return (
        <section className='wrapper'>
            <div className={clsx('level', isActivate && 'levelActive')} onClick={onClick}>{level}</div>
        </section>

    )
}
