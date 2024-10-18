import React from 'react';
import {CircularProgress, CircularProgressLabel} from "@chakra-ui/react";
import styles from './quizInfo.module.scss';
import messages from "./messages";

const QuizInfo = ({second}) => {

    function secondsToMinutesAndSeconds(sec) {
        const minutes = Math.floor(sec / 60);
        const remainingSeconds = sec % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    return (
        <div className={styles.container}>
            <div>
                {messages.title}
            </div>
            <CircularProgress value={second} color='orange.600' max={600} min={0} trackColor='orange.200' className={styles.timer}>
                <CircularProgressLabel>{secondsToMinutesAndSeconds(second)}</CircularProgressLabel>
            </CircularProgress>
        </div>
    );
};

export default QuizInfo;