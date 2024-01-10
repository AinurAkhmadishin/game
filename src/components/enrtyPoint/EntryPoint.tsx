import {Button} from 'antd';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {setStart} from '../../store/startReducer';
import {STARGAZER} from "../../const";
import './entryPoint.scss';
import _ from "lodash";
import React, {useEffect, useState} from "react";
import Level from "../level/Level";
import {setLevel} from "../../store/levelSlice";

export default () => {
    const dispatch = useAppDispatch();
    const [levelCount, setLevelCount] = useState(0);

    useEffect(() => {
        if(!localStorage.getItem(STARGAZER)) {
            localStorage.setItem(STARGAZER, JSON.stringify({}))
        };

        const obj = localStorage.getItem(STARGAZER) ?? '';
        const count = Object.keys(JSON.parse(obj));
        setLevelCount(count.length);
    }, [])

    const onClick = () => {
        dispatch(setStart(true));
        if(!localStorage.getItem(STARGAZER)) localStorage.setItem(STARGAZER, JSON.stringify({}));
        else {
            console.log(Object.keys(JSON.parse(localStorage.getItem(STARGAZER)!)).length);
            dispatch(setLevel(Object.keys(JSON.parse(localStorage.getItem(STARGAZER)!)).length + 1));
        }

    }

    const arr = Array(15);

    return (
        <div className="entryPoint">
            <div>
                <div className='entryPointLevels'>
                    {_.shuffle(arr).map((_, i) => (<Level level={i + 1} isActivate = {levelCount >= i} key={i}/>))}
                </div>
            </div>
            <Button
                onClick={onClick}
                type="primary"
                className="buttonStart"
                size="large"
            >Старт</Button>
        </div>
    )
}
