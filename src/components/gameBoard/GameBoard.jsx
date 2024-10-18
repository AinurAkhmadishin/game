import React, {useEffect, useState} from 'react';
import {Button, IconButton} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import {useQuizStep} from "../../store/quizStepStore";
import {useResultQuiz} from "../../store/resultQuizStore";
import {useStartStore} from "../../store/startStore";
import QuizInfo from "../quizInfo/QuizInfo";
import TimeOutBlock from "../timeOutBlock/TimeOutBlock";
import QuestionBlock from "../questionBlock/QuestionBlock";
import ResultGame from "../resultGame/ResultGame";
import messages from './messages';
import data from '../../data/data.json'
import styles from './gameBoard.module.scss';
import {GAME_KEY} from "../../consts/consts";

let id;

const GameBoard = ({ysdk}) => {
    const [value, setValue] = useState('');
    const [second, setSecond] = useState(600);
    const {step, nextStep} = useQuizStep();
    const {addResult} = useResultQuiz();
    const {setStartGame} = useStartStore();

    const questionsCount = data.quiz.length;
    const hasNextQuestion = questionsCount !== step;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Генерируем случайный индекс от 0 до i
            const j = Math.floor(Math.random() * (i + 1));
            // Меняем местами элементы с индексами i и j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const showFullscreenAdv = () => {
        if (ysdk) {
            ysdk.adv.showFullscreenAdv({
                callbacks: {
                    onOpen: () => {
                        setStartGame()
                    },
                    onClose: () => {
                        console.log('Реклама закрыта')
                    },
                    onError: (error) => {
                        setStartGame()
                    },
                },
            });
        }
    };

    console.log(data.quiz.length)

    useEffect(() => {
         id = setInterval(() => {
            setSecond(prev => {
                if(second === 1) {
                    localStorage.setItem(GAME_KEY, JSON.stringify({
                        step: 0,
                        result: [],
                    }));
                    return
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(id);
    }, [second]);

    return (
        <section className={styles.wrapper}>
            {hasNextQuestion && Boolean(second) && <QuizInfo second={second}/>}
            {Boolean(!second) && hasNextQuestion && <TimeOutBlock showFullscreenAdv={showFullscreenAdv}/>}
            {hasNextQuestion ? <QuestionBlock second={second} setValue={setValue} value={value}/>
                : <ResultGame showFullscreenAdv={showFullscreenAdv}/>}
            <div>
                {hasNextQuestion && <div className={styles.buttons}>
                    <Button
                    isDisabled={!value}
                    onClick={() => {
                        const isCorrectAnswer = data.quiz[step].correctAnswer === value
                        addResult(data.quiz[step].correctAnswer === value)
                        localStorage.setItem(GAME_KEY, JSON.stringify({
                            step,
                            result: JSON.parse(localStorage.getItem(GAME_KEY))?.result?.length
                                ? [...JSON.parse(localStorage.getItem(GAME_KEY)).result, isCorrectAnswer]
                                : [isCorrectAnswer],
                        }))
                        setValue('');
                        nextStep();
                    }}
                >
                        {messages.next}
                </Button>

                    <IconButton onClick={() => {
                        showFullscreenAdv();
                }} aria-label='' icon={<FaHome/>} isDisabled={Boolean(!second)} id='home'/>
                    </div>
                }
            </div>
        </section>
);
};

export default GameBoard;