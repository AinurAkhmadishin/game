import React, {useEffect} from 'react';
import {useAppSelector} from '../hooks/useAppSelector'
import EntryPoint from '../components/enrtyPoint/EntryPoint';
import {setStart} from '../store/startReducer';
import './app.scss';
import GameBoard from '../components/gameBoard/GameBoard';
import {STARGAZER} from "../const";
import {useAppDispatch} from "../hooks/useAppDispatch";

function App() {
  const dispatch = useAppDispatch();
  const {isStart} = useAppSelector((store) => store.rootReducer.startReducer);

  useEffect(() => {
    const changeStorage = () => {
      if(!localStorage.getItem(STARGAZER)) {
        dispatch(setStart(false));
      };
    }
    window.addEventListener("storage", changeStorage);
    return () => window.removeEventListener('storage', changeStorage)
  }, [dispatch])

  return (
    <div className="app">
      {!isStart ? <EntryPoint/> : <GameBoard />}
    </div>
  );
}

export default App;
