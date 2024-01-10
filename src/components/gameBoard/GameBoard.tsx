import React from "react";
import {Button} from "antd";
import CardList from "../cardList/CardList";
import InfoBlock from "../infoBlock/InfoBlock";
import Modal from "../modal/Modal";
import {setStart} from "../../store/startReducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {resetSeconds} from "../../store/timerSlice";
import './gameBoard.scss';
import {resetScore} from "../../store/scoreSlice";

export default () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(setStart(false));
        dispatch(resetSeconds());
        dispatch(resetScore());
    }

    return(
        <section className="gameBoard">
            <InfoBlock/>
            <CardList/>
            <Modal/>
            <div className="footer">
                <Button
                    onClick={onClick}
                    type="primary"
                    size="middle"
                >Выйти</Button>
            </div>
        </section>
    )
}
