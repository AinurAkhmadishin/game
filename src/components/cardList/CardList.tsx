import React, {useEffect, useMemo} from "react";
import _ from 'lodash'
import clsx from "clsx";
import Card from "../card/Card";
import {INITIAL_SCORE, STARGAZER} from "../../const";
import {useAppSelector} from "../../hooks/useAppSelector";
import "./cardList.scss"

export default React.memo(() => {
    const {level} = useAppSelector((store) => store.rootReducer.levelSlice);
    const arr = useMemo(() => Array.from(Array(INITIAL_SCORE + (level-1)*8).keys()), [level]);

    return (
        <div className={clsx("cardList")}>
            <div className={clsx("board", level > 1 && 'boardOtherLevel')}>
            {_.shuffle(arr).map((item) => (<Card num={item + 1} len = {arr.length} key={item}/>))}
            </div>
        </div>
    )
})
