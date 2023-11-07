import {useState, useEffect} from "react";
import {Button, Input} from 'antd';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {setStart} from '../../store/startReducer';
import './entryPoint.scss';

export default () => {
    const [name, setName] = useState('');
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(setStart(true));
        !localStorage.getItem('name') && localStorage.setItem('name', name);
    }

    useEffect(() => {
        setName(localStorage.getItem('name') || '');
    }, []);

    return (
        <div className="entryPoint">
            <div>Звездочёт</div>
            <Input
                value={name}
                placeholder="Player name"
                className="inputName"
                onChange={(e => {
                    setName(e.target.value);
                })}
            />
            <Button 
                onClick={onClick} 
                type="primary"
                className="buttonStart"
                size="large"
                icon={<img src="/images/icon-start.png" width={30} height={30}/>}
                disabled = {name.length < 3}
            >Start</Button>
        </div>
    )
}