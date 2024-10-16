import React from 'react';
import {Button, useDisclosure} from '@chakra-ui/react'
import logo from '../../accets/images/123.jpg';
import messages from "./message";
import styles from './home.module.scss';
import {useStartStore} from "../../store/startStore";
import HasStartedGameModal from "../hasStartedGameModal/HasStartedGameModal";
import {GAME_KEY} from "../../consts/consts";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {setStartGame} = useStartStore()

    const onClickStart = () => {
        if(JSON.parse(localStorage.getItem(GAME_KEY))?.result?.length){
            onOpen();
        } else {
            setStartGame(true)
        }
    }

    return (
        <React.Fragment>
            <section className={styles.home}>
                <div>
                    {messages.title}
                </div>
                {logo && <img src={'static/media/123.c96be3c9c8dcc1a20bd9.jpg'} alt="Logo" className={styles.home__img}/>}
                <Button
                    onClick={onClickStart}
                    color='#C7AA92'
                    variant='solid'
                    colorScheme='blackAlpha'>
                    {messages.buttonTitle}
                </Button>
            </section>
        <HasStartedGameModal isOpen={isOpen} onClose={onClose}/>
        </React.Fragment>
    );
};

export default Home;