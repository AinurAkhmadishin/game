import React from 'react';
import {useAppSelector} from '../hooks/useAppSelector'
import Canvas from '../components/canvas/Canvas';
import EntryPoint from '../components/enrtyPoint/EntryPoint';
import './app.scss';
import GameBoard from '../components/gameBoard/GameBoard';

function App() {
  const {isStart} = useAppSelector((store) => store.rootReduser.startReducer);
  return (
    <div className="app">
      {!isStart ? <EntryPoint/> :
      <GameBoard />}
    </div>
  );
}

export default App;
