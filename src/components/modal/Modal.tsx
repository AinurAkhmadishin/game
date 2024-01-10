import {Modal} from "antd";
import {useAppSelector} from "../../hooks/useAppSelector";
import {setIsOpenModal, setStart, setStopTimer} from '../../store/startReducer';
import {resetScore} from '../../store/scoreSlice';
import {setLevel} from '../../store/levelSlice';
import {resetSeconds} from '../../store/timerSlice';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import './modal.scss'
import {secondsToMmSs} from "../../utils";

export default () => {
    const dispatch = useAppDispatch();
    const {isOpenModal} = useAppSelector((store) => store.rootReducer.startReducer);
    const {level} = useAppSelector((store) => store.rootReducer.levelSlice);
    const {seconds} = useAppSelector((store) => store.rootReducer.timerSlice);

    const closeModal = () => dispatch(setIsOpenModal(false));
    const bestTimes = localStorage.getItem('stargazer') ?? '';
    const bestTimeParse = JSON.parse(bestTimes);
    const getBestTime = () => {
        if(!bestTimeParse || !bestTimeParse[`level_${level}`]) return seconds;
        if(Number(bestTimeParse[`level_${level}`]) < seconds ) return Number(bestTimeParse[`level_${level}`]);
        return seconds;
    }
    return (
        <Modal
            title="Звездочёт"
            okText={'Далее'}
            open={isOpenModal}
            centered
            maskClosable={false}
            onOk={() => {
                dispatch(setLevel(level === 15 ? 1 : level + 1));
                dispatch(resetScore())
                dispatch(resetSeconds())
                dispatch(setStopTimer(false))
                closeModal();
            }}
            onCancel={() => {
                dispatch(setStart(false));
                closeModal();
            }}
        >
            <div className='info'>
                <div className='infoTitle'>Ваш результат</div>
                <div className='infoTime'>{secondsToMmSs(seconds)}</div>
            </div>
            <div className='info'>
                <div className='infoTitle'>Ваш рекорд</div>
                <div className='infoTime'>{secondsToMmSs(getBestTime())}</div>
            </div>
        </Modal>

    )
}
