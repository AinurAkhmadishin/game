import React from 'react';
import {Alert, AlertDescription, AlertTitle, IconButton} from "@chakra-ui/react";
import {FaRepeat} from "react-icons/fa6";
import messages from "./messages";
import styles from './timeoutBlock.module.scss'
import {useQuizStep} from "../../store/quizStepStore";
import {GAME_KEY} from "../../consts/consts";

const TimeOutBlock = ({showFullscreenAdv}) => {
    const {clearStep} = useQuizStep();

    return (
     <Alert status='warning' justifyContent='space-between'>
        <AlertTitle>{messages.title}</AlertTitle>
        <div className={styles.description}>
            <AlertDescription paddingRight='12px'>{messages.startGame}</AlertDescription>
            <IconButton onClick={() => {
                showFullscreenAdv()
                localStorage.setItem(GAME_KEY, JSON.stringify({
                    step: 0,
                    result: [],
                }))
                clearStep();
            }} aria-label='' icon={<FaRepeat/>}/>
        </div>
    </Alert>
    );
};

export default TimeOutBlock;