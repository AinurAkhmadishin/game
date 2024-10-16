import React from 'react';
import {Progress, Radio, RadioGroup, Skeleton, Stack} from "@chakra-ui/react";
import {useQuizStep} from "../../store/quizStepStore";
import data from "../../data/data.json";
import styles from "../gameBoard/gameBoard.module.scss";

const QuestionBlock = ({second, setValue, value}) => {
    const {step} = useQuizStep();
    const progressBarValue = (100 / data.quiz.length ) * step;

    return (
        <div className={styles.container}>
            <Skeleton isLoaded={Boolean(second)} startColor='pink.500' endColor='orange.500'>
                <div className={styles.title}>{data.quiz[step].question}</div>
            </Skeleton>

            {Boolean(second) ? <RadioGroup onChange={setValue} value={value}>
                <Stack direction='column'>
                    {data.quiz[step].answers.map((answer, i) => (
                        <Radio
                            value={String(i)}
                            key={i}
                            size='lg'
                            colorScheme='orange'
                        >
                            {answer}
                        </Radio>))}
                </Stack>
            </RadioGroup> : <div>
                <Skeleton startColor='pink.500' endColor='orange.500' height='20px' style={{
                    marginBottom: '8px',
                }}/>
                <Skeleton startColor='pink.500' endColor='orange.500' height='20px' style={{
                    marginBottom: '8px',
                }}/>
                <Skeleton startColor='pink.500' endColor='orange.500' height='20px' style={{
                    marginBottom: '8px',
                }}/>
            </div>
            }
            <Progress value={progressBarValue} size='md' colorScheme='orange' className={styles.progressBar}/>
        </div>
    );
};

export default QuestionBlock;