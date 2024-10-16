import React from 'react';
import {
    Button,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";

import messages from './messages';
import {useStartStore} from "../../store/startStore";
import {useQuizStep} from "../../store/quizStepStore";
import {useResultQuiz} from "../../store/resultQuizStore";
import {GAME_KEY} from "../../consts/consts";

const HasStartedGameModal = (props) => {
    const {setStartGame} = useStartStore();
    const {clearStep, setStep} = useQuizStep();
    const {addAllResult} = useResultQuiz();

    return (
            <Modal closeOnOverlayClick={false} isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{messages.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            const startResult = JSON.parse(localStorage.getItem(GAME_KEY)).result;
                            setStep(startResult.length);
                            addAllResult(startResult)
                            setStartGame(true);
                            props.onClose();
                        }}>
                            {messages.continueGame}
                        </Button>
                        <Button onClick={() => {
                            localStorage.setItem(GAME_KEY, JSON.stringify({
                                step: 0,
                                result: [],
                            }))
                            clearStep();
                            setStartGame(true);
                            props.onClose();
                        }}>{messages.newGame}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    )
};

export default HasStartedGameModal;