import React, {useEffect, useState} from 'react';
import { GiTrophyCup } from "react-icons/gi";
import {Button, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";
import {useResultQuiz} from "../../store/resultQuizStore";
import {useQuizStep} from "../../store/quizStepStore";
import styles from './resultGame.module.scss';
import messages from './messages';
import {BEST_RESULT_KEY, GAME_KEY} from "../../consts/consts";

const ResultGame = ({showFullscreenAdv}) => {
    const [bestResult, setBestResult] = useState([])
    const {result, clearResult} = useResultQuiz();
    const {clearStep} = useQuizStep()
    const correctAnswers = result.filter(answer => answer).length;
    const uncorrectAnswers = result.length - correctAnswers;
    const bestAnswers = bestResult.filter(answer => answer).length;
    const bestUncorrectAnswers = bestResult.length - bestAnswers;

    useEffect(() => {
        const bestGame = JSON.parse(localStorage.getItem(BEST_RESULT_KEY))?.result;
        if(!bestGame || (bestGame && bestGame.filter(el => el).length < correctAnswers)) {
            localStorage.setItem(BEST_RESULT_KEY, JSON.stringify({
                result,
            }))
            setBestResult(result);
        } else {
            setBestResult(bestGame)
        }

   return () => {
       localStorage.setItem(GAME_KEY, JSON.stringify({
           step: 0,
           result: [],
       }))
   }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title}>{messages.title}</div>
            <StatGroup>
                <Stat>
                    <StatLabel>{messages.correctAnswers}</StatLabel>
                    <StatNumber>{correctAnswers}</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        {Math.ceil(correctAnswers * 100 / result.length)}%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>{messages.noCorrectAnswers}</StatLabel>
                    <StatNumber>{uncorrectAnswers}</StatNumber>
                    <StatHelpText>
                        <StatArrow type='decrease' />
                        {Math.ceil(uncorrectAnswers * 100 / result.length)}%
                    </StatHelpText>
                </Stat>
            </StatGroup>
            <div className={styles.title}><GiTrophyCup />{messages.bestResult}<GiTrophyCup /></div>
            <StatGroup>
                <Stat>
                    <StatLabel>{messages.correctAnswers}</StatLabel>
                    <StatNumber>{bestAnswers}</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        {Math.ceil(bestAnswers * 100 / bestResult.length)}%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>{messages.noCorrectAnswers}</StatLabel>
                    <StatNumber>{bestUncorrectAnswers}</StatNumber>
                    <StatHelpText>
                        <StatArrow type='decrease' />
                        { Math.ceil(bestUncorrectAnswers * 100 / bestResult.length) }%
                    </StatHelpText>
                </Stat>
            </StatGroup>
            <div className={styles.button}>
                <Button onClick={() => {
                    clearStep();
                    clearResult();
                    showFullscreenAdv()
                }}>{messages.repeat}</Button>
            </div>
        </div>
    );
};

export default ResultGame;